(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{314:function(e,n,t){"use strict";t(140);var r=Object.freeze({app:{title:"Fitness LP",description:"Linear progression based fitness tracking",notReady:"Loading..."},welcome:{title:"Welcome Page",description:"This is the welcome page"},test:{title:"Test Page",description:"This is a page for testing"}});n.a=r},317:function(e,n,t){"use strict";t.r(n);var r=t(314),o=(t(140),Object.freeze({back:"Back",biceps:"Biceps",cardio:"Cardio",chest:"Chest",compound:"Compound",core:"Core",event:"Event",legs:"Legs",misc:"Miscellaneous",shoudlers:"Shoudlers",triceps:"Triceps"})),c=(t(21),t(22)),l="undefined"!=typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)||"undefined"!=typeof msCrypto&&"function"==typeof msCrypto.getRandomValues&&msCrypto.getRandomValues.bind(msCrypto),d=new Uint8Array(16);function h(){if(!l)throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return l(d)}var m=/^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;for(var f=function(e){return"string"==typeof e&&m.test(e)},w=[],v=0;v<256;++v)w.push((v+256).toString(16).substr(1));var y=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,t=(w[e[n+0]]+w[e[n+1]]+w[e[n+2]]+w[e[n+3]]+"-"+w[e[n+4]]+w[e[n+5]]+"-"+w[e[n+6]]+w[e[n+7]]+"-"+w[e[n+8]]+w[e[n+9]]+"-"+w[e[n+10]]+w[e[n+11]]+w[e[n+12]]+w[e[n+13]]+w[e[n+14]]+w[e[n+15]]).toLowerCase();if(!f(t))throw TypeError("Stringified UUID is invalid");return t};var D=function(e,n,t){var r=(e=e||{}).random||(e.rng||h)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,n){t=t||0;for(var i=0;i<16;++i)n[t+i]=r[i];return n}return y(r)},C=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.name,r=void 0===t?null:t,o=n.description,l=void 0===o?null:o;Object(c.a)(this,e),this.id=D(),this.name=r,this.description=l},B=(console.log("Generating default Categories..."),[new C({name:o.back}),new C({name:o.biceps}),new C({name:o.cardio}),new C({name:o.chest}),new C({name:o.compound}),new C({name:o.core}),new C({name:o.event}),new C({name:o.legs}),new C({name:o.misc}),new C({name:o.shoudlers}),new C({name:o.triceps})]),S=t(110),k=(t(71),function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.name,r=void 0===t?null:t,o=n.category,l=void 0===o?null:o,d=n.description,h=void 0===d?null:d,m=n.showDesc,f=void 0===m||m,w=n.hasConfirmation,v=void 0===w||w,y=n.hasSets,C=void 0===y||y,B=n.hasDuration,S=void 0===B||B,k=n.hasDistance,O=void 0===k||k,j=n.hasWeight,P=void 0===j||j,x=n.hasReps,R=void 0===x||x,W=n.hasNotes,T=void 0===W||W;Object(c.a)(this,e),this.id=D(),this.name=r,this.category=l,this.description=h,this.showDesc=f,this.hasConfirmation=v,this.hasSets=C,this.hasDuration=S,this.hasDistance=O,this.hasWeight=P,this.hasReps=R,this.hasNotes=T}),O=function(){console.log("Generating default Exercises...");var e,n=B;function t(e){return n.find((function(n){return n.name===e})).id}return[].concat(Object(S.a)((e=t(o.cardio),[new k({name:"Cardio & Conditioning",category:e,description:"Jogging, jumping jacks, mountain climbers, air squats and any other suitable cardio exercise with or without weights."}),new k({name:"Warmup",category:e,description:"Spend a few minutes warming up."}),new k({name:"Cooldown",category:e,description:"Spend a few minutes cooling down."})])),Object(S.a)(function(){var e=t(o.misc);return[new k({name:"Stretching",category:e,description:"Spend a few minutes stretching recently used muscles."})]}()),Object(S.a)(function(){var e=t(o.chest);return[new k({name:"Flat Press, Barbell",category:e,description:"Do 3-5 sets of 5-8 reps."}),new k({name:"Incline Press, Barbell",category:e,description:"Do 3-5 sets of 5-8 reps."}),new k({name:"Decline Press, Barbell",category:e,description:"Do 3-5 sets of 5-8 reps."}),new k({name:"Pushups",category:e,description:"Do 3-5 sets of 10-20 reps."})]}()),Object(S.a)(function(){var e=t(o.shoudlers);return[new k({name:"Front and Side Raises, Dumbbell",category:e,description:"Extend arms forward then outward. Do 3 sets of 8-10 reps."}),new k({name:"Seated Military Press, Barbell",category:e,description:"Sit nearly upright and weight up. Do 3 sets of 5-8 reps."})]}()),Object(S.a)(function(){var e=t(o.triceps);return[new k({name:"Skull Crushers",category:e,description:"Lower weight behind head using elbows while laying down. Do 3 sets of 8 reps."}),new k({name:"Tricep Kickbacks, Dumbbell",category:e,description:"Lean over and straigthen elbos back. Do 3 sets of 8 reps."})]}()),Object(S.a)(function(){var e=t(o.back);return[new k({name:"Bent Over Rows, Barbell",category:e,description:"Brace hard! Do 3-5 sets of 5-8 reps."}),new k({name:"Shrugs, Barbell",category:e,description:"Do 3-5 sets of 5-8 reps."}),new k({name:"Deadlifts, Barbell",category:e,description:"Brace hard! Do 3-5 sets of 5 reps."}),new k({name:"Stiff Leg Deadlifts, Barbell",category:e,description:"Brace hard! Do 3-5 sets of 5-8 reps"}),new k({name:"Pullups",category:e,description:"Do 3-5 sets of 8-10 reps."}),new k({name:"Standing T-Rows, Barbell",category:e,description:"Do 3-5 sets of 8-10 reps."})]}()),Object(S.a)(function(){var e=t(o.biceps);return[new k({name:"Overhand Curls, Dumbbell",category:e,description:"Do 3-5 sets of 8 reps."}),new k({name:"Underhand Curls, Dumbbell",category:e,description:"Do 3-5 sets of 8 reps."}),new k({name:"Hammer Curls, Dumbbell",category:e,description:"Do 3-5 sets of 8 reps."})]}()),Object(S.a)(function(){var e=t(o.legs);return[new k({name:"Squats, Barbell",category:e,description:"Brace hard! Do 3-5 sets of 5-8 reps."}),new k({name:"Hip Thrusters, Barbell",category:e,description:"Do 3-5 sets of 5-8 reps."})]}()),Object(S.a)(function(){var e=t(o.core);return[new k({name:"Russian Twist, Dumbell",category:e,description:"Do 3-5 sets of 20-30 reps."}),new k({name:"Oblique Side Bends, Dumbell",category:e,description:"Lower and lift weight along side of body with arms straight. Do 3-5 sets of 20-30 reps."})]}()))}(),j=function e(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n.name,r=void 0===t?null:t,o=n.description,l=void 0===o?null:o,d=n.showDesc,h=void 0===d||d,m=n.exerciseIds,f=void 0===m?[]:m;Object(c.a)(this,e),this.id=D(),this.name=r,this.description=l,this.showDesc=h,this.exerciseIds=f},P=function(){console.log("Generating default Workouts...");var e=O;function n(n){return n.map((function(n){return t=n,e.find((function(e){return e.name===t})).id;var t}))}return[new j({name:"Cardio Day",exerciseIds:n(["Warmup","Cardio & Conditioning","Cooldown","Stretching"])}),new j({name:"Chest Day",exerciseIds:n(["Warmup","Flat Press, Barbell","Incline Press, Barbell","Pushups","Cooldown","Stretching"])}),new j({name:"Back Day",exerciseIds:n(["Warmup","Deadlifts, Barbell","Bent Over Rows, Barbell","Shrugs, Barbell","Cooldown","Stretching"])}),new j({name:"Arms & Shoulders Day",exerciseIds:n(["Warmup","Front and Side Raises, Dumbbell","Skull Crushers","Underhand Curls, Dumbbell","Cooldown","Stretching"])}),new j({name:"Legs & Core Day",exerciseIds:n(["Warmup","Squats, Barbell","Hip Thrusters, Barbell","Russian Twist, Dumbell","Cooldown","Stretching"])})]}(),x={name:"TestPage",layout:"primary-header-nav",methods:{printCategories:function(){console.log("Default Categories:",B)},printExercises:function(){console.log("Default Exercises:",O)},printWorkouts:function(){console.log("Default Workouts:",P)}},head:function(){return{title:r.a.test.title,meta:[{hid:"description",name:"description",content:r.a.test.description}]}}},R=t(30),W=t(31),T=t.n(W),E=t(188),I=t(313),component=Object(R.a)(x,(function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("v-container",[t("h1",[e._v("Test Page")]),e._v(" "),t("v-btn",{on:{click:e.printCategories}},[e._v("\n    Print Categories\n  ")]),e._v(" "),t("v-btn",{on:{click:e.printExercises}},[e._v("\n    Print Exercises\n  ")]),e._v(" "),t("v-btn",{on:{click:e.printWorkouts}},[e._v("\n    Print Workouts\n  ")])],1)}),[],!1,null,null,null);n.default=component.exports;T()(component,{VBtn:E.a,VContainer:I.a})}}]);