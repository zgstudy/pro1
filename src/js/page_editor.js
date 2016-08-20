/* global $ */
$(function(){
    // 城市
    $("#city_picker").cityPicker({
        title: "请选择所在城市",
        showDistrict: false
    });
    // 工作年限
    $("#work_time_picker").picker({
        title: "请选择您的工作年限",
        cols: [{
            textAlign: 'center',
            values: ['0年', '1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年']
        }]
    });
    // 目前职能
    $("#tech_picker").picker({
        title: "请选择您的目前职能",
        cols: [{
            textAlign: 'center',
            values: ['技术1', '技术2', '技术3', '技术4', '技术5']
        }]
    });
    // 头衔
    $("#job_picker").picker({
        title: "请选择您的头衔",
        cols: [{
            textAlign: 'center',
            values: ['web开发工程师', 'php开发工程师', 'java开发工程师', '前端开发工程师', 'nodejs开发工程师']
        }]
    });
    // 从事多久
    $("#howlong_picker").picker({
        title: "从事多久？",
        cols: [{
            textAlign: 'center',
            values: ['0年', '1年', '2年', '3年', '4年', '5年', '6年', '7年', '8年', '9年', '10年']
        }]
    });
    // 结束时间
    $("#date_picker").calendar();
});
