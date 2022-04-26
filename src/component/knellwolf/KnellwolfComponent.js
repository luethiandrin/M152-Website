import * as React from 'react';

import f1 from '../../resource/knellwolf/default/f1.jpg';
import f1Edited from '../../resource/knellwolf/edited/f1.jpg';
import f2 from '../../resource/knellwolf/default/f2.jpg';
import f2Edited from '../../resource/knellwolf/edited/f2.jpg';
import f3 from '../../resource/knellwolf/default/f3.jpg';
import f3Edited from '../../resource/knellwolf/edited/f3.jpg';

import ImageComponent from '../shared/ImageComponent';

function KnellwolfComponent() {
    const f1Text = "In diesem Bild sieht man einen Hydranten. Er befindet sich von der Gibb aus in richtung Migros. Das Bild ist so bearbeitet, dass mehr Kontrast darin besteht, um es spannender zu machen."
    const f2Text = "In diesem Bild sieht man eine Pflanze, welche sich im Garten der Gibb befindet. Der Hintergrund hat eine ähnliche Farbe wie das Hauptobjekt. Das Hauptobjekt ist aber trotzdem erkennbar, weil es das einzige scharfe Objekt ist und somit gut zum Hintergrund passt."
    const f3Text = "In diesem Bild sieht man ein paar Statuen, welche sich oberhalb der unteren Schulhauses befinden. Der blaue Himmel und das grüne Gras bieten einen guten Kontrast für den Hintergrund."

    return (
        <div>
            <ImageComponent image={f3} editedImage={f3Edited} description={f3Text} initX='4912' initY='3688'/>
            <ImageComponent image={f2} editedImage={f2Edited} description={f2Text} initX='4912' initY='3688'/>
            <ImageComponent image={f1} editedImage={f1Edited} description={f1Text} initX='4912' initY='3688'/>
        </div>
    )
}

export default KnellwolfComponent;