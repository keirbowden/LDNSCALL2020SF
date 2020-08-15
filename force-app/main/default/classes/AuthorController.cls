public with sharing class AuthorController 
{
    @AuraEnabled(cacheable=true)
    public static List<Author__c> GetAllAuthors()
    {
        return [select id, Name from Author__c];    
    }
}
