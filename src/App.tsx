import { Logo } from "@/components/logos/Logo";
import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Textarea } from "@/components/Textarea";
import { Tag } from "@/components/Tag";
import { Slider } from "@/components/Slider";
import { Badge } from "@/components/Badge";
import { Card } from "@/components/Card";
import { StepDots } from "@/components/StepDots";
import { PageShell } from "@/components/PageShell";
import { ToolHeader } from "@/components/ToolHeader";
import { useState } from "react";

export default function App() {
  const [sliderVal, setSliderVal] = useState(50);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);
  const tags = ["Bold", "Warm", "Modern", "Classic", "Playful", "Premium"];

  return (
    <PageShell>
      <ToolHeader toolName="Design System" />
      <div className="max-w-2xl mx-auto px-8 py-12 flex flex-col gap-12 w-full">

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Logo</p>
          <Logo variant="hologram" height={28} />
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Buttons</p>
          <div className="flex flex-wrap gap-3">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="accent">Accent</Button>
            <Button variant="primary" disabled>Disabled</Button>
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Badges</p>
          <div className="flex flex-wrap gap-3">
            <Badge label="Brand" variant="brand" />
            <Badge label="Accent" variant="accent" />
            <Badge label="Neutral" variant="neutral" />
            <Badge label="Success" variant="success" />
            <Badge label="Warning" variant="warning" />
            <Badge label="Error" variant="error" />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Tags</p>
          <div className="flex flex-wrap gap-2">
            {tags.map(t => (
              <Tag key={t} label={t} selected={selectedTag === t} onClick={() => setSelectedTag(selectedTag === t ? null : t)} />
            ))}
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Step Dots</p>
          <div className="flex flex-col gap-3">
            <StepDots total={4} current={1} />
            <StepDots total={4} current={2} />
            <StepDots total={4} current={3} />
            <StepDots total={4} current={4} />
          </div>
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Input</p>
          <Input label="Business name" placeholder="What's your business called?" />
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Textarea</p>
          <Textarea label="Description" placeholder="Tell us about your business..." rows={3} maxLength={300} showCount />
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Slider</p>
          <Slider
            leftLabel="Wendy's" leftSub="Playful & witty"
            rightLabel="Tiffany & Co." rightSub="Refined & elegant"
            label="Personality"
            value={sliderVal} onChange={setSliderVal}
          />
        </section>

        <section className="flex flex-col gap-4">
          <p className="text-xs font-medium tracking-widest uppercase text-[var(--text-tertiary)]">Cards</p>
          <div className="grid grid-cols-2 gap-3">
            <Card><p className="text-sm font-medium">Default card</p><p className="text-xs text-[var(--text-tertiary)] mt-1">Surface component</p></Card>
            <Card active><p className="text-sm font-medium">Active card</p><p className="text-xs text-[var(--text-tertiary)] mt-1">Selected state</p></Card>
          </div>
        </section>

      </div>
    </PageShell>
  );
}
