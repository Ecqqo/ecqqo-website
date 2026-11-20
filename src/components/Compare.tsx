import { useState, type CSSProperties } from "react";
import { useLocale } from "../i18n/locale";
import { Today } from "./Today";
import { WhatsAppChats } from "./WhatsAppChats";

export function Compare() {
  const { t } = useLocale();
  const { wa } = t.showcase.app;
  const [split, setSplit] = useState(46);
  const [after, setAfter] = useState(true);
  const sides = [wa.before, wa.after];

  return (
    <div className="compare">
      <div className="seg ba-switch" role="radiogroup" aria-label={wa.compare}>
        {sides.map((label, i) => (
          <button key={label} type="button" role="radio" aria-checked={after === (i === 1)} onClick={() => setAfter(i === 1)}>
            {label}
          </button>
        ))}
      </div>
      <div
        className={`ba ${after ? "show-after" : ""}`}
        style={{ "--split": `${split}%` } as CSSProperties}
        onClick={() => setAfter(!after)}
      >
        <WhatsAppChats />
        <div className="ba-after">
          <Today />
        </div>
        <span className="ba-line" />
        <span className="ba-label before">{sides[0]}</span>
        <span className="ba-label after">{sides[1]}</span>
        <input
          type="range"
          min={0}
          max={100}
          value={split}
          aria-label={wa.compare}
          onChange={(event) => setSplit(Number(event.target.value))}
        />
      </div>
    </div>
  );
}
