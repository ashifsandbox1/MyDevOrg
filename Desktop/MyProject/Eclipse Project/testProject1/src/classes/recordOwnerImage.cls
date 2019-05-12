public class recordOwnerImage {
	//Lightning Component method start here --
	 @AuraEnabled    
    public static user fetchUserImage(Id recordOwnerId){
        system.debug('recordOwnerId----'+recordOwnerId);
        return [Select id,createdById,Name,SmallPhotoUrl From User Where Id =: recordOwnerId];
    }
}