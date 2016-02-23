/**
 * Created by www on 2016/2/21.
 */
var testCase  = require('nodeunit').testCase;
var user=new require("./app/controllers/user")
module.exports = testCase({
    "Test 0.1": function(test) {
        var list=user.list;
        var flag=false;
        if(list.length>0){
            flag=true;
        }
        test.ok(flag,"list ok");
        test.done();
    },

    "TC 1": testCase({
        "TC 1.1": testCase({
            "Test 1.1.1": function(test) {
                test.ok(true);
                test.done();
            }
        })
    }),

    "TC 2": testCase({
        "TC 2.1": testCase({
            "TC 2.1.1": testCase({
                "Test 2.1.1.1": function(test) {
                    test.ok(true);
                    test.done();
                },

                "Test 2.1.1.2": function(test) {
                    test.ok(true);
                    test.done();
                }
            }),

            "TC 2.2.1": testCase({
                "Test 2.2.1.1": function(test) {
                    test.ok(true);
                    test.done();
                },

                "TC 2.2.1.1": testCase({
                    "Test 2.2.1.1.1": function(test) {
                        test.ok(true);
                        test.done();
                    },
                }),

                "Test 2.2.1.2": function(test) {
                    test.ok(true);
                    test.done();
                }
            })
        })
    }),

    "TC 3": testCase({
        "TC 3.1": testCase({
            "TC 3.1.1": testCase({
                "Test 3.1.1.1 (should fail)": function(test) {
                    test.ok(false);
                    test.done();
                }
            })
        })
    })
});