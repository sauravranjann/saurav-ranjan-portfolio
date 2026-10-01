import { Card } from "@/components/ui/card";

const Node = ({ children }: { children: React.ReactNode }) => (
  <div className="px-4 py-2 rounded-md border border-border bg-secondary/60 font-mono text-xs md:text-sm text-center">
    {children}
  </div>
);

const Arrow = () => (
  <div className="text-primary text-lg leading-none" aria-hidden="true">
    ↓
  </div>
);

const ArchitectureDiagrams = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-10">
      <Card className="p-6 card-gradient border-border/50">
        <h3 className="font-bold mb-4">Service Architecture</h3>
        <div className="flex flex-col items-center gap-2">
          <Node>Client</Node>
          <Arrow />
          <Node>Nginx Reverse Proxy</Node>
          <Arrow />
          <div className="grid grid-cols-2 gap-2 w-full">
            <Node>Omni</Node>
            <Node>Order</Node>
            <Node>FEP</Node>
            <Node>Inventory</Node>
          </div>
          <Arrow />
          <Node>Kafka</Node>
          <Arrow />
          <Node>Inventory / Notification</Node>
        </div>
      </Card>

      <Card className="p-6 card-gradient border-border/50">
        <h3 className="font-bold mb-4">EDI 945 Workflow</h3>
        <div className="flex flex-col items-center gap-2">
          <Node>Order</Node>
          <Arrow />
          <Node>Shipped</Node>
          <Arrow />
          <Node>EDI 945</Node>
          <Arrow />
          <Node>Success</Node>
          <div className="w-full my-2 border-t border-border/60" />
          <Node>Failure</Node>
          <Arrow />
          <Node>Manual Re-trigger</Node>
          <Arrow />
          <Node>EDI 945</Node>
        </div>
      </Card>

      <Card className="p-6 card-gradient border-border/50">
        <h3 className="font-bold mb-4">Redis Caching</h3>
        <div className="flex flex-col items-center gap-2">
          <Node>API Request</Node>
          <Arrow />
          <Node>Redis</Node>
          <Arrow />
          <Node>Cache Hit → Response</Node>
          <div className="w-full my-2 border-t border-border/60" />
          <Node>Cache Miss</Node>
          <Arrow />
          <Node>Database</Node>
          <Arrow />
          <Node>Redis</Node>
          <Arrow />
          <Node>Response</Node>
        </div>
      </Card>
    </div>
  );
};

export default ArchitectureDiagrams;
