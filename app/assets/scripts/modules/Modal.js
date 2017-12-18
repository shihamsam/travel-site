import $ from 'jquery';

class Modal {
    constructor(){
        this.openModalButton = $('.open-modal');
        this.modal = $('.modal');
        this.closeModalButton = $('.modal__close');
        this.events();
    }

    openModal(){
        this.modal.addClass('modal--is-visible'); 
        return false;
    }

    closeModal(){
        this.modal.removeClass('modal--is-visible');
    }

    events(){
        // clicking the open moda button
        this.openModalButton.click(this.openModal.bind(this));

        // closing modal button
        this.closeModalButton.click(this.closeModal.bind(this));

        // pushes any key
        $(document).keyup(this.keyPressHandler.bind(this));

    }

    keyPressHandler(e){
        if(e.keyCode == 27 ){
            this.closeModal();
        }
    }

}

export default Modal;