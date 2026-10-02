'use client'

import { useEffect, useState } from 'react'

export function PageLoader() {
  const [visible, setVisible] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const startedAt = performance.now()
    const duration = 1800
    let frame = 0

    const tick = (now: number) => {
      const elapsed = now - startedAt
      const next = Math.min(elapsed / duration, 1)
      setProgress(next)
      if (next < 1) frame = requestAnimationFrame(tick)
      else window.setTimeout(() => setVisible(false), 260)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [])

  if (!visible) return null

  return (
    <div className="page-loader" role="status" aria-label="Načítava sa Warmwell">
      <div className="page-loader-inner">
        <div className="page-loader-emblem" aria-hidden="true"><span>W</span></div>
        <div className="page-loader-kicker">KACHLIARSTVO <i /> 2026</div>
        <div className="page-loader-brand"><span>WARM</span><em>WELL</em></div>
        <div className="page-loader-tagline">Kachle s dušou</div>
        <div className="page-loader-rule" aria-hidden="true"><span className="page-loader-fill" style={{ width: `${progress * 100}%` }} /><i className="page-loader-scan" /></div>
        <div className="page-loader-meta"><span>Teplo s príbehom</span><span>{String(Math.round(progress * 100)).padStart(3, '0')}%</span></div>
      </div>
    </div>
  )
}
