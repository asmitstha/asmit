'use client'

import { useEffect } from 'react'

export default function AosInit() {
  useEffect(() => {
    import('aos').then((mod) => {
      mod.default.init()
    })
  }, [])

  return null
}
