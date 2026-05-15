interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export function PageHero({ eyebrow, title, subtitle }: Props) {
  return (
    <section className="radial-green pt-40 pb-20 border-b border-border">
      <div className="container-x">
        <div className="text-xs uppercase tracking-[0.35em] text-gold mb-6">{eyebrow}</div>
        <h1 className="font-display text-5xl md:text-7xl max-w-4xl leading-[1.02]">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-6 text-lg text-muted-foreground max-w-2xl leading-relaxed">
            {subtitle}
          </p>
        )}
        <div className="hairline mt-12 max-w-xs" />
      </div>
    </section>
  );
}
