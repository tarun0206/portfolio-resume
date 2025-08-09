export function Metrics() {
  const metrics = [
    { label: "Users Impacted", value: "1M+" },
    { label: "APIs Shipped", value: "150+" },
    { label: "Uptime on Projects", value: "99.98%" },
    { label: "Performance Gains", value: "22%" },
  ];
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 grid grid-cols-2 sm:grid-cols-4 gap-6">
        {metrics.map((m) => (
          <div key={m.label} className="rounded-xl border border-black/10 dark:border-white/15 p-5 text-center">
            <div className="text-2xl font-bold">{m.value}</div>
            <div className="text-xs mt-1 text-foreground/70">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}


