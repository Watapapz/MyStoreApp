import { IonContent, IonHeader, IonPage, IonSpinner, IonTitle, IonToolbar } from '@ionic/react';
import './Inventory.css';
import { useEffect, useState } from 'react';
import { MockProducts } from '../../data/products';
import { Product } from '../../models/product';
import ProductFList from '../../components/products/ProductFlist';
import Spinner from '../../components/spinner/Spinner';
import ProductList from '../../components/products/ProductList';

const Inventory: React.FC = () => {


  const [products, setProducts] = useState<Product[]>();

  useEffect(() => {

    setTimeout( () => {
      setProducts(MockProducts);
      console.log(products);
    }, 2000);
  },[]);

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Inventory</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inventory</IonTitle>
          </IonToolbar>
        </IonHeader>
        <div>
          {
            products && 
            <ProductList products={products}/>
          }
          {
            !products && 
            <Spinner/>
          }
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inventory;
