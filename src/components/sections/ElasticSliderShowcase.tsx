import React, { useState, useEffect } from 'react';
import { HugeiconsIcon } from '@hugeicons/react';
import VolumeHighIcon from '@hugeicons/core-free-icons/VolumeHighIcon';
import VolumeLowIcon from '@hugeicons/core-free-icons/VolumeLowIcon';
import { Sparkles, Sliders, Activity, Zap, CheckCircle2 } from 'lucide-react';
import ElasticSlider from '../ui/ElasticSlider';

export const ElasticSliderShowcase: React.FC = () => {
  const [sliderValue, setSliderValue] = useState<number>(65);
  const [hapticTension, setHapticTension] = useState<number>(45);
  const [steppedValue, setSteppedValue] = useState<number>(30);
  const [activePreset, setActivePreset] = useState<'lime' | 'orange' | 'gold'>('lime');
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const updateTheme = () => {
      const t = (document.documentElement.getAttribute('data-theme') as 'light' | 'dark') || 'light';
      setCurrentTheme(t);
    };
    updateTheme();
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
    return () => observer.disconnect();
  }, []);

  const presetColors = {
    lime: '#84cc16',
    orange: '#E76338',
    gold: '#F59E0B'
  };

  const trackBg = currentTheme === 'light' ? 'rgba(0, 0, 0, 0.08)' : 'rgba(255, 255, 255, 0.15)';

  return (
    <section className="section-wrapper interactive-lab-section" id="interactive-lab">
      {/* Invisible anchor for backward compatibility */}
      <div id="ai-showcase" className="workspace-anchor-target" />

      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <div className="section-kicker font-latin">
            <Sliders size={14} className="text-brand-orange animate-pulse" />
            <span>INTERACTION DESIGN // REACT BITS</span>
          </div>
          <h2 className="section-title">
            کنترل‌های الاستیک و <span className="accent-word" style={{ color: presetColors[activePreset] }}>میکرواینترکشن</span> زنده
          </h2>
          <p className="section-desc">
            پیاده‌سازی رابط‌های کاربری تعاملی با فیزیک فنری و کشسانی (Spring & Rubber-band Physics)؛ فیدبک ارگانیک،
            رفتار ملموس لمسی و مقاومت پویا در هنگام کشش فراتر از مرزها.
          </p>
        </div>

        {/* Main Stage Grid */}
        <div className="elastic-showcase-stage">
          {/* Main Interactive Sandbox Card */}
          <div className="elastic-sandbox-card">
            <div className="sandbox-card-header">
              <div className="sandbox-header-meta">
                <span className="sandbox-status-dot" style={{ backgroundColor: presetColors[activePreset] }} />
                <span className="font-latin text-xs font-bold text-zinc-700 dark:text-zinc-300">REACT BITS · ELASTIC SLIDER</span>
              </div>
              
              {/* Color Preset Palette */}
              <div className="sandbox-palette-group">
                <span className="palette-label font-latin">THEME</span>
                <button
                  type="button"
                  className={`palette-chip chip-lime ${activePreset === 'lime' ? 'is-active' : ''}`}
                  onClick={() => setActivePreset('lime')}
                  title="React Bits Lime (#84CC16)"
                  aria-label="Lime Theme"
                />
                <button
                  type="button"
                  className={`palette-chip chip-orange ${activePreset === 'orange' ? 'is-active' : ''}`}
                  onClick={() => setActivePreset('orange')}
                  title="ALDMC Persimmon (#E76338)"
                  aria-label="Persimmon Theme"
                />
                <button
                  type="button"
                  className={`palette-chip chip-gold ${activePreset === 'gold' ? 'is-active' : ''}`}
                  onClick={() => setActivePreset('gold')}
                  title="Cyber Gold (#F59E0B)"
                  aria-label="Gold Theme"
                />
              </div>
            </div>

            {/* Center Slider Display */}
            <div className="sandbox-slider-zone">
              <div className="slider-telemetry-header">
                <span className="slider-telemetry-title">خروجی سطح ولوم / شدت انرژی</span>
                <div className="slider-telemetry-badge font-latin">
                  <span className="telemetry-number" style={{ color: presetColors[activePreset] }}>
                    {Math.round(sliderValue)}
                  </span>
                  <span className="telemetry-unit">%</span>
                </div>
              </div>

              {/* The ElasticSlider Component */}
              <div className="elastic-slider-wrapper">
                <ElasticSlider
                  defaultValue={65}
                  value={sliderValue}
                  onChange={setSliderValue}
                  leftIcon={<HugeiconsIcon icon={VolumeLowIcon} size={20} />}
                  rightIcon={<HugeiconsIcon icon={VolumeHighIcon} size={20} />}
                  rangeColor={presetColors[activePreset]}
                  trackColor={trackBg}
                  iconColor={presetColors[activePreset]}
                  thumb={true}
                  thumbColor="#FFFFFF"
                  thickness={7}
                  activeThickness={14}
                  bounce={0.55}
                  maxStretch={55}
                  wheel={true}
                  valuePosition="bubble"
                  className="aldmc-elastic-slider-instance"
                />
              </div>

              <div className="slider-hint-row">
                <span className="slider-hint-item">
                  <Zap size={12} style={{ color: presetColors[activePreset] }} />
                  <span style={{ color: 'var(--muted)' }}>اسلایدر را بکشید یا از اسکرول ماوس استفاده کنید</span>
                </span>
                <span className="slider-hint-item font-latin" style={{ color: 'var(--muted)', fontWeight: 700 }}>
                  RUBBER STRETCH: ±55PX
                </span>
              </div>
            </div>

            {/* Secondary Dual Controls */}
            <div className="sandbox-secondary-controls">
              {/* Slider 2: Haptic Tension */}
              <div className="secondary-slider-item">
                <div className="secondary-slider-head">
                  <span className="secondary-label">تنش کشسانی و بازخورد فنری</span>
                  <span className="secondary-val font-latin">{Math.round(hapticTension)}%</span>
                </div>
                <ElasticSlider
                  defaultValue={45}
                  value={hapticTension}
                  onChange={setHapticTension}
                  rangeColor={presetColors[activePreset]}
                  trackColor={trackBg}
                  thumb={true}
                  thickness={5}
                  activeThickness={11}
                  bounce={0.65}
                  maxStretch={45}
                  valuePosition="none"
                  leftIcon={null}
                  rightIcon={null}
                  className="secondary-elastic-slider"
                />
              </div>

              {/* Slider 3: Stepped Increments */}
              <div className="secondary-slider-item">
                <div className="secondary-slider-head">
                  <span className="secondary-label">گام‌های مرحله‌ای پله‌ای (Stepped 10)</span>
                  <span className="secondary-val font-latin">{Math.round(steppedValue)}%</span>
                </div>
                <ElasticSlider
                  defaultValue={30}
                  value={steppedValue}
                  onChange={setSteppedValue}
                  isStepped={true}
                  stepSize={10}
                  ticks={true}
                  rangeColor={presetColors[activePreset]}
                  trackColor={trackBg}
                  thumb={true}
                  thickness={5}
                  activeThickness={11}
                  valuePosition="none"
                  leftIcon={null}
                  rightIcon={null}
                  className="secondary-elastic-slider"
                />
              </div>
            </div>
          </div>

          {/* Right Architecture & Philosophy Card */}
          <div className="elastic-philosophy-card">
            <div className="philosophy-card-badge font-latin">
              <Activity size={13} className="text-brand-orange" />
              <span>INTERACTIVE PHYSICS</span>
            </div>

            <h3 className="philosophy-title">معماری میکرواینترکشن الاستیک</h3>
            <p className="philosophy-lead">
              در دیزاین سیستم‌های پیشرفته، فرم و رفتار کنترل‌کننده‌ها باید زنده و پاسخ‌گو باشند؛ بدون ایستایی مکانیکی.
            </p>

            <div className="philosophy-points-list">
              <div className="philosophy-point-item">
                <div className="point-icon-box">
                  <CheckCircle2 size={16} className="text-lime-400" />
                </div>
                <div className="point-content">
                  <h4 className="point-title">پاسخ فنری ارگانیک (Damped Spring Physics)</h4>
                  <p className="point-desc">
                    محاسبه فیزیک نوسان فنری با فرکانس زاویه‌ای تائو در ۲۴۰ گام در ثانیه، ایجاد حسی طبیعی و خوشایند در کشیدن و رها کردن.
                  </p>
                </div>
              </div>

              <div className="philosophy-point-item">
                <div className="point-icon-box">
                  <CheckCircle2 size={16} className="text-brand-orange" />
                </div>
                <div className="point-content">
                  <h4 className="point-title">کشش کشسانی فرامرزی (Rubber-band Resistance)</h4>
                  <p className="point-desc">
                    وقتی کاربر اسلایدر را از حداقل یا حداکثر فراتر می‌برد، مقاومت غیرخطی کششی مانع از شوک بصری شده و با رها کردن باز می‌جهد.
                  </p>
                </div>
              </div>

              <div className="philosophy-point-item">
                <div className="point-icon-box">
                  <CheckCircle2 size={16} className="text-amber-400" />
                </div>
                <div className="point-content">
                  <h4 className="point-title">دسترس‌پذیری کامل (Accessible & Dual Mode)</h4>
                  <p className="point-desc">
                    پشتیبانی کامل از استاندارد WAI-ARIA Slider، ناوبری با کلیدهای جهت‌نما، اسکرول ویل و پشتیبانی از کاهش حرکت (Reduced Motion).
                  </p>
                </div>
              </div>
            </div>

            {/* Bottom Meta Pill */}
            <div className="philosophy-footer-meta">
              <Sparkles size={14} className="text-zinc-500" />
              <span className="font-latin text-xs text-zinc-400">
                COMPONENT POWERED BY REACT BITS · TAILORED FOR ALDMC
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ElasticSliderShowcase;
