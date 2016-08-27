/* global $ */
/* global FastClick */
/* global document */

$(function() {
    FastClick.attach(document.body);
    // $(document.body).pullToRefresh().on("pull-to-refresh", function() {
    //     console.log('aaaaaa');
    //     setTimeout(function() {
    //         $(document.body).pullToRefreshDone(); // 重置下拉刷新
    //     }, 1500); //模拟延迟
    // });
    var $tab2 = $('#tab2');
    $tab2.pullToRefresh().on("pull-to-refresh", function() {
        console.log('aaaaaa');
        setTimeout(function() {
            $tab2.pullToRefreshDone(); // 重置下拉刷新
        }, 1500); //模拟延迟
    });
});
