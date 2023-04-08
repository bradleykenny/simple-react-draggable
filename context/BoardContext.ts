import { BoardLayout } from '@/type/BoardLayout';
import { createContext } from 'react';

export const BoardContext = createContext<BoardLayout | null>(null);
