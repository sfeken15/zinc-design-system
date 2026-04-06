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
import { AvatarPage } from '@/docs/pages/avatar-page';
import { BadgeGroupPage } from '@/docs/pages/badge-group-page';
import { ButtonGroupPage } from '@/docs/pages/button-group-page';
import { CheckboxPage } from '@/docs/pages/checkbox-page';
import { DropdownPage } from '@/docs/pages/dropdown-page';
import { MultiSelectPage } from '@/docs/pages/multi-select-page';
import { RadioButtonPage } from '@/docs/pages/radio-button-page';
import { SelectPage } from '@/docs/pages/select-page';
import { TooltipPage } from '@/docs/pages/tooltip-page';

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
        <Route path="components/avatar" element={<AvatarPage />} />
        <Route path="components/badge" element={<BadgePage />} />
        <Route path="components/badge-group" element={<BadgeGroupPage />} />
        <Route path="components/button" element={<ButtonPage />} />
        <Route path="components/button-group" element={<ButtonGroupPage />} />
        <Route path="components/card" element={<CardPage />} />
        <Route path="components/checkbox" element={<CheckboxPage />} />
        <Route path="components/dropdown" element={<DropdownPage />} />
        <Route path="components/input" element={<InputPage />} />
        <Route path="components/multi-select" element={<MultiSelectPage />} />
        <Route path="components/radio-button" element={<RadioButtonPage />} />
        <Route path="components/select" element={<SelectPage />} />
        <Route path="components/slider" element={<SliderPage />} />
        <Route path="components/stepdots" element={<StepDotsPage />} />
        <Route path="components/tag" element={<TagPage />} />
        <Route path="components/textarea" element={<TextareaPage />} />
        <Route path="components/tooltip" element={<TooltipPage />} />
      </Route>
    </Routes>
  );
}
