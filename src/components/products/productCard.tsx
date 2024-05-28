import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonImg } from '@ionic/react';
import { Product } from '../../models/product';
import './products.css';

interface ContainerProps {
  product: Product;
}

const ProductCard: React.FC<ContainerProps> = ({ product }) => {
    return (
        <IonCard className='productCard'>
            <IonImg alt="Silhouette of mountains" src="https://ionicframework.com/docs/img/demos/card-media.png"/>
            <IonCardHeader>
                <IonCardTitle className='title'>{product.name}</IonCardTitle>
                <IonCardSubtitle className='description'>{product.description}</IonCardSubtitle>
            </IonCardHeader>
        </IonCard>
    );
};

export default ProductCard;
