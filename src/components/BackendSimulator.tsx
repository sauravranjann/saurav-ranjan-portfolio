import { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Play, RotateCcw, Zap, Server, Database, Radio, ArrowRight, ShieldCheck, CheckCircle2, AlertTriangle } from "lucide-react";

type SimMode = "kafka" | "cache" | "edi";

const BackendSimulator = () => {
  const [mode, setMode] = useState<SimMode>("kafka");
  const [step, setStep] = useState<number>(0);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [logs, setLogs] = useState<string[]>([]);
  const [cacheHit, setCacheHit] = useState<boolean>(true);
  const [ediFailed, setEdiFailed] = useState<boolean>(false);

  const resetSim = () => {
    setIsRunning(false);
    setStep(0);
    setLogs([]);
    setEdiFailed(false);
  };

  const addLog = (msg: string) => {
    const timestamp = new Date().toLocaleTimeString();
    setLogs((prev) => [`[${timestamp}] ${msg}`, ...prev.slice(0, 7)]);
  };

  const runSimulation = () => {
    if (isRunning) return;
    setIsRunning(true);
    setStep(1);
    setLogs([]);

    if (mode === "kafka") {
      addLog("POST /api/v1/orders received at Nginx reverse proxy (Port 443)");
      setTimeout(() => {
        setStep(2);
        addLog("Nginx forwarded payload to Order Service JAR (Port 8082)");
      }, 900);
      setTimeout(() => {
        setStep(3);
        addLog("Order persisted in MySQL with status CREATED (TX ID: #98421)");
      }, 1800);
      setTimeout(() => {
        setStep(4);
        addLog("Order Service published 'order-created' event to Kafka Topic: order-events");
      }, 2700);
      setTimeout(() => {
        setStep(5);
        addLog("Kafka Consumer: Inventory Service received event -> Stock Reserved");
        addLog("Kafka Consumer: Notification Service received event -> SMS Dispatched");
        setIsRunning(false);
      }, 3800);
    } else if (mode === "cache") {
      addLog("GET /api/v1/customers/99214 received");
      setTimeout(() => {
        setStep(2);
        addLog("Checking Redis In-Memory Cache (Key: customer:99214)...");
      }, 800);
      setTimeout(() => {
        if (cacheHit) {
          setStep(3);
          addLog("Redis CACHE HIT (Latency: 1.4ms) -> Returned cached JSON");
          setIsRunning(false);
        } else {
          setStep(4);
          addLog("Redis CACHE MISS -> Fallback to PostgreSQL Primary Database");
          setTimeout(() => {
            setStep(5);
            addLog("Fetched from DB (Latency: 48ms) -> Populated Redis Cache -> Returned JSON");
            setIsRunning(false);
          }, 1200);
        }
      }, 1600);
    } else if (mode === "edi") {
      addLog("Warehouse Dispatch: Order #78219 status set to SHIPPED");
      setTimeout(() => {
        setStep(2);
        addLog("Triggering automatic EDI 945 Generation routine");
      }, 900);
      setTimeout(() => {
        if (!ediFailed) {
          setStep(3);
          addLog("EDI 945 payload generated & SFTP transmitted to Partner. Acknowledged: 200 OK");
          setIsRunning(false);
        } else {
          setStep(4);
          addLog("PARTNER SFTP TIMEOUT -> EDI Generation Failed (Audit Log: STATE_EDI_FAIL)");
          setIsRunning(false);
        }
      }, 1900);
    }
  };

  const handleManualRetrigger = () => {
    setIsRunning(true);
    addLog("Operator Action: Manual Re-trigger Initiated via Admin Gateway");
    setTimeout(() => {
      setStep(5);
      addLog("EDI 945 Regenerated from DB state -> Replayed to Trading Partner -> SUCCESS");
      setEdiFailed(false);
      setIsRunning(false);
    }, 1200);
  };

  return (
    <section id="simulator" className="py-20 bg-background/90 relative overflow-hidden">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="text-center mb-10">
          <Badge className="bg-primary/10 text-primary border-primary/20 mb-3 font-mono text-xs">
            Interactive Architecture Playground
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-3">
            Live Distributed <span className="text-gradient">Backend Simulator</span>
          </h2>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            Experience how the microservices, Kafka event bus, Redis caching, and EDI 945 recovery
            workflows operate in real-time under the hood.
          </p>
        </div>

        {/* Simulator Container */}
        <Card className="p-6 md:p-8 card-gradient border-border/60 shadow-2xl relative overflow-hidden">
          {/* Controls Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-border/50">
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={mode === "kafka" ? "default" : "outline"}
                onClick={() => {
                  setMode("kafka");
                  resetSim();
                }}
                className="gap-2 text-xs font-mono"
              >
                <Radio className="w-3.5 h-3.5" />
                Kafka Event Bus
              </Button>
              <Button
                size="sm"
                variant={mode === "cache" ? "default" : "outline"}
                onClick={() => {
                  setMode("cache");
                  resetSim();
                }}
                className="gap-2 text-xs font-mono"
              >
                <Zap className="w-3.5 h-3.5" />
                Redis Cache Hit/Miss
              </Button>
              <Button
                size="sm"
                variant={mode === "edi" ? "default" : "outline"}
                onClick={() => {
                  setMode("edi");
                  resetSim();
                }}
                className="gap-2 text-xs font-mono"
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                EDI 945 & Recovery
              </Button>
            </div>

            <div className="flex items-center gap-3">
              {mode === "cache" && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setCacheHit(!cacheHit);
                    resetSim();
                  }}
                  className="text-xs font-mono border border-border/60"
                >
                  Mode: {cacheHit ? "🟢 Force Hit" : "🟡 Force Miss"}
                </Button>
              )}
              {mode === "edi" && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEdiFailed(!ediFailed);
                    resetSim();
                  }}
                  className="text-xs font-mono border border-border/60"
                >
                  Partner Server: {ediFailed ? "🔴 Simulate Failure" : "🟢 Healthy"}
                </Button>
              )}

              <Button
                size="sm"
                onClick={runSimulation}
                disabled={isRunning}
                className="gap-1.5 font-mono text-xs shadow-glow-sm"
              >
                <Play className="w-3.5 h-3.5" />
                {isRunning ? "Simulating..." : "Simulate Flow"}
              </Button>
              <Button size="sm" variant="ghost" onClick={resetSim} aria-label="Reset Simulation">
                <RotateCcw className="w-3.5 h-3.5" />
              </Button>
            </div>
          </div>

          {/* Interactive Visual Stage */}
          <div className="py-8">
            {mode === "kafka" && (
              <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 items-center">
                <div
                  className={`p-4 rounded-xl border text-center transition-all ${
                    step >= 1 ? "border-primary bg-primary/10 shadow-glow-sm scale-105" : "border-border/60 bg-secondary/30"
                  }`}
                >
                  <Server className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="font-mono text-xs font-bold">1. Client / Nginx</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Port 443 Proxy</p>
                </div>

                <div className="hidden sm:flex justify-center text-primary font-bold">→</div>

                <div
                  className={`p-4 rounded-xl border text-center transition-all ${
                    step >= 2 ? "border-primary bg-primary/10 shadow-glow-sm scale-105" : "border-border/60 bg-secondary/30"
                  }`}
                >
                  <Server className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="font-mono text-xs font-bold">2. Order Service</p>
                  <p className="text-[11px] text-muted-foreground mt-1">Spring Boot JAR</p>
                </div>

                <div className="hidden sm:flex justify-center text-primary font-bold">→</div>

                <div
                  className={`p-4 rounded-xl border text-center transition-all ${
                    step >= 4 ? "border-primary bg-primary/15 shadow-[0_0_30px_rgba(28,222,70,0.3)] scale-105" : "border-border/60 bg-secondary/30"
                  }`}
                >
                  <Radio className="w-5 h-5 mx-auto mb-2 text-primary animate-pulse" />
                  <p className="font-mono text-xs font-bold">3. Kafka Broker</p>
                  <p className="text-[11px] text-muted-foreground mt-1">order-events Topic</p>
                </div>
              </div>
            )}

            {mode === "kafka" && step >= 4 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-4 border-t border-border/40 animate-fade-in">
                <div className="p-3.5 rounded-lg border border-primary/40 bg-primary/5 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold font-mono">Inventory Service Consumer</p>
                    <p className="text-[11px] text-muted-foreground">Decremented stock in MySQL without blocking API</p>
                  </div>
                </div>
                <div className="p-3.5 rounded-lg border border-primary/40 bg-primary/5 flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  <div>
                    <p className="text-xs font-bold font-mono">SMS / Notification Consumer</p>
                    <p className="text-[11px] text-muted-foreground">Dispatched customer SMS tracking link</p>
                  </div>
                </div>
              </div>
            )}

            {mode === "cache" && (
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 items-center">
                <div className={`p-4 rounded-xl border text-center transition-all ${step >= 1 ? "border-primary bg-primary/10" : "border-border/60"}`}>
                  <p className="font-mono text-xs font-bold">1. API Request</p>
                  <p className="text-[11px] text-muted-foreground mt-1">/customers/99214</p>
                </div>
                <div className={`p-4 rounded-xl border text-center transition-all ${step >= 2 ? "border-primary bg-primary/10 shadow-glow-sm" : "border-border/60"}`}>
                  <Zap className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="font-mono text-xs font-bold">2. Redis Cache</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{cacheHit ? "HIT (~1.4ms)" : "MISS"}</p>
                </div>
                <div className={`p-4 rounded-xl border text-center transition-all ${step >= 4 ? "border-accent bg-accent/10" : "border-border/60"}`}>
                  <Database className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="font-mono text-xs font-bold">3. Database Query</p>
                  <p className="text-[11px] text-muted-foreground mt-1">{cacheHit ? "Bypassed" : "Executed (~48ms)"}</p>
                </div>
                <div className={`p-4 rounded-xl border text-center transition-all ${step >= 3 ? "border-primary bg-primary/10" : "border-border/60"}`}>
                  <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="font-mono text-xs font-bold">4. Client Response</p>
                  <p className="text-[11px] text-muted-foreground mt-1">200 OK JSON</p>
                </div>
              </div>
            )}

            {mode === "edi" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 items-center">
                  <div className={`p-4 rounded-xl border text-center transition-all ${step >= 1 ? "border-primary bg-primary/10" : "border-border/60"}`}>
                    <p className="font-mono text-xs font-bold">1. Order Shipped</p>
                    <p className="text-[11px] text-muted-foreground mt-1">Warehouse Confirmation</p>
                  </div>
                  <div className={`p-4 rounded-xl border text-center transition-all ${step >= 2 ? "border-primary bg-primary/10" : "border-border/60"}`}>
                    <ShieldCheck className="w-5 h-5 mx-auto mb-2 text-primary" />
                    <p className="font-mono text-xs font-bold">2. EDI 945 Generation</p>
                    <p className="text-[11px] text-muted-foreground mt-1">ANSI X12 Standard</p>
                  </div>
                  <div
                    className={`p-4 rounded-xl border text-center transition-all ${
                      step >= 3
                        ? "border-primary bg-primary/10"
                        : step === 4
                        ? "border-destructive bg-destructive/10"
                        : "border-border/60"
                    }`}
                  >
                    {step === 4 ? (
                      <AlertTriangle className="w-5 h-5 mx-auto mb-2 text-destructive animate-bounce" />
                    ) : (
                      <CheckCircle2 className="w-5 h-5 mx-auto mb-2 text-primary" />
                    )}
                    <p className="font-mono text-xs font-bold">
                      {step === 4 ? "Partner Timeout" : "3. SFTP Dispatch"}
                    </p>
                    <p className="text-[11px] text-muted-foreground mt-1">
                      {step === 4 ? "Failed Transmission" : "Acknowledged"}
                    </p>
                  </div>
                </div>

                {step === 4 && (
                  <div className="p-4 rounded-xl bg-destructive/10 border border-destructive/30 flex flex-col sm:flex-row items-center justify-between gap-3 animate-fade-in">
                    <div>
                      <p className="font-bold text-sm text-foreground flex items-center gap-2">
                        <AlertTriangle className="w-4 h-4 text-destructive" />
                        EDI Automatic Processing Interrupted
                      </p>
                      <p className="text-xs text-muted-foreground mt-1">
                        State preserved safely in audit queue. Use manual re-trigger recovery mechanism.
                      </p>
                    </div>
                    <Button size="sm" onClick={handleManualRetrigger} className="gap-2 bg-primary text-black hover:bg-primary/90 font-mono text-xs flex-shrink-0">
                      <RotateCcw className="w-3.5 h-3.5" />
                      Manual Re-trigger EDI
                    </Button>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Terminal Console Output */}
          <div className="p-4 rounded-xl bg-black/80 border border-border/60 font-mono text-xs">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-border/40 text-muted-foreground text-[11px]">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary" />
                Live Application Log Stream (Distributed Tracing)
              </span>
              <span>Active Node: order-service-prod-01</span>
            </div>
            <div className="space-y-1.5 min-h-[90px] text-foreground/90">
              {logs.length === 0 ? (
                <p className="text-muted-foreground/60 italic">
                  Press "Simulate Flow" to execute the distributed workflow across microservices...
                </p>
              ) : (
                logs.map((log, i) => (
                  <p key={i} className="animate-fade-in flex items-start gap-2">
                    <span className="text-primary font-bold">&gt;</span>
                    <span className={log.includes("Failed") || log.includes("TIMEOUT") ? "text-destructive font-semibold" : ""}>{log}</span>
                  </p>
                ))
              )}
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BackendSimulator;
