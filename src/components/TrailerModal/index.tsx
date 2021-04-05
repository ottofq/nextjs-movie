import React, { memo, useRef, useEffect, useCallback } from 'react'

import * as S from './styles'

interface Props {
  closeModal: () => void
  youtubeId: string
}

const TrailerModal = ({ closeModal, youtubeId }: Props) => {
  const ref = useRef(null)

  const escapeListener = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') {
      closeModal()
    }
  }, [])

  const clickListener = useCallback(
    (e: MouseEvent) => {
      if (!(ref.current! as any).contains(e.target)) {
        closeModal()
      }
    },
    [ref.current]
  )

  useEffect(() => {
    document.addEventListener('click', clickListener)
    document.addEventListener('keydown', escapeListener)

    return () => {
      document.removeEventListener('click', clickListener)
      document.removeEventListener('keydown', escapeListener)
    }
  })

  return (
    <S.Container>
      <S.Content ref={ref}>
        <iframe
          width="1080"
          height="600"
          allowFullScreen
          src={`https://www.youtube.com/embed/${youtubeId}`}
        />
      </S.Content>
    </S.Container>
  )
}

export default memo(TrailerModal)
