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
    <div className="calculator">
      <label className="slider">
        <span className="slider-head">
          <span>{t.calculator.rate}</span>
          <bdi dir="ltr">${number.format(rate)}/h</bdi>
        </span>
        <input
          type="range"
          min={50}
          max={1000}
          step={25}
          value={rate}
          onChange={(event) => setRate(Number(event.target.value))}
          style={{ "--fill": `${((rate - 50) / 950) * 100}%` } as CSSProperties}
        />
      </label>
      <div className="calculator-results" aria-live="polite">
        <div>
          <span>{t.calculator.hoursBack}</span>
          <strong>
            <bdi dir="ltr">{number.format(hoursBack)}h</bdi>
          </strong>
          <small>{t.calculator.perMonth}</small>
        </div>
        <div>
          <span>{t.calculator.value}</span>
          <strong>
            <bdi dir="ltr">${number.format(value)}</bdi>
          </strong>
          <small>{t.calculator.perMonth}</small>
        </div>
        <div>
          <span>{t.calculator.roi}</span>
          <strong className="roi">
            <bdi dir="ltr">{number.format(value / soloPrice)}×</bdi>
          </strong>
          <small>{t.calculator.roiNote}</small>
        </div>
      </div>
      <p className="calculator-note">{t.calculator.note}</p>
    </div>
  );
}
