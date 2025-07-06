import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faFlag, faMoneyBillWave, faBinoculars, faCamera, faPowerOff, faBicycle, faBuilding, faBolt, faBullhorn } from '@fortawesome/free-solid-svg-icons';

interface TravelTipProps {
  tip: {
    id: number;
    title: string;
    text: string;
    icon: string;
  }
}

const TravelTip = ({ tip }: TravelTipProps) => {
  // Map icon string to FontAwesome icon
  const getIcon = (iconName: string) => {
    switch(iconName) {
      case 'address-card':
        return faAddressCard;
      case 'flag':
        return faFlag;
      case 'money-bill-wave':
        return faMoneyBillWave;
      case 'binoculars':
        return faBinoculars;
      case 'camera':
        return faCamera;
      case 'power-off':
        return faPowerOff;
      case 'bicycle':
        return faBicycle;
      case 'building':
        return faBuilding;
      case 'bolt':
        return faBolt;
      case 'bullhorn':
        return faBullhorn;
      default:
        return faAddressCard;
    }
  };

  return (
    <div className="flex mb-6">
      <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mr-4">
        <FontAwesomeIcon icon={getIcon(tip.icon)} className="text-white" />
      </div>
      <div>
        <h4 className="font-bold text-lg mb-1">{tip.title}</h4>
        <p className="text-gray-600">{tip.text}</p>
      </div>
    </div>
  );
};

export default TravelTip;