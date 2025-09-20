import AECSPPoster from '../../images/sponsors/AECSP.png';
import BanqueNationalePoster from '../../images/sponsors/Banque_Nationale.png';
import IRIUPoster from '../../images/sponsors/IRIU.png';
import IvadoPoster from '../../images/sponsors/Ivado.png';
import PactolePoster from '../../images/sponsors/Pactole.png';
import PolyMTLPoster from '../../images/sponsors/PolyMTL.png';
import PropolysPoster from '../../images/sponsors/Propolys.png';
import SEMLAPoster from '../../images/sponsors/SEMLA.png';
import TailedPoster from '../../images/sponsors/Tailed.png';
import VidensPoster from '../../images/sponsors/Videns.png';

export interface Sponsor {
  name: string;
  imgPath: string;
  website?: string;
}

export const SPONSORS: Sponsor[] = [
  {
    name: 'Banque Nationale',
    imgPath: BanqueNationalePoster,
    website: 'https://www.bnc.ca/',
  },
  {
    name: 'IVADO',
    imgPath: IvadoPoster,
    website: 'https://ivado.ca/en/',
  },
  {
    name: 'SEMLA',
    imgPath: SEMLAPoster,
    website: 'https://semla.quebec/en/',
  },
  {
    name: 'Polytechnique Montréal',
    imgPath: PolyMTLPoster,
    website: 'https://www.polymtl.ca/',
  },
  {
    name: 'AECSP',
    imgPath: AECSPPoster,
    website: 'https://aecsp.qc.ca/',
  },
  {
    name: 'Videns Analytics',
    imgPath: VidensPoster,
  },
  {
    name: 'Pactole',
    imgPath: PactolePoster,
  },
  {
    name: 'Tailed',
    imgPath: TailedPoster,
  },
  {
    name: 'Propolys',
    imgPath: PropolysPoster,
  },
  {
    name: 'IRIU',
    imgPath: IRIUPoster,
  },
];
