using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using Microsoft.Graph;
using Microsoft.Graph.Models;
using Azure.Identity;
using System.Threading.Tasks;
namespace GraphSearchApiOutlookWeb
{
    public class AccessGraph
    {

        public GraphServiceClient GraphClientgen()
        {
            var scopes = new[] { "Mail.Read", "Files.Read.All", "Calendars.Read", "sites.ReadWrite.All" };

            // Multi-tenant apps can use "common",
            // single-tenant apps must use the tenant ID from the Azure portal
            var tenantId = "4009721b-988d-4192-ab54-b6fc59b56f27";

            // Value from app registration
            var clientId = "7418e929-cf28-422f-afce-99570251bbee";

            // using Azure.Identity;
            var options = new DeviceCodeCredentialOptions
            {
                AuthorityHost = AzureAuthorityHosts.AzurePublicCloud,
                ClientId = clientId,
                TenantId = tenantId,
                // Callback function that receives the user prompt
                // Prompt contains the generated device code that user must
                // enter during the auth process in the browser
                DeviceCodeCallback = (code, cancellation) =>
                {
                    Console.WriteLine(code.Message);
                    return Task.FromResult(0);
                },
            };

            // https://learn.microsoft.com/dotnet/api/azure.identity.devicecodecredential
            var deviceCodeCredential = new DeviceCodeCredential(options);

            var graphClient = new GraphServiceClient(deviceCodeCredential, scopes);
            return graphClient;
        }
       public void GraphTry()
        {
            var graphClient = GraphClientgen();
            // To initialize your graphClient, see https://learn.microsoft.com/en-us/graph/sdks/create-client?from=snippets&tabs=csharp
            var resulting = graphClient.Sites["67cb386e-9833-4823-b622-ff6e9297925e"].GetAsync();

            Console.WriteLine("hita");
        }
    }
}