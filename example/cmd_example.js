require("./../jDBSCAN.js");
var point_data= [ 
            { 
                location: {
                    accuracy: 30,
                    latitude: 37.970243, 
                    longitude: 23.760431
                }
            },
            {
                location: {
                    accuracy: 10,
                    latitude: 37.968065,
                    longitude: 23.770367
                }
            },
                {   location: {
                    accuracy: 5,
                    latitude: 37.954367, 
                    longitude: 23.756493
                }
            },
            { 
                location: {
                    accuracy: 30,
                    latitude: 37.939940, 
                    longitude: 23.508012 
                }
            },
            {
                location: {
                    accuracy: 10,
                    latitude: 37.967397, 
                    longitude: 23.554395
                }
            },
                {   location: {
                    accuracy: 5,
                    latitude: 37.958349, 
                    longitude: 23.538612
                }
            }
        ];
//automated eps and minpts
//Note: load data first
var dbscanner = jDBSCAN().data(point_data).distance('HAVERSINE').autoMinPts().autoEps();

dbscanner();

// (OPTIONAL) If you need the cluster centers for each of the
// identified clusters use this 
var cluster_centers = dbscanner.getClusters();
console.log("Number of clusters: "+cluster_centers.length);

//iterate clusters
for (var i = 0; i < cluster_centers.length; i++) {
    console.log("Cluster: "+i+" Latitude: "+cluster_centers[i].location.latitude+" Longitude: "+cluster_centers[i].location.longitude+" Parts:"+cluster_centers[i].parts+" Number of points: "+cluster_centers[i].dimension);
}
