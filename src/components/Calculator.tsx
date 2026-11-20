import { useState, type CSSProperties } from "react";
import { useLocale } from "../i18n/locale";

const soloPrice = 20;
const hoursBack = (10 * 0.25 * 52) / 12;
const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

export function Calculator() {
  const { t } = useLocale();
  const [rate, setRate] = useState(150);
  const value = hoursBack * rate;

  return (
    <div className="calc" data-reveal>
      <div className="calc-top">
        <label htmlFor="rate">{t.calculator.rate}</label>
        <output htmlFor="rate">
          <bdi dir="ltr">${number.format(rate)}/h</bdi>
        </output>
      </div>
      <input
        id="rate"
        type="range"
        min={50}
        max={1000}
        step={25}
        value={rate}
        onChange={(event) => setRate(Number(event.target.value))}
        style={{ "--fill": `${((rate - 50) / 950) * 100}%` } as CSSProperties}
      />
      <div className="stats" aria-live="polite">
        <div>
          <span>{t.calculator.hoursBack}</span>
          <b><bdi dir="ltr">{number.format(hoursBack)}h</bdi></b>
          <small>{t.calculator.perMonth}</small>
        </div>
        <div>
          <span>{t.calculator.value}</span>
          <b><bdi dir="ltr">${number.format(value)}</bdi></b>
          <small>{t.calculator.perMonth}</small>
        </div>
        <div>
          <span>{t.calculator.roi}</span>
          <b className="roi"><bdi dir="ltr">{number.format(value / soloPrice)}×</bdi></b>
          <small>{t.calculator.roiNote}</small>
        </div>
      </div>
      <p className="note">{t.calculator.note}</p>
    </div>
  );
}
