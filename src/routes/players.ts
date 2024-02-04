import express, { Request, Response, NextFunction } from 'express';
import data from '../data.json';
import { Player } from 'src/interfaces/player';

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
      res.statusCode = 404;
      const error = new Error('Player Not Found');
      return next(error);
    }

    res.json(player);
  } catch (error) {
    return next(error);
  }
});

export default router;
