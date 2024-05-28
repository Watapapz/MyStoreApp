import { IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonFabList, IonRow, IonSpinner, IonItem, IonLabel, IonList, IonItemDivider, IonItemGroup, IonIcon } from '@ionic/react';
import { Product } from '../../models/product';

interface ContainerProps {
    products: Product[];
}

const ProductList: React.FC<ContainerProps> = ({ products }) => {
  
    return (
        <div>      
            <IonList lines="none">
                {
                    products &&
                    products.map( (item) => {
                        return (
                            <IonItemGroup>
                                <IonItemDivider>
                                    <IonLabel>{item.name}</IonLabel>
                                </IonItemDivider>

                                { 
                                    item.variations && 
                                    item.variations.map((spec) => {
                                        return (
                                            <IonItem>
                                                <IonLabel>{spec.details.size}</IonLabel>
                                                <IonLabel color="medium" slot='end'>
                                                    <IonIcon>
                                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                                            <path d="M64 32C46.3 32 32 46.3 32 64v64c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 32c-17.7 0-32 14.3-32 32s14.3 32 32 32l0 64v96c0 17.7 14.3 32 32 32s32-14.3 32-32V384h80c68.4 0 127.7-39 156.8-96H352c17.7 0 32-14.3 32-32s-14.3-32-32-32h-.7c.5-5.3 .7-10.6 .7-16s-.2-10.7-.7-16h.7c17.7 0 32-14.3 32-32s-14.3-32-32-32H332.8C303.7 71 244.4 32 176 32H64zm190.4 96H96V96h80c30.5 0 58.2 12.2 78.4 32zM96 192H286.9c.7 5.2 1.1 10.6 1.1 16s-.4 10.8-1.1 16H96V192zm158.4 96c-20.2 19.8-47.9 32-78.4 32H96V288H254.4z"/>
                                                        </svg>
                                                    </IonIcon>
                                                    {spec.price}
                                                </IonLabel>
                                                <IonLabel color="medium" slot='end'>{spec.stock} left</IonLabel>
                                            </IonItem>
                                        )
                                    })
                                }
                            </IonItemGroup>
                        )
                    })
                }
            </IonList>
        </div>
    );
};

export default ProductList;
