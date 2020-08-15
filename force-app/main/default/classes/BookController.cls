public with sharing class BookController 
{
    @AuraEnabled(cacheable=true)
    public static List<Book__c> GetAllBooks()
    {
        return [select id, Name from Book__c];    
    }
}
