import { MAX_RATING } from '../constants/constants.ts';

function GetPrecentRating(rating: number) {
  return Math.round((rating * 100) / MAX_RATING);
}

export default GetPrecentRating;
