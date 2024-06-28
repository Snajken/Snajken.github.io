Source of samples:
 https://github.com/OfficeDev/Office-Add-in-samples/tree/main/Samples/blazor-add-in/outlook-blazor-add-in 
(outlook add in using WASM blazor)
fungerar men har inte graph, att implementera graph i xml osv kan vara strul, extraherar mail data och attachment information (inklusive en del bas 64 information) själva attachmentet bör tas av Graph istället för office outlook api då den aldrig ger full tillgång till filerna genom de kommandon

https://github.com/microsoft-search/office-addin-samples/tree/master/Sample2.0
(outlook add in connected to graph)
dotnet med connection till microsoft graph, laddar in correct och får authentication key men blir inte igenkänd som auktoriserad, (troligtvis Entra admin sak) skrivet i JS och Jquery.

Rekomenderar att använda Graph samplen som en startpunkt för att enklare få in hemsidan i outlook och sedan ändra hemsidan till något lämpligare för att arbeta med graph. 

Visualisations paketet jag delade ligger i en branch på denna git.
