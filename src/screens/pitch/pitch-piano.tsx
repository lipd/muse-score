import { Piano } from '@components/piano'
import { KEYS, KEYType } from '@components/piano/key-data'
import { pitch2Note } from '@utils/note'

export interface KEYState extends KEYType {
  active: boolean
}

export enum ActionKind {
  Activate = 'ACTIVATE',
  Deactivate = 'DEACTIVATE',
}

export interface Action {
  type: ActionKind
  pitch: string
}

const initialState = KEYS.map((key) => ({
  ...key,
  active: false,
}))

const generateState = (notes: string[]) => {
  if (notes.length === 0) return initialState
  return initialState.map((key) => {
    const note = notes[0]
    const keyNote = pitch2Note(key.pitch)
    if (note === keyNote) {
      return { ...key, active: true }
    }
    return key
  })
}

interface PitchPianoProps {
  notes: string[]
}
export const PitchPiano = ({ notes }: PitchPianoProps) => {
  const handlePianoKeyDown = () => {}
  const handlePianoKeyUp = () => {}

  const state = generateState(notes)

  return <Piano pianoState={state} handlePianoKeyDown={handlePianoKeyDown} handlePianoKeyUp={handlePianoKeyUp} />
}
