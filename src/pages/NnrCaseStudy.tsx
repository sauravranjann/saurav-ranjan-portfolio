import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Download, Boxes, CheckCircle2, AlertTriangle, RefreshCw, Terminal, Database, Server, Cpu, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { RESUME_URL } from "@/data/profile";
import { useEffect } from "react";

const FlowNode = ({ children, highlight = false }: { children: React.ReactNode; highlight?: boolean }) => (
  <div
    className={`px-4 py-2.5 rounded-lg border font-mono text-xs sm:text-sm text-center font-medium transition-all ${
      highlight
        ? "border-primary/50 bg-primary/10 text-primary shadow-[0_0_15px_rgba(28,222,70,0.15)]"
        : "border-border/70 bg-secondary/70 text-foreground"
    }`}
  >
    {children}
  </div>
);

const FlowArrow = ({ label }: { label?: string }) => (
  <div className="flex flex-col items-center justify-center my-1 text-primary">
    {label && <span className="font-mono text-[10px] text-muted-foreground uppercase mb-0.5 tracking-wider">{label}</span>}
    <span className="text-base font-bold leading-none">↓</span>
  </div>
);

const NnrCaseStudy = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-primary/20 selection:text-primary">
      {/* Top sticky navigation bar */}
      <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <Button variant="ghost" size="sm" asChild className="gap-2">
            <Link to="/">
              <ArrowLeft className="w-4 h-4" />
              Back to Portfolio
            </Link>
          </Button>

          <div className="flex items-center gap-3">
            <Button size="sm" variant="outline" asChild className="gap-2">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Resume
              </a>
            </Button>
            <Button size="sm" asChild className="gap-2">
              <a
                href="https://nnr.advatix.net/acs/login"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ExternalLink className="w-4 h-4" />
                Live Project
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container mx-auto px-4 py-12 max-w-5xl">
        {/* Header Section */}
        <div className="mb-12 animate-fade-up">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge variant="secondary" className="font-mono text-xs">
              Enterprise Logistics Backend
            </Badge>
            <Badge className="bg-primary/10 text-primary border-primary/20 text-xs">
              Production Case Study
            </Badge>
          </div>

          <h1 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
            NNR — Warehouse Management System
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-3xl mb-6">
            A distributed microservices architecture powering end-to-end warehouse workflows, order
            lifecycles, real-time inventory synchronization, asynchronous messaging, and automated EDI 945
            shipment reporting.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-secondary/40 border border-border/60">
            <div>
              <p className="text-xs text-muted-foreground">Employer</p>
              <p className="text-sm font-semibold">Embryo Software Solutions</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Client Engagement</p>
              <p className="text-sm font-semibold text-primary">Advatix APAC Logistics</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Role</p>
              <p className="text-sm font-semibold">Backend Engineer</p>
            </div>
            <div>
              <p className="text-xs text-muted-foreground">Architecture</p>
              <p className="text-sm font-semibold">13+ Microservices (Java / Spring Boot)</p>
            </div>
          </div>
        </div>

        {/* Navigation Table of Contents */}
        <div className="mb-14 p-5 rounded-xl bg-card border border-border/60">
          <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-3">
            Case Study Sections
          </h2>
          <div className="flex flex-wrap gap-2">
            {[
              { id: "problem", label: "Problem" },
              { id: "architecture", label: "Architecture" },
              { id: "role", label: "My Role" },
              { id: "service-ownership", label: "Service Ownership" },
              { id: "order-flow", label: "Order Flow" },
              { id: "kafka-flow", label: "Kafka Flow" },
              { id: "redis-caching", label: "Redis Caching" },
              { id: "edi-workflow", label: "EDI 945 Workflow" },
              { id: "server-setup", label: "Nginx / Server Setup" },
              { id: "database-layer", label: "Database Layer" },
              { id: "production-debugging", label: "Production Debugging" },
              { id: "challenges", label: "Challenges" },
              { id: "lessons-learned", label: "Lessons Learned" },
            ].map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="text-xs px-3 py-1.5 rounded-md bg-secondary/60 hover:bg-primary/10 hover:text-primary transition-colors border border-border/40 font-mono"
              >
                {sec.label}
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-16">
          {/* Section 1: Problem */}
          <section id="problem" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              1. The Problem
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Modern enterprise third-party logistics (3PL) and warehouse hubs manage thousands of SKU
                movements, concurrent multi-channel order inputs, dynamic bin and rack allocations, and strict
                carrier service-level agreements (SLAs).
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/60">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Tight Coupling</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Monolithic or tightly coupled synchronous architectures lead to cascading failures when
                    inventory allocation or notification services experience temporary spikes.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/60">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">External EDI Rigidity</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Trading partners require standardized EDI 945 (Warehouse Shipping Order Status Advice) files
                    strictly upon dispatch. A failure in EDI generation halts shipping acknowledgment.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/60">
                  <h4 className="font-semibold text-sm mb-2 text-foreground">Database Pressure</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    High read frequencies on customer records, order states, and SKU master data put intense
                    pressure on primary relational databases without an intermediate caching layer.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 2: Architecture */}
          <section id="architecture" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              2. System Architecture
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                The NNR Warehouse Management System comprises a 13+ microservice ecosystem built on Java and
                Spring Boot. Production deployments utilize Linux hosts with Nginx configured as a reverse proxy,
                routing external client traffic to multiple Spring Boot JAR services executing on isolated ports.
              </p>

              <div className="p-6 rounded-xl bg-secondary/30 border border-border/60 mb-6">
                <h3 className="font-mono text-sm text-primary uppercase font-bold text-center mb-6">
                  High-Level Architecture
                </h3>
                <div className="flex flex-col items-center max-w-md mx-auto">
                  <FlowNode>Client (Web App / Warehouse Scanners)</FlowNode>
                  <FlowArrow label="HTTPS" />
                  <FlowNode highlight>Nginx Reverse Proxy</FlowNode>
                  <FlowArrow label="Port Routing" />
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full">
                    <FlowNode>Omni</FlowNode>
                    <FlowNode highlight>Order</FlowNode>
                    <FlowNode>FEP</FlowNode>
                    <FlowNode highlight>Inventory</FlowNode>
                  </div>
                  <FlowArrow label="Event Bus" />
                  <FlowNode highlight>Kafka Message Broker</FlowNode>
                  <FlowArrow label="Asynchronous Consumption" />
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <FlowNode>Inventory Sync</FlowNode>
                    <FlowNode>SMS / Notifications</FlowNode>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 3: My Role */}
          <section id="role" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              3. My Role
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                As a Backend Engineer at Embryo Software Solutions on the Advatix APAC Logistics client
                engagement, my responsibility focused on implementing business-critical backend workflows, REST
                endpoints, event pipelines, and server-level routing.
              </p>
              <ul className="space-y-3 pt-2">
                {[
                  "Contributed across 4 core microservices: Omni, Order, FEP, and Inventory.",
                  "Engineered REST APIs for order updates, inventory checks, and warehouse shipment operations.",
                  "Configured and integrated Apache Kafka producers and consumers for decoupled order events.",
                  "Integrated Redis caching to mitigate repetitive database read operations.",
                  "Designed and built automated EDI 945 generation alongside a manual recovery mechanism.",
                  "Configured Nginx reverse proxy routes and maintained multiple Spring Boot JAR services on Linux servers.",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-foreground/90">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Section 4: Service Ownership */}
          <section id="service-ownership" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              4. Service Ownership & Core Responsibilities
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {[
                {
                  name: "Order Service",
                  focus: "Order Lifecycle & Events",
                  desc: "Manages order ingestion, validations, status state machines, and broadcasts Kafka messages upon order creation and shipment.",
                },
                {
                  name: "Inventory Service",
                  focus: "Stock & Allocation",
                  desc: "Handles real-time inventory reservation, stock decrements, and stock visibility across warehouse zones.",
                },
                {
                  name: "Omni Service",
                  focus: "Multi-Channel Ingestion",
                  desc: "Normalizes incoming client orders and payloads from distinct channels into standard internal data structures.",
                },
                {
                  name: "FEP Service",
                  focus: "Front-End Processing & Rules",
                  desc: "Executes warehouse business rules, validation checkpoints, and pre-processing prior to fulfillment execution.",
                },
              ].map((svc) => (
                <Card key={svc.name} className="p-6 card-gradient border-border/50">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-bold text-lg">{svc.name}</h3>
                    <Badge variant="secondary" className="font-mono text-xs">
                      {svc.focus}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">{svc.desc}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 5: Order Flow */}
          <section id="order-flow" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              5. Order Processing Flow
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                When an order enters the system, it traverses the multi-channel Omni gateway, gets validated
                through FEP, and is persisted in the Order Service before stock is reserved in Inventory.
              </p>
              <div className="flex flex-col items-center max-w-sm mx-auto p-6 bg-secondary/30 rounded-xl border border-border/60">
                <FlowNode>Order Ingestion (Omni Service)</FlowNode>
                <FlowArrow label="Validation" />
                <FlowNode>Front-End Processing (FEP Service)</FlowNode>
                <FlowArrow label="State Persisted" />
                <FlowNode highlight>Order Service (Status: CREATED)</FlowNode>
                <FlowArrow label="Kafka Event" />
                <FlowNode>Inventory Reservation & Downstream Prep</FlowNode>
              </div>
            </Card>
          </section>

          {/* Section 6: Kafka Flow */}
          <section id="kafka-flow" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              6. Kafka Event-Driven Architecture
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Direct point-to-point HTTP calls between microservices create fragile synchronous dependencies.
                Kafka was introduced to decouple order events from downstream consumers.
              </p>
              <div className="grid md:grid-cols-2 gap-6 items-center">
                <div className="p-5 rounded-xl bg-secondary/30 border border-border/60 flex flex-col items-center">
                  <h4 className="font-mono text-xs uppercase text-primary font-bold mb-4">
                    Kafka Event Pipeline
                  </h4>
                  <FlowNode highlight>Order Service</FlowNode>
                  <FlowArrow label="Publishes Event" />
                  <FlowNode>Kafka Topic: order-events</FlowNode>
                  <FlowArrow label="Asynchronous Ingestion" />
                  <div className="grid grid-cols-2 gap-2 w-full">
                    <FlowNode>Inventory Service</FlowNode>
                    <FlowNode>Notification / SMS</FlowNode>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="p-4 rounded-lg bg-card border border-border/60">
                    <h4 className="font-semibold text-sm mb-1 text-foreground">Order Created Event</h4>
                    <p className="text-xs text-muted-foreground">
                      Triggers inventory allocation and initializes shipment tracking without blocking the user
                      facing checkout API.
                    </p>
                  </div>
                  <div className="p-4 rounded-lg bg-card border border-border/60">
                    <h4 className="font-semibold text-sm mb-1 text-foreground">Order Status Update Event</h4>
                    <p className="text-xs text-muted-foreground">
                      Notifies customer notification services and updates warehouse dashboard metrics in real time.
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 7: Redis Caching */}
          <section id="redis-caching" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              7. Redis Caching Strategy
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Warehouse operators repeatedly query order details and customer account profiles during picking,
                packing, and scanning. Redis sits in front of the database layer to serve cache hits rapidly.
              </p>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/60 max-w-md mx-auto mb-6">
                <div className="flex flex-col items-center">
                  <FlowNode>API Request</FlowNode>
                  <FlowArrow />
                  <FlowNode highlight>Redis Cache</FlowNode>
                  <div className="grid grid-cols-2 gap-4 w-full mt-3">
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-[10px] text-primary uppercase font-bold mb-1">
                        Hit (Fast Path)
                      </span>
                      <FlowNode highlight>Return Response</FlowNode>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-mono text-[10px] text-muted-foreground uppercase font-bold mb-1">
                        Miss (Fallback)
                      </span>
                      <FlowNode>Query MySQL / Mongo</FlowNode>
                      <FlowArrow />
                      <FlowNode>Populate Redis</FlowNode>
                      <FlowArrow />
                      <FlowNode>Return Response</FlowNode>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 8: EDI 945 Workflow */}
          <section id="edi-workflow" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              8. EDI 945 Generation & Recovery Workflow
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                When a shipment is loaded and dispatched, the system generates an EDI 945 transaction
                (Warehouse Shipping Order Status Advice). Because external partner servers or network timeouts
                can interrupt dispatch confirmation, a manual re-trigger recovery mechanism was engineered.
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="p-6 rounded-xl bg-secondary/30 border border-border/60 flex flex-col items-center">
                  <h4 className="font-mono text-xs uppercase text-primary font-bold mb-4">
                    Happy Path Flow
                  </h4>
                  <FlowNode>Order</FlowNode>
                  <FlowArrow />
                  <FlowNode>Shipped Status</FlowNode>
                  <FlowArrow />
                  <FlowNode highlight>EDI 945 Generation</FlowNode>
                  <FlowArrow />
                  <FlowNode highlight>Success / Partner Acknowledged</FlowNode>
                </div>

                <div className="p-6 rounded-xl bg-secondary/30 border border-border/60 flex flex-col items-center">
                  <h4 className="font-mono text-xs uppercase text-accent font-bold mb-4">
                    Failure & Recovery Handling
                  </h4>
                  <FlowNode>EDI Transmission Failure</FlowNode>
                  <FlowArrow label="Flagged in Audit Log" />
                  <FlowNode>Failed Queue / State</FlowNode>
                  <FlowArrow label="Admin Operator Action" />
                  <FlowNode highlight>Manual Re-trigger</FlowNode>
                  <FlowArrow label="Regenerate & Retry" />
                  <FlowNode highlight>EDI 945 Sent</FlowNode>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 9: Nginx / Server Setup */}
          <section id="server-setup" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              9. Nginx & Linux Server Setup
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <p className="text-muted-foreground leading-relaxed mb-6">
                Backend services run as standalone Spring Boot JAR executables on Linux servers. Nginx serves as
                the reverse proxy to terminate SSL, handle routing based on API URL paths, and dispatch traffic
                to local internal ports.
              </p>
              <div className="p-6 rounded-xl bg-secondary/30 border border-border/60 max-w-lg mx-auto mb-6">
                <div className="flex flex-col items-center">
                  <FlowNode>Client HTTPS Request</FlowNode>
                  <FlowArrow />
                  <FlowNode highlight>Nginx Reverse Proxy (Port 443)</FlowNode>
                  <FlowArrow label="Path-Based Reverse Proxy Routing" />
                  <div className="grid grid-cols-2 gap-3 w-full">
                    <FlowNode>Omni JAR (127.0.0.1:8081)</FlowNode>
                    <FlowNode>Order JAR (127.0.0.1:8082)</FlowNode>
                    <FlowNode>FEP JAR (127.0.0.1:8083)</FlowNode>
                    <FlowNode>Inventory JAR (127.0.0.1:8084)</FlowNode>
                  </div>
                </div>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Hands-on exposure includes systemd service scripts, port forwarding, application restarts, and
                connectivity troubleshooting.
              </p>
            </Card>
          </section>

          {/* Section 10: Database Layer */}
          <section id="database-layer" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              10. Polyglot Database Layer
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              <Card className="p-6 card-gradient border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <Database className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">MySQL (Relational)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Utilized for transactional consistency across order lifecycles, structured shipment records,
                  and ledger accounting where ACID compliance and strict foreign key integrity are non-negotiable.
                </p>
              </Card>

              <Card className="p-6 card-gradient border-border/50">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 bg-primary/10 rounded-lg">
                    <Server className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg">MongoDB (Document)</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Leveraged for storing dynamic warehouse configurations, semi-structured catalog metadata, and
                  unbounded event telemetry where schema flexibility accelerates feature evolution.
                </p>
              </Card>
            </div>
          </section>

          {/* Section 11: Production Debugging */}
          <section id="production-debugging" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              11. Production Debugging & Incident Response
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50 space-y-4">
              <p className="text-muted-foreground leading-relaxed">
                Investigated live production incidents across microservices by analyzing application logs,
                inspecting Kafka topic lag, tracking Nginx error access logs, and isolating database contention.
              </p>
              <div className="grid sm:grid-cols-3 gap-4 pt-2">
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <p className="font-semibold text-sm mb-1 text-foreground">Log Correlation</p>
                  <p className="text-xs text-muted-foreground">
                    Tracing correlation IDs across Omni, Order, and Inventory to pinpoint transaction failures.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <p className="font-semibold text-sm mb-1 text-foreground">Consumer Lag</p>
                  <p className="text-xs text-muted-foreground">
                    Monitoring Kafka consumer group offsets to prevent inventory status stalls.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <p className="font-semibold text-sm mb-1 text-foreground">Service Health</p>
                  <p className="text-xs text-muted-foreground">
                    Analyzing memory utilization and thread dumps during peak warehouse operating hours.
                  </p>
                </div>
              </div>
            </Card>
          </section>

          {/* Section 12: Challenges */}
          <section id="challenges" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              12. Technical Challenges
            </h2>
            <div className="space-y-4">
              {[
                {
                  title: "Handling Third-Party EDI Disruptions",
                  detail:
                    "External partner SFTP or gateway drops caused shipment records to be marked as failed. Designed state tracking and manual re-trigger tooling so warehouse coordinators can replay EDI dispatch without corrupting internal order states.",
                },
                {
                  title: "Distributed Data Consistency",
                  detail:
                    "With Order and Inventory existing as separate services, synchronizing state without distributed locks required resilient Kafka consumer retries and idempotent processing.",
                },
                {
                  title: "Co-located JAR Maintenance on Linux Servers",
                  detail:
                    "Running multiple Spring Boot services on a single server required disciplined port mapping, distinct JVM memory heap constraints, and Nginx proxy location blocks.",
                },
              ].map((c, i) => (
                <Card key={i} className="p-5 card-gradient border-border/50">
                  <h3 className="font-bold text-base mb-1.5 text-primary">{c.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.detail}</p>
                </Card>
              ))}
            </div>
          </section>

          {/* Section 13: Lessons Learned */}
          <section id="lessons-learned" className="scroll-mt-24">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 flex items-center gap-3">
              <span className="w-2 h-6 bg-primary rounded-full" />
              13. Lessons Learned
            </h2>
            <Card className="p-6 md:p-8 card-gradient border-border/50">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <h4 className="font-semibold text-sm mb-1 text-foreground">Idempotency is Non-Negotiable</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    In distributed event systems, at-least-once delivery requires consumers to be strictly
                    idempotent to prevent double stock deductions.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <h4 className="font-semibold text-sm mb-1 text-foreground">
                    Failures Need Operator Recovery
                  </h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Automated retries can exhaust thresholds; providing clear UI/API recovery points like manual
                    EDI re-triggering keeps production operations moving.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <h4 className="font-semibold text-sm mb-1 text-foreground">Caching Invalidation Discipline</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Caching is only as good as its invalidation strategy. Mutative order operations must purge
                    relevant Redis keys immediately.
                  </p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/40 border border-border/60">
                  <h4 className="font-semibold text-sm mb-1 text-foreground">End-to-End Ownership</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    Understanding how Nginx proxies requests to Spring Boot JARs on Linux makes root-cause
                    analysis in production significantly faster.
                  </p>
                </div>
              </div>
            </Card>
          </section>
        </div>

        {/* Footer CTA */}
        <div className="mt-16 pt-8 border-t border-border/60 text-center space-y-4">
          <h3 className="text-2xl font-bold">Ready to Discuss Backend Engineering?</h3>
          <p className="text-muted-foreground max-w-md mx-auto text-sm">
            I am open to Java Backend Engineer and Software Developer roles. Let's build scalable systems together.
          </p>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            <Button asChild size="lg" className="gap-2">
              <Link to="/#contact">
                Get In Touch
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href={RESUME_URL} target="_blank" rel="noopener noreferrer">
                <Download className="w-5 h-5" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NnrCaseStudy;
