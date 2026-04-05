import { Routes, Route, Navigate } from 'react-router-dom';
import { DocsLayout } from '@/docs/layout/docs-layout';
import { IntroductionPage } from '@/docs/pages/introduction-page';
import { ColorsPage } from '@/docs/pages/colors-page';
import { TypographyPage } from '@/docs/pages/typography-page';
import { LogosPage } from '@/docs/pages/logos-page';
import { SpacingPage } from '@/docs/pages/spacing-page';
import { ButtonPage } from '@/docs/pages/button-page';
import { InputPage } from '@/docs/pages/input-page';
import { TextareaPage } from '@/docs/pages/textarea-page';
import { TagPage } from '@/docs/pages/tag-page';
import { SliderPage } from '@/docs/pages/slider-page';
import { BadgePage } from '@/docs/pages/badge-page';
import { CardPage } from '@/docs/pages/card-page';
import { StepDotsPage } from '@/docs/pages/step-dots-page';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<DocsLayout />}>
        <Route index element={<Navigate to="/introduction" replace />} />
        <Route path="introduction" element={<IntroductionPage />} />
        <Route path="colors" element={<ColorsPage />} />
        <Route path="typography" element={<TypographyPage />} />
        <Route path="logos" element={<LogosPage />} />
        <Route path="spacing" element={<SpacingPage />} />
        <Route path="components/button" element={<ButtonPage />} />
        <Route path="components/input" element={<InputPage />} />
        <Route path="components/textarea" element={<TextareaPage />} />
        <Route path="components/tag" element={<TagPage />} />
        <Route path="components/slider" element={<SliderPage />} />
        <Route path="components/badge" element={<BadgePage />} />
        <Route path="components/card" element={<CardPage />} />
        <Route path="components/stepdots" element={<StepDotsPage />} />
      </Route>
    </Routes>
  );
}
