import { LightningElement, track, wire } from 'lwc';
import GetAllBooks from '@salesforce/apex/BookController.GetAllBooks';
import GetAllAuthors from '@salesforce/apex/AuthorController.GetAllAuthors';
import { ShowToastEvent } from 'lightning/platformShowToastEvent'

export default class AllBooks extends LightningElement {
    @track books;
    @track authors;

    @wire(GetAllBooks, {})
    GotBooks(data, error) {
        if (data) {
            this.books=data;
        }
        else if (error) {
            const toastEvent = new ShowToastEvent({
                title: 'Error retrieving books',
                variant: 'error'
                });
            this.dispatchEvent(toastEvent);    
        }
    }

    @wire(GetAllAuthors, {})
    GotAuthors(data, error) {
        if (data) {
            this.authors=data;
        }
        else if (error) {
            const toastEvent = new ShowToastEvent({
                title: 'Error retrieving authors',
                variant: 'error'
                });
            this.dispatchEvent(toastEvent);    
        }
    }
}