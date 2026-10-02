'use client'

import { useEffect, useState } from 'react'
import { Sparkles, ZapOff } from 'lucide-react'

export function MotionToggle() {
  const [motionEnabled, setMotionEnabled] = useState(true)

  useEffect(() => {
    document.documentElement.dataset.motion = motionEnabled ? 'on' : 'off'
  }, [motionEnabled])

  return (
    <button
      className="motion-toggle"
      type="button"
      aria-pressed={motionEnabled}
      aria-label={motionEnabled ? 'Vypnúť animácie' : 'Zapnúť jemné animácie'}
      onClick={() => setMotionEnabled((enabled) => !enabled)}
    >
      {motionEnabled ? <Sparkles aria-hidden="true" /> : <ZapOff aria-hidden="true" />}
      <span>{motionEnabled ? 'Pohyb zap.' : 'Pohyb vyp.'}</span>
    </button>
  )
}
