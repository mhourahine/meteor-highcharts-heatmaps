Package.describe({
    summary: "Add Heatmaps module to Highcharts - requires the maazalik:highcharts package",
    version: "0.2.4",
    git: ""
});

Package.onUse(function (api) {

    api.versionsFrom('METEOR@0.9.1.1');
    api.use('maazalik:highcharts@0.2.4');

    // add heatmaps module
    api.addFiles('lib/highcharts-heatmap.js', 'client');
});
