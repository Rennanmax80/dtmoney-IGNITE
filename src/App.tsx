import { Dashboard } from './components/Dashboard';
import { Header } from './components/Header';
import { GobalStyle } from './styles/global';
import Modal from 'react-modal'

import { useState } from 'react';
import { NewTransactionModal } from './components/NewTransactionModal';

Modal.setAppElement('#root');


export function App() {


const [isNewTransactionModal, setIsNewTransactionModal ] = useState(false);

function handleOpenNewTransactionModal(){
  setIsNewTransactionModal(true);
}

function handleCloseNewTransactionModal(){
  setIsNewTransactionModal(false);
}

  return (
    <> 
    <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
    <Dashboard />

    <NewTransactionModal 
    isOpen={isNewTransactionModal} 
    onRequestClose={handleCloseNewTransactionModal}
    />
    <GobalStyle />
    </>
  );
}