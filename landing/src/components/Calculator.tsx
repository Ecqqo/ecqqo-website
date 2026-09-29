import { useState, type CSSProperties } from "react";
import { useLocale } from "../i18n/locale";

const soloPrice = 20;
const weeksPerMonth = 52 / 12;
const number = new Intl.NumberFormat("en-US", { maximumFractionDigits: 0 });

function Slider(props: { label: string; value: number; display: string; min: number; max: number; step: number; onChange: (value: number) => void }) {
  const fill = ((props.value - props.min) / (props.max - props.min)) * 100;
  return (
    <label className="slider">
      <span className="slider-head">
        <span>{props.label}</span>
        <bdi dir="ltr">{props.display}</bdi>
      </span>
      <input
        type="range"
        min={props.min}
        max={props.max}
        step={props.step}
        value={props.value}
        onChange={(event) => props.onChange(Number(event.target.value))}
        style={{ "--fill": `${fill}%` } as CSSProperties}
      />
    </label>
  );
}

export function Calculator() {
  const { t } = useLocale();
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(150);
  const [share, setShare] = useState(25);

  const hoursBack = hours * (share / 100) * weeksPerMonth;
  const value = hoursBack * rate;

  return (
    <div className="calculator">
      <div className="calculator-inputs">
        <Slider label={t.calculator.hours} value={hours} display={`${hours}h`} min={1} max={40} step={1} onChange={setHours} />
        <Slider label={t.calculator.rate} value={rate} display={`$${number.format(rate)}`} min={50} max={1000} step={25} onChange={setRate} />
        <Slider label={t.calculator.share} value={share} display={`${share}%`} min={10} max={60} step={5} onChange={setShare} />
      </div>
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
          <small>
            <bdi dir="ltr">${number.format(value * 12)}</bdi> {t.calculator.perYear}
          </small>
        </div>
        <div>
          <span>{t.calculator.roi}</span>
          <strong>
            <bdi dir="ltr">{number.format(value / soloPrice)}×</bdi>
          </strong>
          <small>{t.calculator.note}</small>
        </div>
      </div>
    </div>
  );
}
