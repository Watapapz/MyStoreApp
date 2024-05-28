import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFabList, IonRow, IonSpinner } from '@ionic/react';
import { Product } from '../../models/product';
import ProductCard from './productCard';
import Spinner from '../spinner/Spinner';

interface ContainerProps {
    products: Product[];
}

const ProductFList: React.FC<ContainerProps> = ({ products }) => {
  
    return (
        <div>          
            <IonRow>
                { 
                    products &&
                    products.map( (item) => {
                        return <ProductCard key={item.id} product={item}/>
                    })
                }
            </IonRow>
        </div>
    );
};

export default ProductFList;
