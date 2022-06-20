import * as React from 'react';
import './App.css';


function App() {
  return (
    <div className="App">
      <p>
        <span>
          Die Metadaten und die Beschreibung der einzelnen Bilder können jeweils mit einem Klick auf das Bild eingesehen werden!<br/>
          Zusätzlich kann das Bild mit einem erneuten Klick auf das innere Foto im Vollbild angesehen werden.
        </span><br/>
      Die Metadaten werden mithilfe exif-js angezeigt, wenn der Bedarf an spezifischeren Metadaten besteht,<br/>
      können diese durch den Donwload des Bildes und dann über die Properties des Files angesehen werden. <br/>
      Dies geht am besten, wenn man das Foto in einem neuen Tab geöffnet hat und mit Rechtsklick "save as" heruntergeladen wird.
      </p>
    </div>
  );
}

export default App;
