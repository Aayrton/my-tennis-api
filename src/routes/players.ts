import express, { Request, Response, NextFunction } from 'express';
import data from '../../data.json';
import { Player } from '../models/Player';

const router = express.Router();

// Get all players
router.get('/', (req: Request, res: Response, next: NextFunction) => {
  try {
    const filteredPlayers: Player[] = data.players.sort((a, b) => {
      if (a.id > b.id) {
        return 1;
      }

      return -1;
    });

    throw new Error('WOW');

    res.json(filteredPlayers);
  } catch (error) {
    return next(error);
  }
});

// Get player by id
router.get('/:id', (req: Request, res: Response, next: NextFunction) => {
  try {
    const player: Player | undefined = data.players.find(
      ({ id }) => id === parseInt(req.params.id)
    );

    if (typeof player === 'undefined') {
      throw new Error('Player Not Found');
    }

    res.json(player);
  } catch (error) {
    return next(error);
  }
});

export default router;
