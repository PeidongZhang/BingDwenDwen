//// Create StyleKit Object
var StyleKitName = {};
var pathCounter = 290;
var drawPath = 0;

//// Drawing Methods

function drawCanvas1(canvas, targetFrame, resizing) {
    //// General Declarations
    canvas = initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    var context = canvas.getContext('2d');
	context.fillStyle="white"
    var pixelRatio = canvas.paintCodePixelRatio;

    //// Resize to Target Frame
    context.save();
    var resizedFrame = applyResizingBehavior(resizing, makeRect(0, 0, 1333, 1333), targetFrame);
    context.translate(resizedFrame.x, resizedFrame.y);
    context.scale(resizedFrame.w / 1333, resizedFrame.h / 1333);

    function drawNextPath() {
        drawPath++;
        if (drawPath > pathCounter) {
            console.log("绘图完成")
        } else if (drawPath === 1) {
            console.log("开始绘图")
            drawPath1()
            drawNextPath()
        } else {
            console.log("开始阶段" + drawPath)
            setTimeout(function () {
                eval("drawPath" + drawPath + "()")
                drawNextPath()
            }, 10)
        }
    }

    drawNextPath()
    //// Color Declarations
    var fillColor = 'rgba(255, 255, 255, 1)';
    var fillColor2 = 'rgba(200, 227, 241, 1)';
    var fillColor3 = 'rgba(191, 228, 254, 1)';
    var fillColor4 = 'rgba(225, 242, 255, 1)';
    var fillColor5 = 'rgba(224, 244, 254, 1)';
    var fillColor6 = 'rgba(148, 189, 216, 1)';
    var fillColor7 = 'rgba(231, 245, 254, 1)';
    var fillColor8 = 'rgba(154, 188, 208, 1)';
    var fillColor9 = 'rgba(241, 251, 254, 1)';
    var fillColor10 = 'rgba(232, 245, 254, 1)';
    var fillColor11 = 'rgba(152, 189, 210, 1)';
    var fillColor12 = 'rgba(152, 187, 207, 1)';
    var fillColor13 = 'rgba(157, 187, 198, 1)';
    var fillColor14 = 'rgba(240, 251, 253, 1)';
    var fillColor15 = 'rgba(3, 5, 7, 1)';
    var fillColor16 = 'rgba(1, 6, 13, 1)';
    var fillColor17 = 'rgba(2, 6, 15, 1)';
    var fillColor18 = 'rgba(90, 93, 110, 1)';
    var fillColor19 = 'rgba(0, 0, 0, 1)';
    var fillColor20 = 'rgba(151, 189, 210, 1)';
    var fillColor21 = 'rgba(241, 250, 254, 1)';
    var fillColor22 = 'rgba(90, 92, 106, 1)';
    var fillColor23 = 'rgba(61, 63, 76, 1)';
    var fillColor24 = 'rgba(72, 74, 88, 1)';
    var fillColor25 = 'rgba(2, 11, 1, 1)';
    var fillColor26 = 'rgba(202, 235, 202, 1)';
    var fillColor27 = 'rgba(242, 241, 183, 1)';
    var fillColor28 = 'rgba(182, 240, 223, 1)';
    var fillColor29 = 'rgba(218, 248, 181, 1)';
    var fillColor30 = 'rgba(180, 241, 221, 1)';
    var fillColor31 = 'rgba(251, 246, 151, 1)';
    var fillColor32 = 'rgba(55, 56, 61, 1)';
    var fillColor33 = 'rgba(251, 243, 167, 1)';
    var fillColor34 = 'rgba(226, 255, 250, 1)';
    var fillColor35 = 'rgba(247, 241, 186, 1)';
    var fillColor36 = 'rgba(234, 204, 190, 1)';
    var fillColor37 = 'rgba(22, 3, 2, 1)';
    var fillColor38 = 'rgba(30, 0, 15, 1)';
    var fillColor39 = 'rgba(219, 251, 186, 1)';
    var fillColor40 = 'rgba(252, 238, 181, 1)';
    var fillColor41 = 'rgba(249, 245, 149, 1)';
    var fillColor42 = 'rgba(212, 197, 233, 1)';
    var fillColor43 = 'rgba(213, 249, 192, 1)';
    var fillColor44 = 'rgba(237, 187, 229, 1)';
    var fillColor45 = 'rgba(159, 208, 251, 1)';
    var fillColor46 = 'rgba(244, 191, 194, 1)';
    var fillColor47 = 'rgba(255, 230, 177, 1)';
    var fillColor48 = 'rgba(248, 241, 171, 1)';
    var fillColor49 = 'rgba(204, 195, 238, 1)';
    var fillColor50 = 'rgba(242, 183, 229, 1)';
    var fillColor51 = 'rgba(193, 198, 244, 1)';
    var fillColor52 = 'rgba(248, 246, 151, 1)';
    var fillColor53 = 'rgba(254, 234, 182, 1)';
    var fillColor54 = 'rgba(213, 251, 185, 1)';
    var fillColor55 = 'rgba(241, 206, 188, 1)';
    var fillColor56 = 'rgba(195, 221, 248, 1)';
    var fillColor57 = 'rgba(1, 5, 21, 1)';
    var fillColor58 = 'rgba(0, 7, 27, 1)';
    var fillColor59 = 'rgba(52, 55, 63, 1)';
    var fillColor60 = 'rgba(200, 204, 242, 1)';
    var fillColor61 = 'rgba(251, 221, 179, 1)';
    var fillColor62 = 'rgba(219, 249, 180, 1)';
    var fillColor63 = 'rgba(195, 196, 240, 1)';
    var fillColor64 = 'rgba(224, 241, 254, 1)';
    var fillColor65 = 'rgba(244, 185, 213, 1)';
    var fillColor66 = 'rgba(0, 7, 26, 1)';
    var fillColor67 = 'rgba(6, 6, 5, 1)';
    var fillColor68 = 'rgba(234, 255, 255, 1)';
    var fillColor69 = 'rgba(231, 248, 183, 1)';
    var fillColor70 = 'rgba(240, 255, 253, 1)';
    var fillColor71 = 'rgba(20, 4, 0, 1)';
    var fillColor72 = 'rgba(201, 204, 235, 1)';
    var fillColor73 = 'rgba(7, 2, 29, 1)';
    var fillColor74 = 'rgba(222, 192, 237, 1)';
    var fillColor75 = 'rgba(212, 249, 188, 1)';
    var fillColor76 = 'rgba(34, 0, 7, 1)';
    var fillColor77 = 'rgba(211, 248, 255, 1)';
    var fillColor78 = 'rgba(156, 189, 204, 1)';
    var fillColor79 = 'rgba(180, 239, 229, 1)';
    var fillColor80 = 'rgba(2, 7, 16, 1)';
    var fillColor81 = 'rgba(243, 223, 187, 1)';
    var fillColor82 = 'rgba(251, 201, 214, 1)';
    var fillColor83 = 'rgba(2, 6, 16, 1)';
    var fillColor84 = 'rgba(200, 204, 240, 1)';
    var fillColor85 = 'rgba(247, 182, 224, 1)';
    var fillColor86 = 'rgba(199, 208, 211, 1)';
    var fillColor87 = 'rgba(7, 8, 0, 1)';
    var fillColor88 = 'rgba(252, 239, 180, 1)';
    var fillColor89 = 'rgba(213, 249, 197, 1)';
    var fillColor90 = 'rgba(16, 1, 20, 1)';
    var fillColor91 = 'rgba(243, 250, 157, 1)';
    var fillColor92 = 'rgba(227, 248, 185, 1)';
    var fillColor93 = 'rgba(241, 188, 215, 1)';
    var fillColor94 = 'rgba(202, 198, 233, 1)';
    var fillColor95 = 'rgba(149, 187, 212, 1)';
    var fillColor96 = 'rgba(181, 205, 236, 1)';
    var fillColor97 = 'rgba(252, 254, 253, 1)';
    var fillColor98 = 'rgba(237, 245, 245, 1)';
    var fillColor99 = 'rgba(159, 192, 202, 1)';
    var fillColor100 = 'rgba(33, 38, 54, 1)';
    var fillColor101 = 'rgba(173, 234, 242, 1)';
    var fillColor102 = 'rgba(47, 47, 47, 1)';
    var fillColor103 = 'rgba(32, 39, 55, 1)';
    var fillColor104 = 'rgba(215, 247, 186, 1)';
    var fillColor105 = 'rgba(252, 246, 149, 1)';
    var fillColor106 = 'rgba(242, 248, 205, 1)';
    var fillColor107 = 'rgba(193, 199, 237, 1)';
    var fillColor108 = 'rgba(6, 10, 14, 1)';
    var fillColor109 = 'rgba(163, 180, 185, 1)';
    var fillColor110 = 'rgba(250, 243, 189, 1)';
    var fillColor111 = 'rgba(1, 1, 1, 1)';
    var fillColor112 = 'rgba(196, 197, 236, 1)';
    var fillColor113 = 'rgba(3, 3, 6, 1)';
    var fillColor114 = 'rgba(4, 5, 11, 1)';
    var fillColor115 = 'rgba(0, 1, 1, 1)';
    var fillColor116 = 'rgba(92, 92, 103, 1)';
    var fillColor117 = 'rgba(224, 208, 229, 1)';
    var fillColor118 = 'rgba(194, 209, 230, 1)';
    var fillColor119 = 'rgba(250, 238, 180, 1)';
    var fillColor120 = 'rgba(37, 0, 0, 1)';
    var fillColor121 = 'rgba(212, 107, 104, 1)';
    var fillColor122 = 'rgba(202, 206, 229, 1)';
    var fillColor123 = 'rgba(254, 87, 81, 1)';
    var fillColor124 = 'rgba(197, 204, 248, 1)';
    var fillColor125 = 'rgba(0, 0, 1, 1)';
    var fillColor126 = 'rgba(204, 208, 230, 1)';
    var fillColor127 = 'rgba(218, 252, 186, 1)';
    var fillColor128 = 'rgba(208, 193, 239, 1)';
    var fillColor129 = 'rgba(208, 208, 221, 1)';
    var fillColor130 = 'rgba(168, 240, 234, 1)';
    var fillColor131 = 'rgba(0, 8, 30, 1)';
    var fillColor132 = 'rgba(200, 206, 246, 1)';
    var fillColor133 = 'rgba(202, 206, 227, 1)';
    var fillColor134 = 'rgba(5, 4, 5, 1)';
    var fillColor135 = 'rgba(198, 204, 245, 1)';
    var fillColor136 = 'rgba(4, 4, 4, 1)';
    var fillColor137 = 'rgba(217, 192, 238, 1)';
    var fillColor138 = 'rgba(29, 1, 1, 1)';
    var fillColor139 = 'rgba(26, 2, 2, 1)';
    var fillColor140 = 'rgba(219, 129, 123, 1)';
    var fillColor141 = 'rgba(249, 116, 119, 1)';
    var fillColor142 = 'rgba(61, 61, 61, 1)';
    var fillColor143 = 'rgba(3, 5, 14, 1)';
    var fillColor144 = 'rgba(250, 115, 112, 1)';
    var fillColor145 = 'rgba(14, 3, 2, 1)';
    var fillColor146 = 'rgba(178, 205, 235, 1)';
    var fillColor147 = 'rgba(15, 3, 1, 1)';
    var fillColor148 = 'rgba(254, 148, 148, 1)';
    var fillColor149 = 'rgba(229, 161, 165, 1)';
    var fillColor150 = 'rgba(237, 147, 144, 1)';
    var fillColor151 = 'rgba(181, 209, 224, 1)';
    var fillColor152 = 'rgba(2, 7, 18, 1)';
    var fillColor153 = 'rgba(102, 103, 105, 1)';
    var fillColor154 = 'rgba(84, 28, 28, 1)';
    var fillColor155 = 'rgba(160, 186, 202, 1)';
    var fillColor156 = 'rgba(73, 37, 40, 1)';
    var fillColor157 = 'rgba(232, 246, 253, 1)';
    var fillColor158 = 'rgba(164, 207, 246, 1)';
    var fillColor159 = 'rgba(58, 58, 58, 1)';
    var fillColor160 = 'rgba(213, 127, 135, 1)';
    var fillColor161 = 'rgba(237, 168, 168, 1)';
    var fillColor162 = 'rgba(255, 216, 217, 1)';
    var fillColor163 = 'rgba(228, 161, 169, 1)';
    var fillColor164 = 'rgba(217, 191, 243, 1)';
    var fillColor165 = 'rgba(243, 244, 176, 1)';
    var fillColor166 = 'rgba(59, 43, 76, 1)';
    var fillColor167 = 'rgba(196, 248, 200, 1)';
    var fillColor168 = 'rgba(227, 162, 170, 1)';
    var fillColor169 = 'rgba(248, 217, 218, 1)';
    var fillColor170 = 'rgba(242, 184, 224, 1)';
    var fillColor171 = 'rgba(176, 215, 221, 1)';
    var fillColor172 = 'rgba(237, 157, 164, 1)';
    var fillColor173 = 'rgba(149, 188, 217, 1)';
    var fillColor174 = 'rgba(73, 3, 3, 1)';
    var fillColor175 = 'rgba(33, 46, 60, 1)';
    var fillColor176 = 'rgba(255, 228, 198, 1)';
    var fillColor177 = 'rgba(62, 67, 70, 1)';
    var fillColor178 = 'rgba(243, 247, 255, 1)';
    var fillColor179 = 'rgba(156, 186, 204, 1)';
    var fillColor180 = 'rgba(193, 210, 238, 1)';
    var fillColor181 = 'rgba(10, 7, 2, 1)';
    var fillColor182 = 'rgba(10, 2, 24, 1)';
    var fillColor183 = 'rgba(188, 214, 242, 1)';
    var fillColor184 = 'rgba(11, 8, 0, 1)';
    var fillColor185 = 'rgba(255, 238, 207, 1)';
    var fillColor186 = 'rgba(233, 242, 253, 1)';
    var fillColor187 = 'rgba(242, 252, 253, 1)';
    var fillColor188 = 'rgba(241, 243, 216, 1)';
    var fillColor189 = 'rgba(201, 204, 230, 1)';
    var fillColor190 = 'rgba(158, 240, 247, 1)';
    var fillColor191 = 'rgba(214, 191, 237, 1)';
    var fillColor192 = 'rgba(249, 243, 168, 1)';
    var fillColor193 = 'rgba(3, 11, 5, 1)';
    var fillColor194 = 'rgba(181, 238, 230, 1)';
    var fillColor195 = 'rgba(3, 4, 6, 1)';
    var fillColor196 = 'rgba(223, 242, 255, 1)';
    var fillColor197 = 'rgba(170, 207, 236, 1)';
    var fillColor198 = 'rgba(253, 254, 255, 1)';
    var fillColor199 = 'rgba(190, 199, 245, 1)';
    var fillColor200 = 'rgba(171, 241, 229, 1)';
    var fillColor201 = 'rgba(255, 245, 222, 1)';
    var fillColor202 = 'rgba(227, 250, 186, 1)';
    var fillColor203 = 'rgba(244, 199, 192, 1)';
    var fillColor204 = 'rgba(253, 238, 185, 1)';
    var fillColor205 = 'rgba(3, 5, 13, 1)';
    var fillColor206 = 'rgba(249, 243, 187, 1)';
    var fillColor207 = 'rgba(0, 11, 38, 1)';
    var fillColor208 = 'rgba(147, 191, 217, 1)';
    var fillColor209 = 'rgba(176, 203, 240, 1)';
    var fillColor210 = 'rgba(156, 184, 216, 1)';
    var fillColor211 = 'rgba(201, 204, 229, 1)';
    var fillColor212 = 'rgba(180, 200, 238, 1)';
    var fillColor213 = 'rgba(234, 247, 254, 1)';
    var fillColor214 = 'rgba(173, 206, 247, 1)';
    var fillColor215 = 'rgba(194, 206, 246, 1)';
    var fillColor216 = 'rgba(214, 217, 172, 1)';
    var fillColor217 = 'rgba(0, 6, 23, 1)';
    var fillColor218 = 'rgba(249, 246, 145, 1)';
    var fillColor219 = 'rgba(158, 187, 211, 1)';
    var fillColor220 = 'rgba(187, 218, 241, 1)';
    var fillColor221 = 'rgba(202, 250, 234, 1)';
    var fillColor222 = 'rgba(1, 16, 48, 1)';
    var fillColor223 = 'rgba(237, 249, 191, 1)';
    var fillColor224 = 'rgba(171, 238, 213, 1)';
    var fillColor225 = 'rgba(191, 190, 215, 1)';
    var fillColor226 = 'rgba(194, 195, 243, 1)';
    var fillColor227 = 'rgba(176, 232, 240, 1)';
    var fillColor228 = 'rgba(243, 200, 188, 1)';
    var fillColor229 = 'rgba(11, 3, 27, 1)';
    var fillColor230 = 'rgba(252, 242, 168, 1)';
    var fillColor231 = 'rgba(205, 208, 228, 1)';
    var fillColor232 = 'rgba(3, 10, 4, 1)';
    var fillColor233 = 'rgba(198, 205, 232, 1)';
    var fillColor234 = 'rgba(189, 245, 206, 1)';
    var fillColor235 = 'rgba(255, 230, 187, 1)';
    var fillColor236 = 'rgba(232, 247, 251, 1)';
    var fillColor237 = 'rgba(185, 207, 240, 1)';
    var fillColor238 = 'rgba(204, 243, 218, 1)';
    var fillColor239 = 'rgba(196, 224, 224, 1)';
    var fillColor240 = 'rgba(43, 46, 65, 1)';
    var fillColor241 = 'rgba(251, 244, 164, 1)';
    var fillColor242 = 'rgba(196, 194, 240, 1)';
    var fillColor243 = 'rgba(4, 4, 5, 1)';
    var fillColor244 = 'rgba(188, 218, 243, 1)';
    var fillColor245 = 'rgba(199, 205, 247, 1)';
    var fillColor246 = 'rgba(251, 245, 152, 1)';
    var fillColor247 = 'rgba(186, 240, 221, 1)';
    var fillColor248 = 'rgba(194, 202, 240, 1)';
    var fillColor249 = 'rgba(28, 9, 44, 1)';
    var fillColor250 = 'rgba(20, 1, 17, 1)';
    var fillColor251 = 'rgba(226, 249, 184, 1)';
    var fillColor252 = 'rgba(249, 236, 185, 1)';
    var fillColor253 = 'rgba(238, 230, 184, 1)';
    var fillColor254 = 'rgba(254, 230, 207, 1)';
    var fillColor255 = 'rgba(149, 190, 219, 1)';
    var fillColor256 = 'rgba(180, 223, 241, 1)';
    var fillColor257 = 'rgba(216, 248, 225, 1)';
    var fillColor258 = 'rgba(202, 205, 233, 1)';
    var fillColor259 = 'rgba(0, 2, 25, 1)';
    var fillColor260 = 'rgba(201, 205, 216, 1)';
    var fillColor261 = 'rgba(150, 189, 211, 1)';
    var fillColor262 = 'rgba(221, 234, 249, 1)';
    var fillColor263 = 'rgba(249, 253, 251, 1)';
    var fillColor264 = 'rgba(158, 189, 204, 1)';
    var fillColor265 = 'rgba(156, 187, 201, 1)';
    

    //// IMG_0929.svg Group
    function drawPath1() {
        context.beginPath();
        context.moveTo(0, 0);
        context.lineTo(1333.33, 0);
        context.lineTo(1333.33, 66.39);
        context.bezierCurveTo(922.65, 66.12, 511.97, 66.4, 101.29, 66.23);
        context.bezierCurveTo(92.48, 66.17, 83.64, 66, 74.87, 67.08);
        context.bezierCurveTo(74.25, 72.25, 73.87, 77.47, 73.91, 82.69);
        context.bezierCurveTo(73.84, 229.28, 73.93, 375.88, 73.85, 522.47);
        context.bezierCurveTo(74.47, 522.11, 75.69, 521.39, 76.31, 521.03);
        context.bezierCurveTo(77.07, 526.01, 76.87, 531.08, 76.08, 536.05);
        context.bezierCurveTo(74.8, 542.08, 79.63, 547.28, 78.99, 553.31);
        context.bezierCurveTo(78.44, 559.08, 78.24, 564.88, 78.12, 570.68);
        context.bezierCurveTo(77.95, 577.73, 75, 585.31, 78.89, 591.89);
        context.bezierCurveTo(78.95, 593.13, 78.99, 594.37, 79.04, 595.63);
        context.bezierCurveTo(79.87, 596.21, 81.55, 597.39, 82.39, 597.96);
        context.bezierCurveTo(57.2, 631.28, 50.99, 675.77, 58.61, 716.11);
        context.bezierCurveTo(61.68, 736.56, 68.44, 756.21, 76.47, 775.2);
        context.bezierCurveTo(75.65, 778.48, 74.13, 781.87, 75.11, 785.32);
        context.bezierCurveTo(75.92, 788.81, 76.93, 792.36, 76.27, 796);
        context.bezierCurveTo(74.56, 807.84, 77.57, 820, 74.32, 831.68);
        context.bezierCurveTo(73.52, 831.72, 71.92, 831.8, 71.12, 831.84);
        context.bezierCurveTo(70.84, 829.25, 70.55, 826.67, 70.27, 824.11);
        context.bezierCurveTo(69.8, 825.19, 69.33, 826.28, 68.85, 827.37);
        context.bezierCurveTo(67.07, 826.15, 65.27, 824.92, 63.52, 823.64);
        context.bezierCurveTo(56.25, 812.75, 49.77, 801.36, 43.67, 789.79);
        context.bezierCurveTo(39.49, 782.57, 35.84, 775.07, 32.73, 767.33);
        context.bezierCurveTo(30.15, 760.79, 25.28, 755.21, 24.16, 748.09);
        context.bezierCurveTo(14.51, 702.63, 9.12, 655.49, 16.11, 609.23);
        context.bezierCurveTo(17.03, 600.44, 19.2, 591.84, 22.04, 583.48);
        context.bezierCurveTo(23.99, 577.81, 28.81, 573.81, 31.24, 568.39);
        context.bezierCurveTo(37.32, 555.81, 45.48, 544.12, 55.99, 534.84);
        context.bezierCurveTo(59.24, 531.93, 63.51, 530.73, 67.25, 528.67);
        context.bezierCurveTo(67.36, 527.85, 67.57, 526.24, 67.69, 525.43);
        context.bezierCurveTo(56.4, 527.92, 48.08, 536.35, 40.89, 544.85);
        context.bezierCurveTo(35.05, 553.03, 28.72, 561.16, 26.07, 571.05);
        context.bezierCurveTo(20.87, 575.23, 18.88, 581.81, 17, 587.95);
        context.bezierCurveTo(12.04, 603.43, 10.8, 619.79, 9.99, 635.93);
        context.bezierCurveTo(8.57, 680.48, 14.16, 725.27, 26.68, 768.05);
        context.bezierCurveTo(30.12, 780.99, 38.35, 791.84, 44.43, 803.59);
        context.bezierCurveTo(53.35, 820.45, 64.53, 835.95, 74.95, 851.88);
        context.bezierCurveTo(73.75, 871, 74.44, 890.17, 74.27, 909.33);
        context.bezierCurveTo(74.35, 1018.67, 74.27, 1128, 74.33, 1237.33);
        context.bezierCurveTo(74.49, 1247.37, 73.76, 1257.45, 74.77, 1267.48);
        context.bezierCurveTo(100.95, 1267.97, 127.12, 1267.59, 153.29, 1267.73);
        context.bezierCurveTo(160.09, 1267.76, 166.95, 1267.79, 173.61, 1269.27);
        context.bezierCurveTo(173.76, 1279.04, 174.01, 1288.83, 174.32, 1298.6);
        context.bezierCurveTo(175.52, 1310.16, 176.36, 1321.75, 177.17, 1333.33);
        context.lineTo(0, 1333.33);
        context.lineTo(0, 0);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();

    }

    function drawPath2() {
        context.beginPath();
        context.moveTo(826.65, 199.17);
        context.bezierCurveTo(826.33, 199.69, 825.68, 200.75, 825.36, 201.28);
        context.bezierCurveTo(878.49, 198.61, 931.99, 202.92, 984.05, 213.87);
        context.bezierCurveTo(988.61, 214.81, 993.04, 216.29, 997.44, 217.8);
        context.bezierCurveTo(1012.88, 223.28, 1028.55, 228.09, 1043.85, 233.97);
        context.bezierCurveTo(1052.8, 237.52, 1061.97, 240.75, 1070, 246.21);
        context.bezierCurveTo(1079.11, 253.64, 1089.61, 259.15, 1099.25, 265.87);
        context.bezierCurveTo(1105.48, 269.88, 1111.35, 274.45, 1117.19, 279.03);
        context.bezierCurveTo(1132.12, 290.93, 1148.33, 301.4, 1161.83, 315.01);
        context.bezierCurveTo(1165.76, 319.28, 1169.97, 323.31, 1174.47, 327);
        context.bezierCurveTo(1189.71, 340.79, 1204.55, 355.08, 1217.77, 370.85);
        context.bezierCurveTo(1217.23, 373.11, 1216.69, 375.37, 1216.24, 377.65);
        context.bezierCurveTo(1207, 372.75, 1200.44, 364.23, 1191.24, 359.29);
        context.bezierCurveTo(1188.24, 357.55, 1185.63, 355.27, 1183.03, 353);
        context.bezierCurveTo(1178.41, 348.95, 1172.85, 346.24, 1167.67, 343.05);
        context.bezierCurveTo(1158.2, 337.6, 1149.36, 330.92, 1139.05, 327.04);
        context.bezierCurveTo(1129.75, 323.61, 1121.52, 317.96, 1112.63, 313.65);
        context.bezierCurveTo(1098.07, 305.13, 1082.23, 299.11, 1066.24, 293.87);
        context.bezierCurveTo(1059.25, 292.21, 1052.99, 288.48, 1045.95, 287.01);
        context.bezierCurveTo(1039.07, 285.56, 1032.72, 282.07, 1025.6, 281.73);
        context.bezierCurveTo(1019.89, 281.36, 1014.84, 278.49, 1009.33, 277.37);
        context.bezierCurveTo(997.65, 276.53, 986.27, 273.65, 974.63, 272.43);
        context.bezierCurveTo(965.09, 269.71, 955.2, 269.69, 945.4, 269.21);
        context.bezierCurveTo(943.64, 269.45, 941.89, 269.76, 940.17, 270.16);
        context.bezierCurveTo(894.89, 264.23, 848.92, 263.85, 803.47, 268.08);
        context.bezierCurveTo(785.43, 269.47, 767.4, 271.56, 749.64, 275.07);
        context.bezierCurveTo(745.33, 276.01, 741.05, 277.13, 736.71, 277.87);
        context.bezierCurveTo(722.97, 275.89, 710.65, 284.05, 697.28, 285.32);
        context.bezierCurveTo(691.97, 285.84, 687.23, 288.39, 682.33, 290.29);
        context.bezierCurveTo(676.37, 292.63, 669.87, 293.24, 664, 295.85);
        context.bezierCurveTo(660.61, 297.41, 656.99, 298.32, 653.33, 298.96);
        context.bezierCurveTo(647.68, 299.77, 643.55, 304.15, 638.32, 306.01);
        context.bezierCurveTo(634.88, 307.36, 631.11, 307.59, 627.73, 309.08);
        context.bezierCurveTo(624.79, 311.05, 622.21, 313.85, 618.53, 314.44);
        context.bezierCurveTo(609.13, 316.24, 602.43, 323.89, 593.37, 326.65);
        context.bezierCurveTo(580.45, 330.73, 570.75, 340.79, 558.73, 346.6);
        context.bezierCurveTo(557.85, 353.55, 552.2, 357.84, 548.49, 363.25);
        context.bezierCurveTo(547.03, 364.91, 545.44, 366.45, 543.76, 367.87);
        context.bezierCurveTo(541.39, 368.03, 539.03, 368.21, 536.68, 368.51);
        context.bezierCurveTo(538, 367.23, 539.19, 365.81, 540.35, 364.39);
        context.bezierCurveTo(538.4, 364.4, 536.33, 364.09, 534.56, 365.09);
        context.bezierCurveTo(519.84, 371.84, 507.49, 382.56, 494.84, 392.45);
        context.bezierCurveTo(451.09, 429.65, 414.12, 474.71, 385.47, 524.44);
        context.bezierCurveTo(378.41, 537.36, 371.28, 550.28, 365.09, 563.65);
        context.bezierCurveTo(363.6, 565.23, 361.87, 566.63, 360.68, 568.48);
        context.bezierCurveTo(349.27, 592.76, 338.49, 617.65, 332.97, 644.03);
        context.bezierCurveTo(329.47, 654.47, 327.59, 665.33, 325.72, 676.17);
        context.bezierCurveTo(321.71, 699.01, 319.17, 722.19, 319.24, 745.4);
        context.bezierCurveTo(319.32, 754.27, 317.39, 763.11, 318.64, 771.96);
        context.bezierCurveTo(320.31, 785.27, 319.73, 798.83, 322.55, 811.99);
        context.bezierCurveTo(323.59, 820.35, 324.97, 828.67, 327.03, 836.85);
        context.bezierCurveTo(329.84, 849.68, 332.29, 862.64, 336.95, 874.97);
        context.bezierCurveTo(339.85, 883.81, 343.72, 892.29, 347.2, 900.92);
        context.bezierCurveTo(346.27, 905.07, 345.48, 909.25, 344.73, 913.45);
        context.bezierCurveTo(343.64, 911.68, 342.53, 909.89, 341.43, 908.15);
        context.bezierCurveTo(341.65, 911.19, 341.91, 914.24, 342.17, 917.29);
        context.bezierCurveTo(336.99, 917.53, 331.8, 917.52, 326.63, 917.27);
        context.bezierCurveTo(326.55, 912.92, 325.01, 907.27, 330.37, 905.55);
        context.bezierCurveTo(330.44, 902.51, 330.48, 899.47, 330.49, 896.44);
        context.bezierCurveTo(327.03, 896.23, 323.57, 896.01, 320.11, 895.81);
        context.bezierCurveTo(319.88, 890.11, 319.77, 884.41, 319.79, 878.72);
        context.bezierCurveTo(316.13, 878.64, 312.47, 879, 309.12, 880.55);
        context.bezierCurveTo(308.6, 877.87, 308.07, 875.19, 307.53, 872.52);
        context.bezierCurveTo(305.92, 873.04, 304.31, 873.55, 302.72, 874.13);
        context.bezierCurveTo(304.39, 867.96, 305.39, 861.64, 307.25, 855.52);
        context.bezierCurveTo(306.52, 855.19, 305.08, 854.55, 304.36, 854.21);
        context.bezierCurveTo(305.09, 854.15, 306.57, 854.01, 307.32, 853.95);
        context.bezierCurveTo(309.48, 841.89, 309.76, 829.6, 309.63, 817.4);
        context.bezierCurveTo(311.13, 801.63, 308.07, 785.89, 304.84, 770.53);
        context.bezierCurveTo(305.45, 769.19, 306.07, 767.84, 306.69, 766.52);
        context.bezierCurveTo(305.96, 766.31, 304.51, 765.88, 303.77, 765.67);
        context.bezierCurveTo(302.83, 759.81, 301.28, 754.08, 299.91, 748.31);
        context.bezierCurveTo(296.88, 735.08, 292.25, 722.29, 287.43, 709.64);
        context.bezierCurveTo(289.15, 696.17, 291.83, 682.87, 293.91, 669.47);
        context.bezierCurveTo(297.64, 656.95, 298.31, 643.79, 301.55, 631.15);
        context.bezierCurveTo(303.77, 622.61, 304.61, 613.77, 306.95, 605.27);
        context.bezierCurveTo(313.48, 583.43, 318.19, 561.12, 324.65, 539.27);
        context.bezierCurveTo(331.12, 522.56, 335.33, 505.09, 341.93, 488.44);
        context.bezierCurveTo(344.88, 480.96, 350.75, 474.73, 352.01, 466.61);
        context.bezierCurveTo(353.04, 459.53, 357.04, 453.48, 359.43, 446.85);
        context.bezierCurveTo(363.19, 436.68, 369.81, 427.73, 372.49, 417.12);
        context.bezierCurveTo(378.15, 408.12, 384.67, 399.69, 391.4, 391.49);
        context.bezierCurveTo(404.44, 377.77, 416.45, 363.07, 430.59, 350.43);
        context.bezierCurveTo(443.41, 337.87, 457.19, 326.33, 471.15, 315.07);
        context.bezierCurveTo(484.25, 305.21, 496.6, 293.69, 512.39, 288.21);
        context.bezierCurveTo(528.45, 281.95, 543.37, 273.27, 558.85, 265.75);
        context.bezierCurveTo(600.2, 246.45, 643.63, 231.73, 687.99, 221.04);
        context.bezierCurveTo(709.49, 215.17, 731.56, 211.8, 753.52, 208.13);
        context.bezierCurveTo(776.09, 205.33, 798.68, 202.27, 821.43, 201.52);
        context.bezierCurveTo(823.51, 201.69, 825.28, 200.67, 826.65, 199.17);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();


    }

    function drawPath3() {
        context.beginPath();
        context.moveTo(742.89, 362);
        context.bezierCurveTo(818.17, 349.6, 895.29, 348.67, 970.93, 358.56);
        context.bezierCurveTo(984.31, 360.12, 997.32, 363.87, 1010.69, 365.41);
        context.bezierCurveTo(1017.41, 366.47, 1023.88, 368.71, 1030.67, 369.48);
        context.bezierCurveTo(1035.24, 369.88, 1039.49, 371.69, 1043.92, 372.83);
        context.bezierCurveTo(1058.44, 375.56, 1072.47, 380.25, 1086.64, 384.35);
        context.bezierCurveTo(1096.23, 388.08, 1106.15, 390.87, 1115.63, 394.88);
        context.bezierCurveTo(1125.28, 397.35, 1133.73, 402.79, 1142.96, 406.36);
        context.bezierCurveTo(1149.77, 409.01, 1155.84, 413.19, 1162.49, 416.2);
        context.bezierCurveTo(1167.73, 418.53, 1172.17, 422.65, 1177.99, 423.6);
        context.bezierCurveTo(1184.31, 428.23, 1190.8, 432.68, 1196.27, 438.35);
        context.bezierCurveTo(1196.08, 439.4, 1195.72, 441.51, 1195.55, 442.56);
        context.bezierCurveTo(1202.31, 450.17, 1210.27, 456.79, 1215.77, 465.47);
        context.bezierCurveTo(1222.96, 476.39, 1232.35, 485.85, 1238.39, 497.49);
        context.bezierCurveTo(1238.63, 497.71, 1239.11, 498.12, 1239.35, 498.32);
        context.bezierCurveTo(1242.44, 503.25, 1245.08, 508.55, 1249.24, 512.72);
        context.bezierCurveTo(1257.64, 527.24, 1264.52, 542.57, 1272.21, 557.47);
        context.bezierCurveTo(1275.08, 562.87, 1278.65, 568.37, 1278.12, 574.77);
        context.lineTo(1278.12, 576.13);
        context.bezierCurveTo(1283.6, 575.61, 1285.44, 569.49, 1289.09, 566.2);
        context.bezierCurveTo(1290.49, 566.72, 1291.92, 567.23, 1293.36, 567.76);
        context.bezierCurveTo(1296.85, 566.11, 1300.33, 564.43, 1303.8, 562.71);
        context.bezierCurveTo(1303.13, 562.03, 1301.8, 560.67, 1301.13, 559.99);
        context.bezierCurveTo(1308.16, 560.76, 1312.43, 566.79, 1315.16, 572.71);
        context.bezierCurveTo(1318.59, 579.12, 1320.29, 586.23, 1322.47, 593.12);
        context.bezierCurveTo(1323.87, 593.17, 1325.33, 593.25, 1326.77, 593.32);
        context.bezierCurveTo(1325.76, 593.37, 1323.72, 593.48, 1322.71, 593.53);
        context.bezierCurveTo(1323.44, 597.53, 1324.24, 601.53, 1325, 605.55);
        context.bezierCurveTo(1318.13, 608.67, 1310.39, 608.47, 1303.43, 611.25);
        context.bezierCurveTo(1299.11, 612.91, 1294.64, 614.11, 1290.37, 615.85);
        context.bezierCurveTo(1278.88, 621.75, 1267.24, 627.6, 1257.2, 635.83);
        context.bezierCurveTo(1248.89, 644.01, 1239.73, 651.24, 1231.24, 659.21);
        context.bezierCurveTo(1228.11, 662.21, 1224.23, 664.52, 1221.85, 668.23);
        context.bezierCurveTo(1217.33, 675.72, 1210.79, 681.72, 1206.73, 689.53);
        context.bezierCurveTo(1201.75, 695.49, 1198.77, 702.72, 1194.07, 708.85);
        context.bezierCurveTo(1191.72, 712.55, 1190.97, 716.99, 1188.88, 720.83);
        context.bezierCurveTo(1180.12, 735.29, 1176.81, 752.08, 1171.8, 768.01);
        context.bezierCurveTo(1171.13, 771.93, 1171.53, 776.04, 1170.23, 779.85);
        context.bezierCurveTo(1168.91, 783.76, 1167.4, 787.69, 1167.33, 791.89);
        context.bezierCurveTo(1167.05, 800.83, 1164.76, 809.71, 1166.08, 818.68);
        context.bezierCurveTo(1167.2, 826.53, 1165.51, 834.79, 1168.49, 842.35);
        context.bezierCurveTo(1171.39, 849.83, 1170.77, 858.29, 1174.67, 865.45);
        context.bezierCurveTo(1177.37, 870.36, 1180.49, 875.07, 1182.41, 880.39);
        context.bezierCurveTo(1184.79, 886.8, 1189.73, 891.76, 1194.92, 896.04);
        context.bezierCurveTo(1198.6, 899.12, 1201.43, 903.09, 1205.09, 906.23);
        context.bezierCurveTo(1208.17, 908.88, 1211.45, 911.32, 1214.77, 913.71);
        context.bezierCurveTo(1204.65, 923.95, 1196.33, 935.89, 1185.11, 945.04);
        context.bezierCurveTo(1170.97, 959.52, 1155.28, 972.33, 1139.15, 984.48);
        context.bezierCurveTo(1133.2, 988.25, 1128.48, 993.63, 1122.29, 997.05);
        context.bezierCurveTo(1116.87, 1000.92, 1111.11, 1004.36, 1105.97, 1008.63);
        context.bezierCurveTo(1097.43, 1011.2, 1088.35, 1011.72, 1080.04, 1015.03);
        context.bezierCurveTo(1069.59, 1018.04, 1058.79, 1019.49, 1048.15, 1021.64);
        context.bezierCurveTo(1042.76, 1021.63, 1037.31, 1021.43, 1032.05, 1022.83);
        context.bezierCurveTo(1024.15, 1024.77, 1015.96, 1024.64, 1007.96, 1025.89);
        context.bezierCurveTo(996.83, 1027, 985.77, 1028.84, 974.6, 1029.27);
        context.bezierCurveTo(964.83, 1029.65, 955.15, 1031.32, 945.36, 1031.13);
        context.bezierCurveTo(937.33, 1031.07, 929.4, 1032.68, 921.37, 1032.67);
        context.bezierCurveTo(914.91, 1032.65, 908.45, 1032.69, 902, 1033.16);
        context.bezierCurveTo(893.83, 1032.36, 885.61, 1032.93, 877.41, 1032.84);
        context.bezierCurveTo(869.64, 1032.81, 861.85, 1032.23, 854.11, 1033.04);
        context.bezierCurveTo(843.31, 1030.77, 832.21, 1031.68, 821.29, 1030.49);
        context.bezierCurveTo(805.65, 1030.17, 790.16, 1027.87, 774.59, 1026.47);
        context.bezierCurveTo(756.6, 1024.44, 738.64, 1022.21, 720.76, 1019.43);
        context.bezierCurveTo(704.11, 1015.59, 686.92, 1014.43, 670.55, 1009.37);
        context.bezierCurveTo(638.04, 1002.01, 606.29, 991.45, 575.68, 978.32);
        context.bezierCurveTo(566.07, 973.23, 555.95, 969.2, 546.08, 964.64);
        context.bezierCurveTo(526.33, 953.55, 511.24, 936.35, 495.31, 920.61);
        context.bezierCurveTo(484.93, 911.28, 476.12, 900.32, 468.48, 888.68);
        context.bezierCurveTo(462.12, 877.89, 454.16, 868.04, 449.19, 856.48);
        context.bezierCurveTo(442.11, 838.16, 432.53, 820.8, 427.12, 801.85);
        context.bezierCurveTo(419.15, 776.12, 413.97, 749.52, 411.43, 722.71);
        context.bezierCurveTo(410.59, 701.4, 409.08, 679.97, 411.37, 658.71);
        context.bezierCurveTo(411.93, 650.33, 413.57, 641.99, 412.49, 633.59);
        context.bezierCurveTo(416.69, 620.31, 422.87, 607.85, 428.76, 595.27);
        context.bezierCurveTo(438.32, 576.37, 448.61, 557.81, 460.04, 539.96);
        context.bezierCurveTo(464.07, 533.33, 470.08, 527.76, 471.79, 519.92);
        context.bezierCurveTo(471.76, 520.68, 471.69, 522.2, 471.67, 522.96);
        context.bezierCurveTo(491.88, 496.28, 513.12, 470.05, 538.37, 447.96);
        context.bezierCurveTo(552.69, 434.35, 568.28, 422.12, 584.4, 410.73);
        context.bezierCurveTo(588.31, 408.04, 592.32, 405.52, 596.28, 402.92);
        context.bezierCurveTo(599.21, 401, 602.19, 399.15, 605.11, 397.21);
        context.bezierCurveTo(605.83, 397.8, 607.29, 399, 608.01, 399.59);
        context.bezierCurveTo(617.43, 397.71, 625.79, 392.65, 634.99, 389.99);
        context.bezierCurveTo(641.71, 388.27, 647.84, 384.76, 654.73, 383.57);
        context.bezierCurveTo(683.47, 373.97, 713.11, 367.36, 742.89, 362);
        context.closePath();
        context.moveTo(1074.71, 456.48);
        context.bezierCurveTo(1059.25, 461.45, 1047.28, 472.81, 1035.28, 483.23);
        context.bezierCurveTo(1019.29, 499.39, 1008.69, 520.48, 1004.25, 542.71);
        context.bezierCurveTo(1000.68, 560.24, 1000.76, 578.41, 1003.27, 596.07);
        context.bezierCurveTo(1008.13, 628.07, 1024.71, 657.23, 1046.13, 681.09);
        context.bezierCurveTo(1045.39, 681.6, 1043.91, 682.61, 1043.16, 683.11);
        context.bezierCurveTo(1036.84, 704.8, 1036.05, 727.75, 1038.33, 750.15);
        context.bezierCurveTo(1041.55, 761.67, 1045.6, 774.88, 1057.23, 780.53);
        context.bezierCurveTo(1057.75, 777.67, 1060.69, 773.36, 1057.97, 771.19);
        context.bezierCurveTo(1058.64, 769.72, 1059.24, 768.23, 1059.8, 766.72);
        context.bezierCurveTo(1059.07, 775.29, 1058.63, 784.53, 1062.69, 792.41);
        context.bezierCurveTo(1064.2, 779.39, 1064.44, 766.13, 1067.96, 753.44);
        context.bezierCurveTo(1072.37, 739.47, 1077.27, 725.48, 1084.8, 712.84);
        context.lineTo(1084.16, 712.37);
        context.bezierCurveTo(1084.91, 712.12, 1086.39, 711.61, 1087.13, 711.36);
        context.bezierCurveTo(1086.55, 709.51, 1087.33, 707.75, 1088.31, 706.2);
        context.bezierCurveTo(1099.65, 687.23, 1112.84, 669.33, 1127.95, 653.2);
        context.bezierCurveTo(1137.33, 643.93, 1146.97, 634.95, 1157.12, 626.49);
        context.bezierCurveTo(1165.92, 619.55, 1175.15, 613.15, 1184.93, 607.64);
        context.bezierCurveTo(1187.76, 606.04, 1191.32, 604.75, 1192.51, 601.39);
        context.bezierCurveTo(1193.57, 601.21, 1194.65, 601.01, 1195.73, 600.8);
        context.bezierCurveTo(1196.89, 600.68, 1198.05, 600.45, 1199.2, 600.12);
        context.bezierCurveTo(1206.96, 595.71, 1215.47, 592.75, 1223.97, 590.09);
        context.bezierCurveTo(1235.56, 586.15, 1248.31, 583.87, 1260.35, 587.09);
        context.bezierCurveTo(1264.01, 584.21, 1258.83, 579.84, 1255.47, 579.91);
        context.bezierCurveTo(1253.52, 571.69, 1251.83, 563.44, 1249.13, 555.43);
        context.bezierCurveTo(1250.77, 554.16, 1249.67, 552.35, 1247.83, 552.45);
        context.bezierCurveTo(1238.4, 528.68, 1222.56, 507.92, 1204.07, 490.47);
        context.bezierCurveTo(1182.93, 468.96, 1154.48, 453.95, 1124.04, 452.44);
        context.bezierCurveTo(1113.43, 450.93, 1102.67, 450.32, 1091.97, 451.37);
        context.bezierCurveTo(1086.07, 452.51, 1080.52, 455, 1074.71, 456.48);
        context.closePath();
        context.moveTo(654.64, 469.01);
        context.bezierCurveTo(657.96, 467.47, 663.04, 468.24, 664.65, 464.28);
        context.bezierCurveTo(662.19, 464.35, 659.73, 464.71, 657.44, 465.59);
        context.bezierCurveTo(640.44, 468.53, 624.81, 476.53, 609.57, 484.25);
        context.bezierCurveTo(593.89, 493.47, 578.84, 503.85, 565.39, 516.12);
        context.bezierCurveTo(561.28, 519.55, 557.31, 523.12, 553.57, 526.96);
        context.bezierCurveTo(550.91, 529.24, 548.55, 531.85, 546.69, 534.84);
        context.bezierCurveTo(535.79, 544.76, 526.56, 556.35, 517.91, 568.24);
        context.bezierCurveTo(512.44, 576.21, 506.09, 583.64, 501.65, 592.28);
        context.bezierCurveTo(497.88, 598.24, 494.39, 604.43, 491.21, 610.72);
        context.bezierCurveTo(490.15, 610.68, 489.41, 610.15, 489.01, 609.12);
        context.lineTo(488.63, 611.73);
        context.bezierCurveTo(488.84, 612.11, 489.27, 612.84, 489.48, 613.21);
        context.bezierCurveTo(482.12, 629.88, 472.8, 645.97, 468.53, 663.89);
        context.bezierCurveTo(463.07, 686.11, 461.25, 709.97, 467.75, 732.17);
        context.bezierCurveTo(473.53, 752.55, 484.61, 771.51, 499.65, 786.41);
        context.bezierCurveTo(509.95, 796.48, 522.41, 804.88, 536.2, 809.23);
        context.bezierCurveTo(547.72, 814.97, 560.71, 816.67, 573.28, 818.77);
        context.bezierCurveTo(606.49, 821.91, 641.29, 816.84, 670.44, 799.95);
        context.bezierCurveTo(684.87, 793.27, 697.75, 783.68, 709.8, 773.41);
        context.bezierCurveTo(730.84, 754.8, 748.71, 732.77, 763.63, 708.99);
        context.bezierCurveTo(775.87, 688.63, 786.84, 667.35, 794.28, 644.73);
        context.bezierCurveTo(800.67, 625.93, 804.6, 606.35, 806.96, 586.65);
        context.bezierCurveTo(807.45, 573.31, 809.03, 559.68, 805.83, 546.55);
        context.bezierCurveTo(804.04, 538.63, 802.77, 530.25, 798.17, 523.39);
        context.bezierCurveTo(794.53, 519.65, 793.85, 514.24, 791.08, 509.97);
        context.bezierCurveTo(780.09, 493.32, 763.69, 480.61, 745.11, 473.48);
        context.bezierCurveTo(736.17, 469.49, 726.53, 467.8, 717.23, 465.03);
        context.bezierCurveTo(706.85, 462.15, 695.93, 462.67, 685.31, 463.13);
        context.bezierCurveTo(674.83, 463.61, 664.91, 467.32, 654.64, 469.01);
        context.closePath();
        context.moveTo(915.87, 633.29);
        context.bezierCurveTo(908.11, 635.13, 898.73, 634.57, 892.96, 640.96);
        context.bezierCurveTo(890.33, 643.81, 889.59, 648.29, 891.11, 651.87);
        context.bezierCurveTo(889.44, 658.83, 894.44, 664.32, 898.88, 668.95);
        context.bezierCurveTo(907.99, 675.73, 920.03, 677.23, 930.93, 674.6);
        context.bezierCurveTo(936.15, 675.47, 941.63, 674.81, 946.72, 673.49);
        context.bezierCurveTo(957.83, 668.64, 968.33, 661.29, 975, 650.99);
        context.bezierCurveTo(977.81, 646.33, 979.28, 639.72, 975.65, 635.15);
        context.bezierCurveTo(971.43, 633.43, 967.09, 631.92, 962.75, 630.55);
        context.bezierCurveTo(947.07, 629.49, 931.27, 629.99, 915.87, 633.29);
        context.closePath();
        context.moveTo(825.44, 687.36);
        context.bezierCurveTo(823.88, 688.39, 822.27, 689.32, 820.68, 690.27);
        context.bezierCurveTo(820.43, 690.99, 819.91, 692.44, 819.65, 693.16);
        context.bezierCurveTo(825.64, 703.07, 837.29, 708.21, 848.17, 710.53);
        context.bezierCurveTo(839.15, 716, 832.65, 724.61, 825.65, 732.32);
        context.bezierCurveTo(809.07, 754.92, 797.92, 783.44, 802.68, 811.79);
        context.bezierCurveTo(804.71, 828.79, 814.19, 847.27, 831.67, 852.47);
        context.lineTo(831.96, 853.23);
        context.bezierCurveTo(840.92, 861.23, 854.13, 861.95, 865.36, 859.36);
        context.bezierCurveTo(870.48, 858, 876.4, 857.21, 880.21, 853.17);
        context.bezierCurveTo(908.84, 841.97, 935.13, 824.07, 954.64, 800.16);
        context.bezierCurveTo(961.91, 792.05, 968.23, 783.04, 973.09, 773.29);
        context.bezierCurveTo(974.21, 771.59, 975.29, 769.85, 976.35, 768.11);
        context.bezierCurveTo(976.89, 765.79, 977.91, 763.63, 979.04, 761.55);
        context.bezierCurveTo(985.97, 745.64, 991.37, 728.36, 990.08, 710.81);
        context.bezierCurveTo(989.29, 710.84, 987.75, 710.89, 986.96, 710.93);
        context.bezierCurveTo(986.63, 711.28, 985.93, 711.99, 985.6, 712.33);
        context.lineTo(984.49, 712.47);
        context.lineTo(984.93, 714.27);
        context.lineTo(983.56, 713.85);
        context.bezierCurveTo(983.43, 717.79, 983.24, 721.77, 982.05, 725.55);
        context.bezierCurveTo(982.49, 722.36, 982.55, 719.13, 982.29, 715.92);
        context.bezierCurveTo(982.65, 715.04, 983.35, 713.25, 983.71, 712.36);
        context.bezierCurveTo(977.25, 712.67, 970.75, 711.73, 964.39, 713.15);
        context.bezierCurveTo(961.33, 714.05, 958.67, 712.2, 955.93, 711.24);
        context.bezierCurveTo(956.67, 711.41, 958.13, 711.75, 958.87, 711.92);
        context.bezierCurveTo(960.97, 712.4, 963.13, 712.69, 965.31, 712.41);
        context.bezierCurveTo(972.11, 711.65, 979.04, 712.08, 985.71, 710.32);
        context.lineTo(986.01, 709.77);
        context.bezierCurveTo(996.61, 709.2, 1007.65, 706, 1015.48, 698.48);
        context.bezierCurveTo(1018.37, 695.61, 1019.35, 691.21, 1016.45, 687.96);
        context.bezierCurveTo(1012.89, 690.29, 1010.67, 694.04, 1007.53, 696.84);
        context.bezierCurveTo(1002.13, 702.43, 994.2, 703.93, 987.47, 707.27);
        context.lineTo(985.16, 707.43);
        context.bezierCurveTo(985.03, 707, 984.79, 706.16, 984.65, 705.73);
        context.bezierCurveTo(984.56, 706.32, 984.37, 707.48, 984.29, 708.07);
        context.bezierCurveTo(965.36, 710.28, 946.59, 705.2, 928.97, 698.71);
        context.bezierCurveTo(930.31, 697.47, 931.73, 696.32, 933.13, 695.13);
        context.bezierCurveTo(919.16, 698, 905.84, 703.64, 891.76, 706.13);
        context.bezierCurveTo(884.65, 707.77, 877.29, 707.31, 870.11, 708.24);
        context.bezierCurveTo(863.64, 707.4, 857.23, 705.76, 850.69, 705.95);
        context.bezierCurveTo(845.95, 700.31, 837.03, 700.25, 832.68, 694.08);
        context.bezierCurveTo(830.6, 691.53, 829.36, 687.31, 825.44, 687.36);
        context.closePath();
        context.moveTo(482.2, 815.56);
        context.bezierCurveTo(476.89, 820.12, 473.39, 826.33, 468.85, 831.61);
        context.bezierCurveTo(463.72, 837.55, 463.33, 845.81, 464.28, 853.24);
        context.bezierCurveTo(471.63, 854.41, 474.52, 846.76, 477.75, 841.79);
        context.bezierCurveTo(482.32, 833.52, 490.65, 827.73, 493.16, 818.32);
        context.bezierCurveTo(491.09, 814.21, 486, 814.52, 482.2, 815.56);
        context.closePath();
        context.moveTo(510.79, 838.81);
        context.bezierCurveTo(507.04, 844.33, 502.15, 851.56, 505.85, 858.27);
        context.bezierCurveTo(508.65, 857.81, 509.53, 854.55, 511.19, 852.61);
        context.bezierCurveTo(514.39, 853.77, 515.76, 850.05, 517.49, 848.16);
        context.bezierCurveTo(521.07, 843.32, 526.07, 837.45, 522.81, 831.11);
        context.bezierCurveTo(520.12, 831.35, 517.28, 830.88, 514.71, 831.85);
        context.bezierCurveTo(512.59, 833.59, 511.93, 836.43, 510.79, 838.81);
        context.closePath();
        context.moveTo(553.55, 852.05);
        context.bezierCurveTo(551.43, 854.05, 548.99, 855.87, 547.59, 858.49);
        context.bezierCurveTo(547.03, 862, 547.17, 865.57, 547.16, 869.13);
        context.bezierCurveTo(551.25, 868.96, 553.41, 865.32, 556.09, 862.84);
        context.bezierCurveTo(558.21, 861.21, 560.37, 859.64, 562.25, 857.73);
        context.bezierCurveTo(562.24, 856.97, 562.19, 855.43, 562.16, 854.65);
        context.bezierCurveTo(565.61, 851.99, 568.44, 848.65, 571.52, 845.6);
        context.bezierCurveTo(571.56, 842.93, 571.57, 840.28, 571.6, 837.64);
        context.bezierCurveTo(568.99, 837.71, 566.36, 837.64, 563.79, 838.11);
        context.bezierCurveTo(559.63, 842.09, 553.64, 845.57, 553.55, 852.05);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();


    }

    function drawPath4() {
        context.beginPath();
        context.moveTo(519.83, 409.07);
        context.bezierCurveTo(526.65, 402.77, 533.53, 396.56, 541.28, 391.4);
        context.bezierCurveTo(538.75, 399.64, 528.84, 401.17, 524.57, 408.23);
        context.bezierCurveTo(522.99, 408.49, 521.4, 408.76, 519.83, 409.07);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();


    }

    function drawPath5() {
        context.beginPath();
        context.moveTo(181.96, 1270.77);
        context.bezierCurveTo(182.39, 1266.53, 187.59, 1267.08, 190.67, 1266.96);
        context.bezierCurveTo(206.37, 1267.29, 222.13, 1266.17, 237.8, 1267.63);
        context.bezierCurveTo(239.48, 1285.92, 242.01, 1304.12, 244.29, 1322.35);
        context.bezierCurveTo(242.11, 1324.08, 240.71, 1326.05, 243.69, 1327.88);
        context.bezierCurveTo(242.84, 1327.61, 241.16, 1327.11, 240.31, 1326.85);
        context.bezierCurveTo(241.17, 1329.79, 242.79, 1332.43, 245.89, 1333.33);
        context.lineTo(183.08, 1333.33);
        context.bezierCurveTo(181.43, 1319.83, 181.08, 1306.16, 180.91, 1292.57);
        context.bezierCurveTo(182.43, 1285.36, 181.43, 1278.03, 181.96, 1270.77);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();

    }

    function drawPath6() {
        context.beginPath();
        context.moveTo(1303.67, 1268.15);
        context.bezierCurveTo(1313.55, 1267.24, 1323.44, 1268.2, 1333.33, 1268.17);
        context.lineTo(1333.33, 1333.33);
        context.lineTo(1282.44, 1333.33);
        context.bezierCurveTo(1286.27, 1321.87, 1290.99, 1310.73, 1294.72, 1299.24);
        context.bezierCurveTo(1297.56, 1288.83, 1301.13, 1278.63, 1303.67, 1268.15);
        context.closePath();
        context.fillStyle = fillColor;
        context.fill();


    }

    function drawPath7() {
        context.beginPath();
        context.moveTo(74.87, 67.08);
        context.bezierCurveTo(83.64, 66, 92.48, 66.17, 101.29, 66.23);
        context.bezierCurveTo(511.97, 66.4, 922.65, 66.12, 1333.33, 66.39);
        context.lineTo(1333.33, 73.33);
        context.bezierCurveTo(1125.35, 72.96, 917.36, 73.33, 709.37, 73.15);
        context.bezierCurveTo(705.71, 72.85, 702.36, 71.15, 698.73, 70.68);
        context.bezierCurveTo(691.16, 69.87, 683.6, 71.33, 676.05, 71.71);
        context.bezierCurveTo(655.59, 71.93, 635.12, 72.43, 614.67, 71.91);
        context.bezierCurveTo(560.45, 72.16, 506.25, 71.83, 452.04, 72.04);
        context.bezierCurveTo(434.68, 71.47, 417.31, 72.56, 399.93, 71.89);
        context.bezierCurveTo(360.84, 72.16, 321.75, 71.79, 282.65, 72.08);
        context.bezierCurveTo(265.76, 71.44, 248.85, 72.45, 231.96, 71.93);
        context.bezierCurveTo(186.23, 71.97, 140.49, 72.16, 94.75, 71.93);
        context.bezierCurveTo(90.12, 72, 85.35, 71.43, 80.85, 72.81);
        context.bezierCurveTo(78.91, 76.41, 80.95, 80.37, 81.65, 84);
        context.bezierCurveTo(80.4, 87.41, 79.85, 91.03, 80.01, 94.65);
        context.bezierCurveTo(80.24, 102.24, 78.69, 109.72, 78.8, 117.31);
        context.bezierCurveTo(78.69, 233.29, 78.79, 349.29, 78.73, 465.28);
        context.bezierCurveTo(78.96, 473.92, 78.35, 482.59, 79.44, 491.19);
        context.bezierCurveTo(80.28, 498.03, 80, 504.93, 80.13, 511.81);
        context.bezierCurveTo(81.65, 511.8, 83.17, 511.79, 84.68, 511.77);
        context.bezierCurveTo(85.12, 510.23, 85.56, 508.68, 86, 507.15);
        context.bezierCurveTo(92.67, 505.33, 99, 501.04, 106.16, 502.19);
        context.bezierCurveTo(101.67, 504.84, 97.05, 507.28, 92.48, 509.8);
        context.bezierCurveTo(86.72, 513, 81.95, 517.63, 76.31, 521.03);
        context.bezierCurveTo(75.69, 521.39, 74.47, 522.11, 73.85, 522.47);
        context.bezierCurveTo(73.93, 375.88, 73.84, 229.28, 73.91, 82.69);
        context.bezierCurveTo(73.87, 77.47, 74.25, 72.25, 74.87, 67.08);
        context.closePath();
        context.fillStyle = fillColor2;
        context.fill();


    }

    function drawPath8() {
        context.beginPath();
        context.moveTo(1178.79, 1034.44);
        context.bezierCurveTo(1187.25, 1029.77, 1196.21, 1026.09, 1204.87, 1021.8);
        context.lineTo(1206.03, 1024.11);
        context.bezierCurveTo(1202.45, 1029.83, 1195.12, 1027.97, 1190.09, 1031.32);
        context.bezierCurveTo(1189.12, 1031.17, 1188.17, 1031.04, 1187.24, 1030.92);
        context.bezierCurveTo(1187.52, 1031.64, 1188.08, 1033.08, 1188.35, 1033.8);
        context.bezierCurveTo(1185.2, 1034.47, 1181.97, 1034.63, 1178.79, 1034.44);
        context.closePath();
        context.fillStyle = fillColor2;
        context.fill();


    }

    function drawPath9() {
        context.beginPath();
        context.moveTo(676.05, 71.71);
        context.bezierCurveTo(683.6, 71.33, 691.16, 69.87, 698.73, 70.68);
        context.bezierCurveTo(702.36, 71.15, 705.71, 72.85, 709.37, 73.15);
        context.bezierCurveTo(917.36, 73.33, 1125.35, 72.96, 1333.33, 73.33);
        context.lineTo(1333.33, 443.45);
        context.bezierCurveTo(1327.36, 435.65, 1322.79, 426.93, 1317.03, 418.99);
        context.bezierCurveTo(1310.23, 408.27, 1304, 396.33, 1293.35, 388.89);
        context.bezierCurveTo(1292.28, 387.96, 1291.24, 387.01, 1290.21, 386.08);
        context.bezierCurveTo(1293.33, 380.79, 1296.85, 375.67, 1298.96, 369.84);
        context.bezierCurveTo(1301.2, 363.56, 1304.57, 357.68, 1305.95, 351.11);
        context.bezierCurveTo(1307.41, 343.89, 1310.63, 336.85, 1309.89, 329.35);
        context.bezierCurveTo(1308.12, 314.71, 1309.65, 299.68, 1305.53, 285.35);
        context.bezierCurveTo(1302.37, 274.91, 1300.03, 264.05, 1294.65, 254.45);
        context.bezierCurveTo(1289.96, 246.09, 1285.76, 237.32, 1279.08, 230.31);
        context.bezierCurveTo(1271.81, 222.45, 1264.44, 214.49, 1255.69, 208.28);
        context.bezierCurveTo(1248.17, 203.81, 1241.09, 198.45, 1232.87, 195.31);
        context.bezierCurveTo(1219.27, 189.55, 1205.44, 183.81, 1190.79, 181.39);
        context.bezierCurveTo(1176.29, 178.2, 1161.35, 178.65, 1146.63, 179.15);
        context.bezierCurveTo(1134.73, 180.37, 1122.83, 182.43, 1111.47, 186.24);
        context.bezierCurveTo(1106.59, 188.37, 1100.95, 190.11, 1097.73, 194.63);
        context.bezierCurveTo(1099.09, 195.12, 1100.48, 195.6, 1101.91, 196.04);
        context.bezierCurveTo(1098.89, 197.36, 1095.81, 198.51, 1092.77, 199.71);
        context.bezierCurveTo(1090.88, 193.2, 1083.65, 190.59, 1078.8, 186.57);
        context.bezierCurveTo(1067.29, 179.99, 1055, 174.8, 1042.93, 169.31);
        context.bezierCurveTo(1028.44, 164.95, 1014.6, 158.67, 999.93, 154.84);
        context.bezierCurveTo(992.28, 153.15, 984.97, 150.07, 977.17, 149.08);
        context.bezierCurveTo(970.77, 148.29, 964.69, 146.05, 958.44, 144.59);
        context.bezierCurveTo(911.99, 135.89, 864.53, 132.44, 817.32, 134.67);
        context.bezierCurveTo(795.81, 136.04, 774.16, 136.12, 752.8, 139.36);
        context.bezierCurveTo(744.84, 140.71, 736.76, 141.12, 728.77, 142.19);
        context.bezierCurveTo(727.84, 142.32, 726, 142.57, 725.07, 142.71);
        context.bezierCurveTo(728.15, 141.45, 732.17, 140.04, 732.29, 136.05);
        context.bezierCurveTo(732.43, 130.56, 729.36, 124.53, 724.01, 122.51);
        context.bezierCurveTo(719.05, 120.35, 713.13, 120.28, 708.32, 122.83);
        context.bezierCurveTo(704.07, 124.6, 702.69, 129.44, 701.55, 133.47);
        context.bezierCurveTo(700.09, 137.47, 703.12, 140.95, 705.03, 144.16);
        context.bezierCurveTo(708.44, 144.27, 711.85, 144.45, 715.27, 144.52);
        context.bezierCurveTo(702.04, 147.11, 688.81, 149.63, 675.56, 152.08);
        context.bezierCurveTo(677.85, 151.09, 680.11, 150.01, 682.37, 148.95);
        context.bezierCurveTo(682.57, 143.72, 682.33, 138.49, 682.69, 133.28);
        context.bezierCurveTo(682.8, 130.08, 684.97, 127.36, 685.15, 124.23);
        context.bezierCurveTo(682.77, 116.79, 674.23, 114.68, 669.36, 109.32);
        context.bezierCurveTo(663.33, 104.13, 660.44, 96.28, 660.68, 88.44);
        context.bezierCurveTo(657.63, 88.45, 654.59, 88.45, 651.55, 88.45);
        context.bezierCurveTo(648.76, 92.31, 646.63, 96.6, 645.35, 101.19);
        context.bezierCurveTo(643.96, 106.28, 640.56, 110.49, 636.85, 114.11);
        context.bezierCurveTo(633.57, 118.13, 626.01, 115.95, 624.63, 121.89);
        context.bezierCurveTo(623.76, 131.27, 627.67, 140.87, 624.93, 150.21);
        context.bezierCurveTo(622.4, 157.31, 613.84, 160.03, 612.27, 167.67);
        context.bezierCurveTo(614.49, 167.83, 616.73, 167.97, 619, 168.07);
        context.bezierCurveTo(614.93, 169.57, 610.84, 171, 606.73, 172.33);
        context.bezierCurveTo(607.47, 171, 608.24, 169.67, 609, 168.33);
        context.bezierCurveTo(604.16, 168.39, 599.29, 168.51, 594.57, 169.64);
        context.bezierCurveTo(591.65, 170.11, 588.57, 171.31, 585.67, 170.13);
        context.bezierCurveTo(579.29, 167.77, 572.73, 165.07, 568.21, 159.77);
        context.bezierCurveTo(565.17, 155.56, 558.51, 155, 554.8, 158.59);
        context.bezierCurveTo(550.33, 162.57, 544.45, 164.47, 538.64, 165.41);
        context.bezierCurveTo(532.97, 165.52, 527.55, 161.63, 521.81, 163.37);
        context.bezierCurveTo(519.63, 164.61, 516.64, 167.28, 518.13, 170.03);
        context.bezierCurveTo(520.33, 173.91, 524.12, 176.55, 526.55, 180.27);
        context.bezierCurveTo(530.99, 188.75, 531.53, 198.48, 531.05, 207.87);
        context.bezierCurveTo(531.96, 207.93, 533.76, 208.08, 534.67, 208.15);
        context.bezierCurveTo(531.81, 210.05, 529, 212.01, 526.31, 214.15);
        context.bezierCurveTo(522.56, 209.85, 517.11, 207.95, 512.35, 205.09);
        context.bezierCurveTo(513.41, 204.57, 514.49, 204.05, 515.57, 203.55);
        context.bezierCurveTo(500.41, 194.63, 484.53, 186.81, 467.59, 181.95);
        context.bezierCurveTo(444.2, 175.11, 419.29, 172.07, 395.19, 176.75);
        context.bezierCurveTo(385.04, 179.03, 374.39, 180.01, 365.15, 185.17);
        context.bezierCurveTo(359.09, 188.64, 352.37, 190.81, 346.47, 194.53);
        context.bezierCurveTo(337.79, 200.79, 329.03, 207.39, 322.95, 216.33);
        context.bezierCurveTo(321.39, 218.52, 320.97, 221.21, 320.61, 223.8);
        context.bezierCurveTo(319.73, 224.85, 318.85, 225.91, 317.97, 226.95);
        context.bezierCurveTo(318.57, 227.65, 319.17, 228.37, 319.77, 229.08);
        context.bezierCurveTo(314.48, 230.93, 311.04, 235.55, 307.57, 239.68);
        context.bezierCurveTo(300.72, 248.27, 295.25, 257.89, 290.64, 267.83);
        context.bezierCurveTo(285.84, 281.51, 280.75, 295.31, 279.47, 309.85);
        context.bezierCurveTo(277.21, 332.51, 276.93, 356.04, 284.87, 377.72);
        context.bezierCurveTo(286.27, 383.43, 290.19, 387.87, 292.89, 392.92);
        context.bezierCurveTo(288.24, 400.24, 282.04, 406.48, 277.88, 414.13);
        context.bezierCurveTo(270.93, 423.64, 263.77, 433.05, 258.11, 443.41);
        context.bezierCurveTo(253.56, 450.17, 249.15, 457.01, 245.55, 464.32);
        context.bezierCurveTo(237.15, 477.91, 229.33, 491.87, 222.28, 506.2);
        context.bezierCurveTo(219.53, 512, 217.99, 518.27, 216.28, 524.44);
        context.bezierCurveTo(217.08, 524.68, 218.71, 525.16, 219.51, 525.4);
        context.lineTo(219.07, 526.23);
        context.bezierCurveTo(215.08, 527.49, 209.33, 529.63, 206.76, 524.97);
        context.bezierCurveTo(207.45, 524.92, 208.84, 524.8, 209.53, 524.73);
        context.bezierCurveTo(206.56, 520.04, 202.88, 515.77, 198.25, 512.63);
        context.bezierCurveTo(192.45, 508.64, 187.41, 503.39, 180.76, 500.79);
        context.bezierCurveTo(176.57, 499.13, 172.35, 497.59, 168.19, 495.87);
        context.bezierCurveTo(160.47, 492.63, 151.96, 492.43, 143.83, 490.91);
        context.bezierCurveTo(135.24, 489.24, 126.36, 489.07, 117.76, 490.69);
        context.bezierCurveTo(117.71, 491.64, 117.6, 493.52, 117.55, 494.47);
        context.bezierCurveTo(130.63, 493.64, 143.85, 494.55, 156.41, 498.49);
        context.bezierCurveTo(147.31, 498.83, 138.45, 496.21, 129.39, 496.24);
        context.bezierCurveTo(121.07, 495.71, 114.43, 502.11, 106.16, 502.19);
        context.bezierCurveTo(99, 501.04, 92.67, 505.33, 86, 507.15);
        context.bezierCurveTo(85.56, 508.68, 85.12, 510.23, 84.68, 511.77);
        context.bezierCurveTo(83.17, 511.79, 81.65, 511.8, 80.13, 511.81);
        context.bezierCurveTo(80, 504.93, 80.28, 498.03, 79.44, 491.19);
        context.bezierCurveTo(78.35, 482.59, 78.96, 473.92, 78.73, 465.28);
        context.bezierCurveTo(78.79, 349.29, 78.69, 233.29, 78.8, 117.31);
        context.bezierCurveTo(78.69, 109.72, 80.24, 102.24, 80.01, 94.65);
        context.bezierCurveTo(79.85, 91.03, 80.4, 87.41, 81.65, 84);
        context.bezierCurveTo(80.95, 80.37, 78.91, 76.41, 80.85, 72.81);
        context.bezierCurveTo(85.35, 71.43, 90.12, 72, 94.75, 71.93);
        context.bezierCurveTo(140.49, 72.16, 186.23, 71.97, 231.96, 71.93);
        context.bezierCurveTo(248.85, 72.45, 265.76, 71.44, 282.65, 72.08);
        context.bezierCurveTo(321.75, 71.79, 360.84, 72.16, 399.93, 71.89);
        context.bezierCurveTo(417.31, 72.56, 434.68, 71.47, 452.04, 72.04);
        context.bezierCurveTo(506.25, 71.83, 560.45, 72.16, 614.67, 71.91);
        context.bezierCurveTo(635.12, 72.43, 655.59, 71.93, 676.05, 71.71);
        context.closePath();
        context.moveTo(575.84, 137.41);
        context.bezierCurveTo(576.39, 141.49, 579.12, 144.84, 580.99, 148.41);
        context.bezierCurveTo(584.81, 149.27, 588.61, 150.28, 592.25, 151.76);
        context.bezierCurveTo(599.85, 149.03, 605.88, 141.48, 605.91, 133.24);
        context.bezierCurveTo(606.16, 129.19, 602.87, 126.27, 600.39, 123.52);
        context.bezierCurveTo(596.97, 119.67, 591.19, 120.91, 586.65, 121.15);
        context.bezierCurveTo(580.8, 124.59, 577.04, 130.83, 575.84, 137.41);
        context.closePath();
        context.fillStyle = fillColor3;
        context.fill();


    }

    function drawPath10() {
        context.beginPath();
        context.moveTo(74.95, 851.88);
        context.bezierCurveTo(75.81, 852.91, 76.69, 853.93, 77.59, 854.95);
        context.bezierCurveTo(86.2, 864.97, 93.08, 876.48, 102.89, 885.48);
        context.bezierCurveTo(108.29, 893.2, 115.81, 898.99, 121.97, 906.04);
        context.bezierCurveTo(125.49, 909.96, 129.45, 913.47, 132.96, 917.41);
        context.bezierCurveTo(131.39, 922.29, 137.52, 924, 138.48, 928.13);
        context.bezierCurveTo(139.85, 934.68, 142.25, 941.16, 141.77, 947.96);
        context.bezierCurveTo(141.77, 953.55, 140.52, 960.12, 144.85, 964.56);
        context.bezierCurveTo(146.77, 967.27, 150.33, 967.12, 153.25, 967.59);
        context.bezierCurveTo(161.01, 968.36, 167.89, 972.41, 174.57, 976.12);
        context.bezierCurveTo(174.56, 975.2, 174.56, 973.35, 174.55, 972.43);
        context.lineTo(175.79, 971.21);
        context.bezierCurveTo(177.17, 990.05, 179.65, 1008.8, 180.57, 1027.68);
        context.bezierCurveTo(180.57, 1044.52, 180.45, 1061.37, 180.43, 1078.21);
        context.bezierCurveTo(179.25, 1092.64, 180.24, 1107.21, 178.17, 1121.57);
        context.bezierCurveTo(177.65, 1136.19, 176.21, 1150.75, 176.53, 1165.37);
        context.bezierCurveTo(174.99, 1177.28, 175.05, 1189.28, 174.97, 1201.27);
        context.bezierCurveTo(173.15, 1223.88, 173.89, 1246.6, 173.61, 1269.27);
        context.bezierCurveTo(166.95, 1267.79, 160.09, 1267.76, 153.29, 1267.73);
        context.bezierCurveTo(127.12, 1267.59, 100.95, 1267.97, 74.77, 1267.48);
        context.bezierCurveTo(73.76, 1257.45, 74.49, 1247.37, 74.33, 1237.33);
        context.bezierCurveTo(74.27, 1128, 74.35, 1018.67, 74.27, 909.33);
        context.bezierCurveTo(74.44, 890.17, 73.75, 871, 74.95, 851.88);
        context.closePath();
        context.moveTo(128.51, 987.49);
        context.bezierCurveTo(123.45, 990.35, 119.45, 995.85, 119.08, 1001.77);
        context.bezierCurveTo(118.52, 1005.75, 116.31, 1010.39, 119.53, 1013.83);
        context.bezierCurveTo(122.88, 1017.95, 125.27, 1024.11, 131.19, 1024.88);
        context.bezierCurveTo(138.2, 1025.79, 145.59, 1025.13, 152.29, 1022.95);
        context.bezierCurveTo(157.77, 1017.89, 159.95, 1009.85, 159.56, 1002.57);
        context.bezierCurveTo(158.53, 998.45, 156.51, 994.59, 154.32, 990.99);
        context.bezierCurveTo(146.63, 986.31, 137.16, 986.44, 128.51, 987.49);
        context.closePath();
        context.fillStyle = fillColor3;
        context.fill();


    }

    function drawPath11() {
        context.beginPath();
        context.moveTo(1328.99, 1155.55);
        context.bezierCurveTo(1331.03, 1148.07, 1331.27, 1140.23, 1333.33, 1132.75);
        context.lineTo(1333.33, 1268.17);
        context.bezierCurveTo(1323.44, 1268.2, 1313.55, 1267.24, 1303.67, 1268.15);
        context.lineTo(1303.97, 1267.03);
        context.bezierCurveTo(1312.19, 1237.27, 1318, 1206.93, 1324.88, 1176.85);
        context.bezierCurveTo(1326.08, 1169.72, 1327.13, 1162.55, 1328.99, 1155.55);
        context.closePath();
        context.fillStyle = fillColor3;
        context.fill();


    }

    function drawPath12() {
        context.beginPath();
        context.moveTo(651.55, 88.45);
        context.bezierCurveTo(654.59, 88.45, 657.63, 88.45, 660.68, 88.44);
        context.bezierCurveTo(660.44, 96.28, 663.33, 104.13, 669.36, 109.32);
        context.bezierCurveTo(674.23, 114.68, 682.77, 116.79, 685.15, 124.23);
        context.bezierCurveTo(684.97, 127.36, 682.8, 130.08, 682.69, 133.28);
        context.bezierCurveTo(682.33, 138.49, 682.57, 143.72, 682.37, 148.95);
        context.bezierCurveTo(680.11, 150.01, 677.85, 151.09, 675.56, 152.08);
        context.bezierCurveTo(656.48, 156.57, 637.57, 161.8, 619, 168.07);
        context.bezierCurveTo(616.73, 167.97, 614.49, 167.83, 612.27, 167.67);
        context.bezierCurveTo(613.84, 160.03, 622.4, 157.31, 624.93, 150.21);
        context.bezierCurveTo(627.67, 140.87, 623.76, 131.27, 624.63, 121.89);
        context.bezierCurveTo(626.01, 115.95, 633.57, 118.13, 636.85, 114.11);
        context.bezierCurveTo(640.56, 110.49, 643.96, 106.28, 645.35, 101.19);
        context.bezierCurveTo(646.63, 96.6, 648.76, 92.31, 651.55, 88.45);
        context.closePath();
        context.fillStyle = fillColor4;
        context.fill();


    }

    function drawPath13() {
        context.beginPath();
        context.moveTo(575.84, 137.41);
        context.bezierCurveTo(577.04, 130.83, 580.8, 124.59, 586.65, 121.15);
        context.bezierCurveTo(591.19, 120.91, 596.97, 119.67, 600.39, 123.52);
        context.bezierCurveTo(602.87, 126.27, 606.16, 129.19, 605.91, 133.24);
        context.bezierCurveTo(605.88, 141.48, 599.85, 149.03, 592.25, 151.76);
        context.bezierCurveTo(588.61, 150.28, 584.81, 149.27, 580.99, 148.41);
        context.bezierCurveTo(579.12, 144.84, 576.39, 141.49, 575.84, 137.41);
        context.closePath();
        context.fillStyle = fillColor4;
        context.fill();


    }

    function drawPath14() {
        context.beginPath();
        context.moveTo(554.8, 158.59);
        context.bezierCurveTo(558.51, 155, 565.17, 155.56, 568.21, 159.77);
        context.bezierCurveTo(572.73, 165.07, 579.29, 167.77, 585.67, 170.13);
        context.bezierCurveTo(588.57, 171.31, 591.65, 170.11, 594.57, 169.64);
        context.bezierCurveTo(599.29, 168.51, 604.16, 168.39, 609, 168.33);
        context.bezierCurveTo(608.24, 169.67, 607.47, 171, 606.73, 172.33);
        context.bezierCurveTo(597.92, 175.47, 589.48, 179.53, 580.72, 182.81);
        context.bezierCurveTo(564.52, 189.64, 549.52, 198.83, 534.67, 208.15);
        context.bezierCurveTo(533.76, 208.08, 531.96, 207.93, 531.05, 207.87);
        context.bezierCurveTo(531.53, 198.48, 530.99, 188.75, 526.55, 180.27);
        context.bezierCurveTo(524.12, 176.55, 520.33, 173.91, 518.13, 170.03);
        context.bezierCurveTo(516.64, 167.28, 519.63, 164.61, 521.81, 163.37);
        context.bezierCurveTo(527.55, 161.63, 532.97, 165.52, 538.64, 165.41);
        context.bezierCurveTo(544.45, 164.47, 550.33, 162.57, 554.8, 158.59);
        context.closePath();
        context.fillStyle = fillColor4;
        context.fill();


    }

    function drawPath15() {
        context.beginPath();
        context.moveTo(708.32, 122.83);
        context.bezierCurveTo(713.13, 120.28, 719.05, 120.35, 724.01, 122.51);
        context.bezierCurveTo(729.36, 124.53, 732.43, 130.56, 732.29, 136.05);
        context.bezierCurveTo(732.17, 140.04, 728.15, 141.45, 725.07, 142.71);
        context.bezierCurveTo(721.8, 143.29, 718.53, 143.95, 715.27, 144.52);
        context.bezierCurveTo(711.85, 144.45, 708.44, 144.27, 705.03, 144.16);
        context.bezierCurveTo(703.12, 140.95, 700.09, 137.47, 701.55, 133.47);
        context.bezierCurveTo(702.69, 129.44, 704.07, 124.6, 708.32, 122.83);
        context.closePath();
        context.fillStyle = fillColor5;
        context.fill();


    }

    function drawPath16() {
        context.beginPath();
        context.moveTo(752.8, 139.36);
        context.bezierCurveTo(774.16, 136.12, 795.81, 136.04, 817.32, 134.67);
        context.bezierCurveTo(864.53, 132.44, 911.99, 135.89, 958.44, 144.59);
        context.bezierCurveTo(964.69, 146.05, 970.77, 148.29, 977.17, 149.08);
        context.bezierCurveTo(984.97, 150.07, 992.28, 153.15, 999.93, 154.84);
        context.bezierCurveTo(1014.6, 158.67, 1028.44, 164.95, 1042.93, 169.31);
        context.bezierCurveTo(1055, 174.8, 1067.29, 179.99, 1078.8, 186.57);
        context.bezierCurveTo(1083.65, 190.59, 1090.88, 193.2, 1092.77, 199.71);
        context.bezierCurveTo(1089.16, 202.31, 1085.76, 198.89, 1082.72, 197.12);
        context.bezierCurveTo(1073.93, 190.83, 1063.92, 186.67, 1054.16, 182.17);
        context.bezierCurveTo(1032.81, 173.99, 1011.76, 164.64, 989.43, 159.4);
        context.bezierCurveTo(977.6, 155.85, 965.51, 153.36, 953.48, 150.61);
        context.bezierCurveTo(925.6, 146.39, 897.6, 142.21, 869.36, 141.64);
        context.bezierCurveTo(846.23, 139.89, 823.07, 141.71, 799.93, 141.93);
        context.bezierCurveTo(776.21, 143.55, 752.55, 145.91, 729.01, 149.27);
        context.bezierCurveTo(728.92, 146.91, 728.84, 144.55, 728.77, 142.19);
        context.bezierCurveTo(736.76, 141.12, 744.84, 140.71, 752.8, 139.36);
        context.closePath();
        context.fillStyle = fillColor6;
        context.fill();


    }

    function drawPath17() {
        context.beginPath();
        context.moveTo(729.01, 149.27);
        context.bezierCurveTo(752.55, 145.91, 776.21, 143.55, 799.93, 141.93);
        context.bezierCurveTo(823.07, 141.71, 846.23, 139.89, 869.36, 141.64);
        context.bezierCurveTo(897.6, 142.21, 925.6, 146.39, 953.48, 150.61);
        context.bezierCurveTo(965.51, 153.36, 977.6, 155.85, 989.43, 159.4);
        context.bezierCurveTo(1011.76, 164.64, 1032.81, 173.99, 1054.16, 182.17);
        context.bezierCurveTo(1063.92, 186.67, 1073.93, 190.83, 1082.72, 197.12);
        context.bezierCurveTo(1085.76, 198.89, 1089.16, 202.31, 1092.77, 199.71);
        context.bezierCurveTo(1095.81, 198.51, 1098.89, 197.36, 1101.91, 196.04);
        context.bezierCurveTo(1118.77, 186.83, 1138.41, 184.64, 1157.32, 183.84);
        context.bezierCurveTo(1167.59, 183.15, 1177.77, 184.83, 1187.92, 186.15);
        context.bezierCurveTo(1197.76, 187.19, 1206.92, 191.23, 1216.55, 193.31);
        context.bezierCurveTo(1233.4, 199.95, 1249.79, 208.53, 1263.52, 220.49);
        context.bezierCurveTo(1270.88, 227.4, 1277.92, 234.76, 1283.65, 243.09);
        context.bezierCurveTo(1290.12, 251.88, 1294.33, 262.01, 1298.61, 271.97);
        context.bezierCurveTo(1305.45, 290.2, 1306.13, 310.03, 1305.92, 329.28);
        context.bezierCurveTo(1306, 336.28, 1303.67, 342.96, 1301.68, 349.57);
        context.bezierCurveTo(1297.59, 361.87, 1293.11, 374.08, 1286.91, 385.47);
        context.bezierCurveTo(1285.44, 387.97, 1284.69, 390.8, 1284.28, 393.64);
        context.bezierCurveTo(1286.55, 391.37, 1288.57, 388.85, 1290.21, 386.08);
        context.bezierCurveTo(1291.24, 387.01, 1292.28, 387.96, 1293.35, 388.89);
        context.bezierCurveTo(1295.17, 391.61, 1297.67, 394.72, 1295.68, 398.05);
        context.bezierCurveTo(1295.27, 399.92, 1295.28, 401.92, 1296.29, 403.61);
        context.bezierCurveTo(1298.92, 409.12, 1302.85, 413.83, 1306.47, 418.69);
        context.bezierCurveTo(1315.93, 432.33, 1324.32, 446.67, 1333.33, 460.6);
        context.lineTo(1333.33, 541.12);
        context.bezierCurveTo(1330.95, 539.13, 1328.76, 536.92, 1326.89, 534.45);
        context.bezierCurveTo(1322.51, 532.33, 1322.27, 527.43, 1321.59, 523.23);
        context.bezierCurveTo(1319.51, 521.55, 1316.67, 520.32, 1315.95, 517.52);
        context.bezierCurveTo(1314.15, 512.23, 1312.8, 506.8, 1310.61, 501.65);
        context.bezierCurveTo(1309.87, 502.24, 1309.13, 502.84, 1308.43, 503.44);
        context.bezierCurveTo(1308.23, 502.64, 1307.83, 501.03, 1307.63, 500.21);
        context.bezierCurveTo(1306.45, 500.13, 1304.12, 499.96, 1302.96, 499.88);
        context.bezierCurveTo(1295.07, 482.91, 1286.27, 466.36, 1277.05, 450.08);
        context.bezierCurveTo(1271.04, 439.56, 1264.85, 429.13, 1258.28, 418.96);
        context.bezierCurveTo(1249.81, 407.24, 1244.36, 393.6, 1234.93, 382.53);
        context.bezierCurveTo(1236.45, 377.87, 1241.53, 375.15, 1243.31, 370.48);
        context.bezierCurveTo(1245.8, 363.69, 1249.77, 357.55, 1252.03, 350.67);
        context.bezierCurveTo(1258.99, 331.05, 1260.57, 309.23, 1254.79, 289.12);
        context.bezierCurveTo(1248.92, 270.31, 1238.75, 252, 1222.72, 240.04);
        context.bezierCurveTo(1207.43, 228.28, 1188.52, 221.47, 1169.29, 220.28);
        context.bezierCurveTo(1160.95, 220.13, 1152.52, 219.11, 1144.23, 220.57);
        context.bezierCurveTo(1127.27, 222.92, 1110, 227.92, 1096.25, 238.47);
        context.bezierCurveTo(1092.09, 243.33, 1085.33, 242.15, 1079.81, 240.84);
        context.bezierCurveTo(1075.93, 239.81, 1072.41, 237.87, 1068.83, 236.16);
        context.bezierCurveTo(1003.19, 205.97, 930.37, 194.52, 858.57, 193.91);
        context.bezierCurveTo(847.51, 193.39, 836.45, 194.43, 825.4, 194.13);
        context.bezierCurveTo(818.95, 194.47, 812.52, 195.36, 806.04, 195.2);
        context.bezierCurveTo(806.25, 196.68, 806.47, 198.16, 806.68, 199.64);
        context.lineTo(805.36, 197.09);
        context.lineTo(804.04, 199.37);
        context.bezierCurveTo(804.4, 197.99, 804.76, 196.59, 805.03, 195.17);
        context.bezierCurveTo(800.53, 195.64, 796.07, 196.21, 791.56, 196.47);
        context.bezierCurveTo(793.55, 195.61, 795.49, 194.65, 797.44, 193.69);
        context.bezierCurveTo(794.97, 192.76, 792.37, 192.53, 789.85, 193.41);
        context.bezierCurveTo(786.01, 193.08, 782.2, 192.52, 778.39, 191.99);
        context.bezierCurveTo(778.48, 188.09, 780.84, 185.12, 783.55, 182.57);
        context.bezierCurveTo(782.84, 181.64, 782.13, 180.71, 781.44, 179.77);
        context.bezierCurveTo(784.83, 175.07, 789.99, 170.79, 789.47, 164.41);
        context.bezierCurveTo(782.29, 163.71, 774.91, 163.76, 768.03, 161.32);
        context.bezierCurveTo(760.61, 158.37, 752.16, 162.07, 745.01, 158.04);
        context.bezierCurveTo(737.37, 160.04, 731.05, 165.07, 723.65, 167.59);
        context.bezierCurveTo(716.72, 170.01, 710.79, 164.44, 704.09, 163.8);
        context.bezierCurveTo(699.72, 163.49, 696.57, 160.32, 693.37, 157.71);
        context.bezierCurveTo(692.49, 158.23, 691.63, 158.73, 690.77, 159.25);
        context.bezierCurveTo(682.15, 157.65, 674.44, 164.11, 665.91, 161.83);
        context.bezierCurveTo(686.64, 156.31, 707.8, 152.44, 729.01, 149.27);
        context.closePath();
        context.fillStyle = fillColor7;
        context.fill();


    }

    function drawPath18() {
        context.beginPath();
        context.moveTo(341.64, 205.56);
        context.bezierCurveTo(365.89, 187.45, 396.72, 179.85, 426.68, 180.6);
        context.bezierCurveTo(440.99, 180.64, 455.35, 182.59, 468.88, 187.32);
        context.bezierCurveTo(484.08, 191.17, 498.85, 197.08, 512.35, 205.09);
        context.bezierCurveTo(517.11, 207.95, 522.56, 209.85, 526.31, 214.15);
        context.bezierCurveTo(524.51, 215.84, 522.83, 217.65, 521.21, 219.52);
        context.bezierCurveTo(529.25, 216.55, 536.09, 211.28, 543.67, 207.39);
        context.bezierCurveTo(543.95, 208.08, 544.51, 209.48, 544.79, 210.17);
        context.bezierCurveTo(543.96, 210.51, 542.29, 211.19, 541.47, 211.52);
        context.bezierCurveTo(545.51, 213.81, 549.64, 215.95, 553.85, 217.96);
        context.bezierCurveTo(555.83, 223.17, 557.88, 228.36, 559.69, 233.63);
        context.bezierCurveTo(560.92, 234.15, 562.16, 234.67, 563.4, 235.19);
        context.bezierCurveTo(561.95, 240.37, 559.73, 245.35, 558.67, 250.64);
        context.bezierCurveTo(557.97, 253.51, 559.91, 256, 560.99, 258.47);
        context.bezierCurveTo(559.21, 259.31, 557.45, 260.16, 555.69, 260.99);
        context.bezierCurveTo(555.27, 261.44, 554.43, 262.35, 554, 262.8);
        context.bezierCurveTo(550.33, 263.47, 546.93, 265.01, 543.71, 266.83);
        context.bezierCurveTo(545.24, 264.37, 546.81, 261.95, 548.45, 259.57);
        context.bezierCurveTo(540.25, 254.15, 546.23, 242.91, 543.27, 235.37);
        context.bezierCurveTo(535.45, 227.77, 523.27, 228.35, 513.48, 231.05);
        context.bezierCurveTo(510.36, 231.95, 514.09, 235.05, 514.52, 236.92);
        context.bezierCurveTo(511.48, 239.49, 510.81, 243.29, 511.04, 247.08);
        context.bezierCurveTo(509.97, 245.51, 508.91, 243.96, 507.84, 242.41);
        context.bezierCurveTo(507.28, 243.29, 506.15, 245.07, 505.57, 245.96);
        context.bezierCurveTo(483.95, 231.16, 457.24, 222.97, 430.97, 225.71);
        context.bezierCurveTo(404.55, 227.55, 380.25, 240.71, 360.69, 257.99);
        context.bezierCurveTo(350.95, 267.63, 341.72, 278.15, 335.75, 290.59);
        context.bezierCurveTo(324.35, 311.11, 321.93, 335.71, 325.99, 358.57);
        context.bezierCurveTo(328.52, 378.07, 336.76, 396.89, 349.53, 411.83);
        context.bezierCurveTo(351.89, 414.71, 354.79, 417.13, 357.97, 419.07);
        context.bezierCurveTo(358.61, 419.43, 359.88, 420.16, 360.52, 420.53);
        context.bezierCurveTo(334.67, 459.87, 314.17, 502.57, 297.83, 546.68);
        context.bezierCurveTo(289.36, 569.85, 281.32, 593.28, 275.96, 617.39);
        context.bezierCurveTo(272.23, 632.36, 268.08, 647.48, 268.04, 663.01);
        context.bezierCurveTo(259.05, 644.49, 251.25, 625.31, 240.23, 607.85);
        context.bezierCurveTo(227.28, 586.08, 210.6, 565.05, 187.23, 554);
        context.bezierCurveTo(177.21, 549.36, 165.73, 547.31, 154.85, 549.53);
        context.bezierCurveTo(145.16, 552.97, 134.96, 555.24, 125.96, 560.39);
        context.bezierCurveTo(108.51, 568.92, 93.81, 582.37, 82.39, 597.96);
        context.bezierCurveTo(81.55, 597.39, 79.87, 596.21, 79.04, 595.63);
        context.bezierCurveTo(78.99, 594.37, 78.95, 593.13, 78.89, 591.89);
        context.bezierCurveTo(75, 585.31, 77.95, 577.73, 78.12, 570.68);
        context.bezierCurveTo(78.24, 564.88, 78.44, 559.08, 78.99, 553.31);
        context.bezierCurveTo(79.63, 547.28, 74.8, 542.08, 76.08, 536.05);
        context.bezierCurveTo(76.87, 531.08, 77.07, 526.01, 76.31, 521.03);
        context.bezierCurveTo(81.95, 517.63, 86.72, 513, 92.48, 509.8);
        context.bezierCurveTo(97.05, 507.28, 101.67, 504.84, 106.16, 502.19);
        context.bezierCurveTo(114.43, 502.11, 121.07, 495.71, 129.39, 496.24);
        context.bezierCurveTo(138.45, 496.21, 147.31, 498.83, 156.41, 498.49);
        context.bezierCurveTo(168.04, 501.27, 179.68, 504.8, 189.73, 511.44);
        context.bezierCurveTo(195.71, 515.53, 202.12, 519.29, 206.76, 524.97);
        context.bezierCurveTo(209.33, 529.63, 215.08, 527.49, 219.07, 526.23);
        context.lineTo(219.51, 525.4);
        context.bezierCurveTo(225.43, 512.36, 233.35, 500.36, 239.51, 487.43);
        context.bezierCurveTo(253.45, 463.03, 267.61, 438.71, 283.4, 415.43);
        context.bezierCurveTo(288.55, 407.77, 295.44, 401.21, 298.92, 392.52);
        context.bezierCurveTo(292.19, 387.8, 290.15, 379.41, 288.17, 371.93);
        context.bezierCurveTo(284.33, 354, 283.45, 335.52, 284.88, 317.27);
        context.bezierCurveTo(287.87, 291.6, 293.97, 265.29, 309.25, 243.96);
        context.bezierCurveTo(312.6, 239.03, 317.53, 235.49, 321.08, 230.75);
        context.bezierCurveTo(320.75, 230.33, 320.11, 229.51, 319.77, 229.08);
        context.bezierCurveTo(319.17, 228.37, 318.57, 227.65, 317.97, 226.95);
        context.bezierCurveTo(318.85, 225.91, 319.73, 224.85, 320.61, 223.8);
        context.bezierCurveTo(321.63, 223.69, 323.67, 223.48, 324.68, 223.37);
        context.bezierCurveTo(329.07, 216.35, 334.69, 210.13, 341.64, 205.56);
        context.closePath();
        context.fillStyle = fillColor7;
        context.fill();


    }

    function drawPath19() {
        context.beginPath();
        context.moveTo(1203.49, 976.01);
        context.bezierCurveTo(1211.45, 973.15, 1217.91, 967.27, 1224.87, 962.6);
        context.bezierCurveTo(1225.52, 962.68, 1226.81, 962.84, 1227.47, 962.92);
        context.bezierCurveTo(1225.4, 964.36, 1223.52, 966.04, 1221.81, 967.88);
        context.bezierCurveTo(1218.64, 968.75, 1216.27, 971.05, 1214.19, 973.49);
        context.bezierCurveTo(1213.29, 973.64, 1212.4, 973.8, 1211.53, 973.99);
        context.bezierCurveTo(1207.19, 978.12, 1199.97, 979.29, 1197.21, 984.76);
        context.bezierCurveTo(1194.73, 983.16, 1192.81, 986.67, 1190.47, 987.24);
        context.bezierCurveTo(1185.12, 988.85, 1181.13, 993.28, 1175.61, 994.41);
        context.bezierCurveTo(1169.01, 996.15, 1163.08, 999.93, 1156.2, 1000.72);
        context.bezierCurveTo(1155.71, 1000.51, 1154.71, 1000.08, 1154.21, 999.87);
        context.bezierCurveTo(1171.67, 994.63, 1187.87, 986.12, 1203.64, 977.17);
        context.bezierCurveTo(1203.61, 976.88, 1203.53, 976.31, 1203.49, 976.01);
        context.closePath();
        context.fillStyle = fillColor7;
        context.fill();

    }

    function drawPath20() {
        context.beginPath();
        context.moveTo(715.27, 144.52);
        context.bezierCurveTo(718.53, 143.95, 721.8, 143.29, 725.07, 142.71);
        context.bezierCurveTo(726, 142.57, 727.84, 142.32, 728.77, 142.19);
        context.bezierCurveTo(728.84, 144.55, 728.92, 146.91, 729.01, 149.27);
        context.bezierCurveTo(707.8, 152.44, 686.64, 156.31, 665.91, 161.83);
        context.bezierCurveTo(655.27, 163.91, 644.84, 166.97, 634.48, 170.15);
        context.bezierCurveTo(620.29, 174.29, 606.17, 178.85, 592.6, 184.69);
        context.bezierCurveTo(588.79, 186.24, 584.88, 187.49, 581.05, 189.03);
        context.bezierCurveTo(580.93, 186.95, 580.83, 184.88, 580.72, 182.81);
        context.bezierCurveTo(589.48, 179.53, 597.92, 175.47, 606.73, 172.33);
        context.bezierCurveTo(610.84, 171, 614.93, 169.57, 619, 168.07);
        context.bezierCurveTo(637.57, 161.8, 656.48, 156.57, 675.56, 152.08);
        context.bezierCurveTo(688.81, 149.63, 702.04, 147.11, 715.27, 144.52);
        context.closePath();
        context.fillStyle = fillColor8;
        context.fill();


    }

    function drawPath21() {
        context.beginPath();
        context.moveTo(690.77, 159.25);
        context.bezierCurveTo(691.63, 158.73, 692.49, 158.23, 693.37, 157.71);
        context.bezierCurveTo(696.57, 160.32, 699.72, 163.49, 704.09, 163.8);
        context.bezierCurveTo(710.79, 164.44, 716.72, 170.01, 723.65, 167.59);
        context.bezierCurveTo(731.05, 165.07, 737.37, 160.04, 745.01, 158.04);
        context.bezierCurveTo(752.16, 162.07, 760.61, 158.37, 768.03, 161.32);
        context.bezierCurveTo(774.91, 163.76, 782.29, 163.71, 789.47, 164.41);
        context.bezierCurveTo(789.99, 170.79, 784.83, 175.07, 781.44, 179.77);
        context.bezierCurveTo(782.13, 180.71, 782.84, 181.64, 783.55, 182.57);
        context.bezierCurveTo(780.84, 185.12, 778.48, 188.09, 778.39, 191.99);
        context.bezierCurveTo(782.2, 192.52, 786.01, 193.08, 789.85, 193.41);
        context.bezierCurveTo(792.37, 192.53, 794.97, 192.76, 797.44, 193.69);
        context.bezierCurveTo(795.49, 194.65, 793.55, 195.61, 791.56, 196.47);
        context.bezierCurveTo(757.24, 199.31, 723.21, 205.17, 689.68, 212.97);
        context.bezierCurveTo(689.28, 211.81, 688.89, 210.65, 688.51, 209.51);
        context.bezierCurveTo(686.35, 210.2, 684.19, 210.89, 682.01, 211.53);
        context.bezierCurveTo(684.67, 207.77, 689.08, 206.6, 693.41, 206);
        context.bezierCurveTo(691.19, 205.55, 688.97, 205.08, 686.76, 204.6);
        context.bezierCurveTo(690.27, 203.77, 693.79, 202.97, 697.31, 202.21);
        context.bezierCurveTo(698.2, 193.75, 693.43, 186.09, 693.07, 177.68);
        context.bezierCurveTo(687.99, 177.81, 681.71, 174.64, 677.55, 178.77);
        context.bezierCurveTo(672.15, 183.12, 666.29, 187.19, 662.32, 192.99);
        context.bezierCurveTo(661.08, 195.92, 661.11, 199.27, 659.59, 202.08);
        context.bezierCurveTo(656, 202.92, 652.16, 203.09, 648.6, 202.11);
        context.bezierCurveTo(646.23, 198.45, 645.19, 194.13, 642.93, 190.41);
        context.bezierCurveTo(641.2, 187.64, 638.44, 185.77, 635.97, 183.72);
        context.bezierCurveTo(636.28, 182, 636.6, 180.29, 636.93, 178.59);
        context.bezierCurveTo(636.51, 178.16, 635.67, 177.32, 635.24, 176.89);
        context.bezierCurveTo(636.37, 176.07, 637.39, 175.11, 638.53, 174.28);
        context.bezierCurveTo(635.81, 174.24, 633.08, 174.24, 630.36, 174.2);
        context.bezierCurveTo(631.71, 172.83, 633.05, 171.45, 634.48, 170.15);
        context.bezierCurveTo(644.84, 166.97, 655.27, 163.91, 665.91, 161.83);
        context.bezierCurveTo(674.44, 164.11, 682.15, 157.65, 690.77, 159.25);
        context.closePath();
        context.fillStyle = fillColor9;
        context.fill();


    }

    function drawPath22() {
        context.beginPath();
        context.moveTo(592.6, 184.69);
        context.bezierCurveTo(606.17, 178.85, 620.29, 174.29, 634.48, 170.15);
        context.bezierCurveTo(633.05, 171.45, 631.71, 172.83, 630.36, 174.2);
        context.bezierCurveTo(633.08, 174.24, 635.81, 174.24, 638.53, 174.28);
        context.bezierCurveTo(637.39, 175.11, 636.37, 176.07, 635.24, 176.89);
        context.bezierCurveTo(635.67, 177.32, 636.51, 178.16, 636.93, 178.59);
        context.bezierCurveTo(636.6, 180.29, 636.28, 182, 635.97, 183.72);
        context.bezierCurveTo(638.44, 185.77, 641.2, 187.64, 642.93, 190.41);
        context.bezierCurveTo(645.19, 194.13, 646.23, 198.45, 648.6, 202.11);
        context.bezierCurveTo(652.16, 203.09, 656, 202.92, 659.59, 202.08);
        context.bezierCurveTo(661.11, 199.27, 661.08, 195.92, 662.32, 192.99);
        context.bezierCurveTo(666.29, 187.19, 672.15, 183.12, 677.55, 178.77);
        context.bezierCurveTo(681.71, 174.64, 687.99, 177.81, 693.07, 177.68);
        context.bezierCurveTo(693.43, 186.09, 698.2, 193.75, 697.31, 202.21);
        context.bezierCurveTo(693.79, 202.97, 690.27, 203.77, 686.76, 204.6);
        context.bezierCurveTo(688.97, 205.08, 691.19, 205.55, 693.41, 206);
        context.bezierCurveTo(689.08, 206.6, 684.67, 207.77, 682.01, 211.53);
        context.bezierCurveTo(684.19, 210.89, 686.35, 210.2, 688.51, 209.51);
        context.bezierCurveTo(688.89, 210.65, 689.28, 211.81, 689.68, 212.97);
        context.bezierCurveTo(686.31, 213.8, 682.91, 214.47, 679.56, 215.36);
        context.bezierCurveTo(674.13, 212.16, 668.21, 216.84, 662.56, 214.79);
        context.bezierCurveTo(655.43, 212.6, 647.93, 213.36, 640.6, 213.63);
        context.bezierCurveTo(640.25, 215.68, 639.91, 217.73, 639.59, 219.79);
        context.bezierCurveTo(633.32, 219.85, 626.79, 221.03, 620.69, 219.23);
        context.bezierCurveTo(615.11, 215.89, 613.49, 208.73, 608.09, 205.07);
        context.bezierCurveTo(607.85, 199.51, 608.49, 193.88, 607.51, 188.39);
        context.bezierCurveTo(605.79, 185.45, 601.92, 185.16, 599.07, 183.91);
        context.bezierCurveTo(598.01, 184.77, 596.97, 185.65, 595.95, 186.52);
        context.bezierCurveTo(595.11, 186.07, 593.44, 185.15, 592.6, 184.69);
        context.closePath();
        context.fillStyle = fillColor10;
        context.fill();


    }

    function drawPath23() {
        context.beginPath();
        context.moveTo(184.64, 1114.19);
        context.bezierCurveTo(186.43, 1101.51, 185.33, 1088.61, 187.44, 1075.96);
        context.bezierCurveTo(189.79, 1080.75, 188.17, 1086.05, 188.67, 1091.12);
        context.bezierCurveTo(189.19, 1097.37, 189.24, 1103.68, 189.96, 1109.93);
        context.bezierCurveTo(192.09, 1107.63, 194.03, 1105.09, 196.56, 1103.2);
        context.bezierCurveTo(201.59, 1102.33, 207.4, 1103.51, 211, 1098.97);
        context.bezierCurveTo(216.69, 1100.24, 222.73, 1100.47, 227.79, 1097.11);
        context.bezierCurveTo(227.83, 1090.35, 227.51, 1083.51, 229.08, 1076.88);
        context.bezierCurveTo(228.43, 1140.56, 231.01, 1204.29, 237.8, 1267.63);
        context.bezierCurveTo(222.13, 1266.17, 206.37, 1267.29, 190.67, 1266.96);
        context.bezierCurveTo(187.59, 1267.08, 182.39, 1266.53, 181.96, 1270.77);
        context.bezierCurveTo(181.43, 1278.03, 182.43, 1285.36, 180.91, 1292.57);
        context.bezierCurveTo(180.44, 1284.12, 180.19, 1275.67, 180.47, 1267.21);
        context.bezierCurveTo(180.36, 1243.03, 180.61, 1218.84, 181.15, 1194.65);
        context.bezierCurveTo(182.09, 1177.79, 183.03, 1160.92, 183.49, 1144.03);
        context.bezierCurveTo(184.56, 1134.11, 184.55, 1124.15, 184.64, 1114.19);
        context.closePath();
        context.fillStyle = fillColor10;
        context.fill();


    }

    function drawPath24() {
        context.beginPath();
        context.moveTo(395.19, 176.75);
        context.bezierCurveTo(419.29, 172.07, 444.2, 175.11, 467.59, 181.95);
        context.bezierCurveTo(484.53, 186.81, 500.41, 194.63, 515.57, 203.55);
        context.bezierCurveTo(514.49, 204.05, 513.41, 204.57, 512.35, 205.09);
        context.bezierCurveTo(498.85, 197.08, 484.08, 191.17, 468.88, 187.32);
        context.bezierCurveTo(455.35, 182.59, 440.99, 180.64, 426.68, 180.6);
        context.bezierCurveTo(396.72, 179.85, 365.89, 187.45, 341.64, 205.56);
        context.bezierCurveTo(334.69, 210.13, 329.07, 216.35, 324.68, 223.37);
        context.bezierCurveTo(323.67, 223.48, 321.63, 223.69, 320.61, 223.8);
        context.bezierCurveTo(320.97, 221.21, 321.39, 218.52, 322.95, 216.33);
        context.bezierCurveTo(329.03, 207.39, 337.79, 200.79, 346.47, 194.53);
        context.bezierCurveTo(352.37, 190.81, 359.09, 188.64, 365.15, 185.17);
        context.bezierCurveTo(374.39, 180.01, 385.04, 179.03, 395.19, 176.75);
        context.closePath();
        context.fillStyle = fillColor11;
        context.fill();


    }

    function drawPath25() {
        context.beginPath();
        context.moveTo(1111.47, 186.24);
        context.bezierCurveTo(1122.83, 182.43, 1134.73, 180.37, 1146.63, 179.15);
        context.bezierCurveTo(1161.35, 178.65, 1176.29, 178.2, 1190.79, 181.39);
        context.bezierCurveTo(1205.44, 183.81, 1219.27, 189.55, 1232.87, 195.31);
        context.bezierCurveTo(1241.09, 198.45, 1248.17, 203.81, 1255.69, 208.28);
        context.bezierCurveTo(1264.44, 214.49, 1271.81, 222.45, 1279.08, 230.31);
        context.bezierCurveTo(1285.76, 237.32, 1289.96, 246.09, 1294.65, 254.45);
        context.bezierCurveTo(1300.03, 264.05, 1302.37, 274.91, 1305.53, 285.35);
        context.bezierCurveTo(1309.65, 299.68, 1308.12, 314.71, 1309.89, 329.35);
        context.bezierCurveTo(1310.63, 336.85, 1307.41, 343.89, 1305.95, 351.11);
        context.bezierCurveTo(1304.57, 357.68, 1301.2, 363.56, 1298.96, 369.84);
        context.bezierCurveTo(1296.85, 375.67, 1293.33, 380.79, 1290.21, 386.08);
        context.bezierCurveTo(1288.57, 388.85, 1286.55, 391.37, 1284.28, 393.64);
        context.bezierCurveTo(1284.69, 390.8, 1285.44, 387.97, 1286.91, 385.47);
        context.bezierCurveTo(1293.11, 374.08, 1297.59, 361.87, 1301.68, 349.57);
        context.bezierCurveTo(1303.67, 342.96, 1306, 336.28, 1305.92, 329.28);
        context.bezierCurveTo(1306.13, 310.03, 1305.45, 290.2, 1298.61, 271.97);
        context.bezierCurveTo(1294.33, 262.01, 1290.12, 251.88, 1283.65, 243.09);
        context.bezierCurveTo(1277.92, 234.76, 1270.88, 227.4, 1263.52, 220.49);
        context.bezierCurveTo(1249.79, 208.53, 1233.4, 199.95, 1216.55, 193.31);
        context.bezierCurveTo(1206.92, 191.23, 1197.76, 187.19, 1187.92, 186.15);
        context.bezierCurveTo(1177.77, 184.83, 1167.59, 183.15, 1157.32, 183.84);
        context.bezierCurveTo(1138.41, 184.64, 1118.77, 186.83, 1101.91, 196.04);
        context.bezierCurveTo(1100.48, 195.6, 1099.09, 195.12, 1097.73, 194.63);
        context.bezierCurveTo(1100.95, 190.11, 1106.59, 188.37, 1111.47, 186.24);
        context.closePath();
        context.fillStyle = fillColor12;
        context.fill();


    }

    function drawPath26() {
        context.beginPath();
        context.moveTo(534.67, 208.15);
        context.bezierCurveTo(549.52, 198.83, 564.52, 189.64, 580.72, 182.81);
        context.bezierCurveTo(580.83, 184.88, 580.93, 186.95, 581.05, 189.03);
        context.bezierCurveTo(568.29, 194.49, 556.12, 201.24, 543.67, 207.39);
        context.bezierCurveTo(536.09, 211.28, 529.25, 216.55, 521.21, 219.52);
        context.bezierCurveTo(522.83, 217.65, 524.51, 215.84, 526.31, 214.15);
        context.bezierCurveTo(529, 212.01, 531.81, 210.05, 534.67, 208.15);
        context.closePath();
        context.fillStyle = fillColor13;
        context.fill();


    }

    function drawPath27() {
        context.beginPath();
        context.moveTo(595.95, 186.52);
        context.bezierCurveTo(596.97, 185.65, 598.01, 184.77, 599.07, 183.91);
        context.bezierCurveTo(601.92, 185.16, 605.79, 185.45, 607.51, 188.39);
        context.bezierCurveTo(608.49, 193.88, 607.85, 199.51, 608.09, 205.07);
        context.bezierCurveTo(613.49, 208.73, 615.11, 215.89, 620.69, 219.23);
        context.bezierCurveTo(626.79, 221.03, 633.32, 219.85, 639.59, 219.79);
        context.bezierCurveTo(639.91, 217.73, 640.25, 215.68, 640.6, 213.63);
        context.bezierCurveTo(647.93, 213.36, 655.43, 212.6, 662.56, 214.79);
        context.bezierCurveTo(668.21, 216.84, 674.13, 212.16, 679.56, 215.36);
        context.bezierCurveTo(668.97, 218.97, 657.91, 220.93, 647.39, 224.76);
        context.bezierCurveTo(630.09, 230.04, 613.15, 236.37, 596.25, 242.8);
        context.bezierCurveTo(584.64, 248.36, 572.64, 253, 560.99, 258.47);
        context.bezierCurveTo(559.91, 256, 557.97, 253.51, 558.67, 250.64);
        context.bezierCurveTo(559.73, 245.35, 561.95, 240.37, 563.4, 235.19);
        context.bezierCurveTo(562.16, 234.67, 560.92, 234.15, 559.69, 233.63);
        context.bezierCurveTo(557.88, 228.36, 555.83, 223.17, 553.85, 217.96);
        context.bezierCurveTo(549.64, 215.95, 545.51, 213.81, 541.47, 211.52);
        context.bezierCurveTo(542.29, 211.19, 543.96, 210.51, 544.79, 210.17);
        context.bezierCurveTo(544.51, 209.48, 543.95, 208.08, 543.67, 207.39);
        context.bezierCurveTo(556.12, 201.24, 568.29, 194.49, 581.05, 189.03);
        context.bezierCurveTo(584.88, 187.49, 588.79, 186.24, 592.6, 184.69);
        context.bezierCurveTo(593.44, 185.15, 595.11, 186.07, 595.95, 186.52);
        context.closePath();
        context.fillStyle = fillColor14;
        context.fill();


    }

    function drawPath28() {
        context.beginPath();
        context.moveTo(806.04, 195.2);
        context.bezierCurveTo(812.52, 195.36, 818.95, 194.47, 825.4, 194.13);
        context.bezierCurveTo(836.45, 194.43, 847.51, 193.39, 858.57, 193.91);
        context.bezierCurveTo(930.37, 194.52, 1003.19, 205.97, 1068.83, 236.16);
        context.bezierCurveTo(1072.41, 237.87, 1075.93, 239.81, 1079.81, 240.84);
        context.bezierCurveTo(1085.33, 242.15, 1092.09, 243.33, 1096.25, 238.47);
        context.bezierCurveTo(1098.63, 239.49, 1101.03, 240.52, 1103.43, 241.56);
        context.bezierCurveTo(1100.21, 243.91, 1097.23, 246.52, 1094.23, 249.12);
        context.bezierCurveTo(1093.69, 251.17, 1094.96, 254.44, 1092.24, 255.25);
        context.bezierCurveTo(1084.61, 252.81, 1077.73, 248.43, 1070, 246.21);
        context.bezierCurveTo(1061.97, 240.75, 1052.8, 237.52, 1043.85, 233.97);
        context.bezierCurveTo(1028.55, 228.09, 1012.88, 223.28, 997.44, 217.8);
        context.bezierCurveTo(993.04, 216.29, 988.61, 214.81, 984.05, 213.87);
        context.bezierCurveTo(931.99, 202.92, 878.49, 198.61, 825.36, 201.28);
        context.bezierCurveTo(825.68, 200.75, 826.33, 199.69, 826.65, 199.17);
        context.bezierCurveTo(825.28, 200.67, 823.51, 201.69, 821.43, 201.52);
        context.bezierCurveTo(798.68, 202.27, 776.09, 205.33, 753.52, 208.13);
        context.bezierCurveTo(731.56, 211.8, 709.49, 215.17, 687.99, 221.04);
        context.bezierCurveTo(643.63, 231.73, 600.2, 246.45, 558.85, 265.75);
        context.bezierCurveTo(543.37, 273.27, 528.45, 281.95, 512.39, 288.21);
        context.bezierCurveTo(511.89, 286.73, 511.4, 285.27, 510.92, 283.79);
        context.bezierCurveTo(514.07, 283.53, 516.77, 281.81, 519.44, 280.27);
        context.bezierCurveTo(518.81, 273.93, 518.63, 266.97, 514.45, 261.76);
        context.bezierCurveTo(515.71, 261.85, 516.97, 261.95, 518.24, 262.05);
        context.bezierCurveTo(518.97, 261.47, 520.45, 260.28, 521.19, 259.69);
        context.bezierCurveTo(524.87, 263.73, 528.43, 267.93, 531.07, 272.75);
        context.bezierCurveTo(535.49, 271.25, 539.67, 269.16, 543.71, 266.83);
        context.bezierCurveTo(546.93, 265.01, 550.33, 263.47, 554, 262.8);
        context.bezierCurveTo(554.43, 262.35, 555.27, 261.44, 555.69, 260.99);
        context.bezierCurveTo(557.45, 260.16, 559.21, 259.31, 560.99, 258.47);
        context.bezierCurveTo(572.64, 253, 584.64, 248.36, 596.25, 242.8);
        context.bezierCurveTo(613.15, 236.37, 630.09, 230.04, 647.39, 224.76);
        context.bezierCurveTo(657.91, 220.93, 668.97, 218.97, 679.56, 215.36);
        context.bezierCurveTo(682.91, 214.47, 686.31, 213.8, 689.68, 212.97);
        context.bezierCurveTo(723.21, 205.17, 757.24, 199.31, 791.56, 196.47);
        context.bezierCurveTo(796.07, 196.21, 800.53, 195.64, 805.03, 195.17);
        context.bezierCurveTo(804.76, 196.59, 804.4, 197.99, 804.04, 199.37);
        context.lineTo(805.36, 197.09);
        context.lineTo(806.68, 199.64);
        context.bezierCurveTo(806.47, 198.16, 806.25, 196.68, 806.04, 195.2);
        context.closePath();
        context.fillStyle = fillColor15;
        context.fill();


    }

    function drawPath29() {
        context.beginPath();
        context.moveTo(1144.23, 220.57);
        context.bezierCurveTo(1152.52, 219.11, 1160.95, 220.13, 1169.29, 220.28);
        context.bezierCurveTo(1188.52, 221.47, 1207.43, 228.28, 1222.72, 240.04);
        context.bezierCurveTo(1238.75, 252, 1248.92, 270.31, 1254.79, 289.12);
        context.bezierCurveTo(1260.57, 309.23, 1258.99, 331.05, 1252.03, 350.67);
        context.bezierCurveTo(1249.77, 357.55, 1245.8, 363.69, 1243.31, 370.48);
        context.bezierCurveTo(1241.53, 375.15, 1236.45, 377.87, 1234.93, 382.53);
        context.bezierCurveTo(1244.36, 393.6, 1249.81, 407.24, 1258.28, 418.96);
        context.bezierCurveTo(1264.85, 429.13, 1271.04, 439.56, 1277.05, 450.08);
        context.bezierCurveTo(1274.73, 449.56, 1272.44, 449.05, 1270.15, 448.53);
        context.bezierCurveTo(1267.55, 443.48, 1264.56, 438.64, 1261.49, 433.88);
        context.bezierCurveTo(1248.33, 411.93, 1233.92, 390.69, 1217.77, 370.85);
        context.bezierCurveTo(1204.55, 355.08, 1189.71, 340.79, 1174.47, 327);
        context.bezierCurveTo(1169.97, 323.31, 1165.76, 319.28, 1161.83, 315.01);
        context.bezierCurveTo(1170.4, 315.97, 1176.09, 323.51, 1182.83, 328.16);
        context.bezierCurveTo(1184.44, 329.51, 1186.07, 330.84, 1187.69, 332.21);
        context.bezierCurveTo(1203.36, 346.92, 1219.23, 361.68, 1232.11, 378.97);
        context.bezierCurveTo(1236.83, 374.83, 1241.88, 369.84, 1242.15, 363.15);
        context.bezierCurveTo(1247.75, 352.24, 1250, 340.07, 1251.79, 328.05);
        context.bezierCurveTo(1253.35, 316.39, 1252.72, 304.48, 1250.44, 292.95);
        context.bezierCurveTo(1248.15, 276.85, 1239.85, 261.87, 1227.71, 251.11);
        context.bezierCurveTo(1213, 237.17, 1193.52, 228.88, 1173.47, 226.72);
        context.bezierCurveTo(1149.41, 223.79, 1123.96, 228.33, 1103.43, 241.56);
        context.bezierCurveTo(1101.03, 240.52, 1098.63, 239.49, 1096.25, 238.47);
        context.bezierCurveTo(1110, 227.92, 1127.27, 222.92, 1144.23, 220.57);
        context.closePath();
        context.fillStyle = fillColor16;
        context.fill();


    }

    function drawPath30() {
        context.beginPath();
        context.moveTo(430.97, 225.71);
        context.bezierCurveTo(457.24, 222.97, 483.95, 231.16, 505.57, 245.96);
        context.bezierCurveTo(511.33, 249.85, 516.52, 254.55, 521.19, 259.69);
        context.bezierCurveTo(520.45, 260.28, 518.97, 261.47, 518.24, 262.05);
        context.bezierCurveTo(516.97, 261.95, 515.71, 261.85, 514.45, 261.76);
        context.bezierCurveTo(505.31, 251.48, 492.73, 245.25, 480.28, 239.95);
        context.bezierCurveTo(464.79, 233.39, 447.69, 231.61, 431, 232.25);
        context.bezierCurveTo(437.31, 227.04, 445.21, 231.4, 452.4, 230.03);
        context.bezierCurveTo(445.84, 225.15, 437.19, 231.07, 430.97, 225.71);
        context.closePath();
        context.fillStyle = fillColor17;
        context.fill();


    }

    function drawPath31() {
        context.beginPath();
        context.moveTo(1103.43, 241.56);
        context.bezierCurveTo(1123.96, 228.33, 1149.41, 223.79, 1173.47, 226.72);
        context.bezierCurveTo(1193.52, 228.88, 1213, 237.17, 1227.71, 251.11);
        context.bezierCurveTo(1214.69, 250.52, 1203.01, 243.55, 1190.13, 242.35);
        context.bezierCurveTo(1179.61, 240.92, 1169.16, 243.25, 1158.63, 243.11);
        context.bezierCurveTo(1147.31, 243.64, 1136.07, 245.69, 1125.39, 249.51);
        context.bezierCurveTo(1115.59, 251.84, 1107.23, 257.63, 1098.85, 262.95);
        context.bezierCurveTo(1098.95, 263.68, 1099.15, 265.13, 1099.25, 265.87);
        context.bezierCurveTo(1089.61, 259.15, 1079.11, 253.64, 1070, 246.21);
        context.bezierCurveTo(1077.73, 248.43, 1084.61, 252.81, 1092.24, 255.25);
        context.bezierCurveTo(1094.96, 254.44, 1093.69, 251.17, 1094.23, 249.12);
        context.bezierCurveTo(1097.23, 246.52, 1100.21, 243.91, 1103.43, 241.56);
        context.closePath();
        context.fillStyle = fillColor18;
        context.fill();


    }

    function drawPath32() {
        context.beginPath();
        context.moveTo(360.69, 257.99);
        context.bezierCurveTo(380.25, 240.71, 404.55, 227.55, 430.97, 225.71);
        context.bezierCurveTo(437.19, 231.07, 445.84, 225.15, 452.4, 230.03);
        context.bezierCurveTo(445.21, 231.4, 437.31, 227.04, 431, 232.25);
        context.bezierCurveTo(432.51, 235.4, 435.37, 237.44, 438.6, 238.56);
        context.bezierCurveTo(459.84, 246.77, 480.08, 258.11, 496.92, 273.56);
        context.bezierCurveTo(501.23, 277.43, 505.95, 280.83, 510.92, 283.79);
        context.bezierCurveTo(511.4, 285.27, 511.89, 286.73, 512.39, 288.21);
        context.bezierCurveTo(496.6, 293.69, 484.25, 305.21, 471.15, 315.07);
        context.bezierCurveTo(457.19, 326.33, 443.41, 337.87, 430.59, 350.43);
        context.bezierCurveTo(416.45, 363.07, 404.44, 377.77, 391.4, 391.49);
        context.bezierCurveTo(384.67, 399.69, 378.15, 408.12, 372.49, 417.12);
        context.bezierCurveTo(371.08, 419.15, 369.6, 421.12, 368.19, 423.15);
        context.bezierCurveTo(366.45, 420.25, 364.76, 417.29, 362.41, 414.85);
        context.bezierCurveTo(360.83, 416.15, 359.41, 417.63, 357.97, 419.07);
        context.bezierCurveTo(354.79, 417.13, 351.89, 414.71, 349.53, 411.83);
        context.bezierCurveTo(336.76, 396.89, 328.52, 378.07, 325.99, 358.57);
        context.bezierCurveTo(321.93, 335.71, 324.35, 311.11, 335.75, 290.59);
        context.bezierCurveTo(341.72, 278.15, 350.95, 267.63, 360.69, 257.99);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();


    }

    function drawPath33() {
        context.beginPath();
        context.moveTo(1074.71, 456.48);
        context.bezierCurveTo(1080.52, 455, 1086.07, 452.51, 1091.97, 451.37);
        context.bezierCurveTo(1102.67, 450.32, 1113.43, 450.93, 1124.04, 452.44);
        context.bezierCurveTo(1154.48, 453.95, 1182.93, 468.96, 1204.07, 490.47);
        context.bezierCurveTo(1222.56, 507.92, 1238.4, 528.68, 1247.83, 552.45);
        context.bezierCurveTo(1249.67, 552.35, 1250.77, 554.16, 1249.13, 555.43);
        context.bezierCurveTo(1251.83, 563.44, 1253.52, 571.69, 1255.47, 579.91);
        context.bezierCurveTo(1258.83, 579.84, 1264.01, 584.21, 1260.35, 587.09);
        context.bezierCurveTo(1248.31, 583.87, 1235.56, 586.15, 1223.97, 590.09);
        context.bezierCurveTo(1215.47, 592.75, 1206.96, 595.71, 1199.2, 600.12);
        context.bezierCurveTo(1198.05, 600.45, 1196.89, 600.68, 1195.73, 600.8);
        context.bezierCurveTo(1196.48, 600.59, 1197.97, 600.16, 1198.72, 599.95);
        context.bezierCurveTo(1202.01, 593.83, 1203.99, 586.73, 1202.43, 579.8);
        context.bezierCurveTo(1201.31, 558.87, 1195.2, 536.72, 1179.55, 521.89);
        context.bezierCurveTo(1165.67, 507.83, 1145.99, 500.93, 1126.63, 499.35);
        context.bezierCurveTo(1111.56, 497.89, 1097.16, 503.91, 1084.17, 510.91);
        context.bezierCurveTo(1070.44, 516.45, 1062.24, 529.51, 1054.13, 541.12);
        context.bezierCurveTo(1052.69, 546.19, 1050.15, 550.83, 1048.57, 555.83);
        context.bezierCurveTo(1045.61, 567.11, 1044.76, 578.95, 1046.15, 590.53);
        context.bezierCurveTo(1046.77, 596.13, 1048.52, 601.55, 1049.23, 607.15);
        context.bezierCurveTo(1049.57, 607.61, 1050.25, 608.55, 1050.6, 609.01);
        context.bezierCurveTo(1054.37, 619.85, 1060.27, 630.08, 1068.53, 638.12);
        context.bezierCurveTo(1075.41, 644.99, 1082.55, 652.56, 1092.23, 655.24);
        context.bezierCurveTo(1098.76, 657.07, 1105.31, 659.19, 1112.11, 659.81);
        context.bezierCurveTo(1115.23, 658.41, 1117.03, 655.07, 1119.49, 652.77);
        context.bezierCurveTo(1122.31, 652.97, 1125.11, 653.13, 1127.95, 653.2);
        context.bezierCurveTo(1112.84, 669.33, 1099.65, 687.23, 1088.31, 706.2);
        context.bezierCurveTo(1087.33, 707.75, 1086.55, 709.51, 1087.13, 711.36);
        context.bezierCurveTo(1086.39, 711.61, 1084.91, 712.12, 1084.16, 712.37);
        context.bezierCurveTo(1082.6, 711.19, 1081.04, 710.03, 1079.47, 708.92);
        context.bezierCurveTo(1071.67, 704.4, 1064.28, 699.2, 1057.77, 692.95);
        context.bezierCurveTo(1053.76, 689.12, 1049.92, 685.13, 1046.13, 681.09);
        context.bezierCurveTo(1024.71, 657.23, 1008.13, 628.07, 1003.27, 596.07);
        context.bezierCurveTo(1000.76, 578.41, 1000.68, 560.24, 1004.25, 542.71);
        context.bezierCurveTo(1008.69, 520.48, 1019.29, 499.39, 1035.28, 483.23);
        context.bezierCurveTo(1047.28, 472.81, 1059.25, 461.45, 1074.71, 456.48);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();
        


    }

    function drawPath34() {
        context.beginPath();
        context.moveTo(654.64, 469.01);
        context.bezierCurveTo(664.91, 467.32, 674.83, 463.61, 685.31, 463.13);
        context.bezierCurveTo(695.93, 462.67, 706.85, 462.15, 717.23, 465.03);
        context.bezierCurveTo(726.53, 467.8, 736.17, 469.49, 745.11, 473.48);
        context.bezierCurveTo(763.69, 480.61, 780.09, 493.32, 791.08, 509.97);
        context.bezierCurveTo(793.85, 514.24, 794.53, 519.65, 798.17, 523.39);
        context.bezierCurveTo(802.77, 530.25, 804.04, 538.63, 805.83, 546.55);
        context.bezierCurveTo(809.03, 559.68, 807.45, 573.31, 806.96, 586.65);
        context.bezierCurveTo(804.6, 606.35, 800.67, 625.93, 794.28, 644.73);
        context.bezierCurveTo(786.84, 667.35, 775.87, 688.63, 763.63, 708.99);
        context.bezierCurveTo(748.71, 732.77, 730.84, 754.8, 709.8, 773.41);
        context.bezierCurveTo(697.75, 783.68, 684.87, 793.27, 670.44, 799.95);
        context.bezierCurveTo(641.29, 816.84, 606.49, 821.91, 573.28, 818.77);
        context.bezierCurveTo(560.71, 816.67, 547.72, 814.97, 536.2, 809.23);
        context.bezierCurveTo(522.41, 804.88, 509.95, 796.48, 499.65, 786.41);
        context.bezierCurveTo(484.61, 771.51, 473.53, 752.55, 467.75, 732.17);
        context.bezierCurveTo(461.25, 709.97, 463.07, 686.11, 468.53, 663.89);
        context.bezierCurveTo(472.8, 645.97, 482.12, 629.88, 489.48, 613.21);
        context.bezierCurveTo(489.27, 612.84, 488.84, 612.11, 488.63, 611.73);
        context.lineTo(489.01, 609.12);
        context.bezierCurveTo(489.41, 610.15, 490.15, 610.68, 491.21, 610.72);
        context.bezierCurveTo(494.39, 604.43, 497.88, 598.24, 501.65, 592.28);
        context.bezierCurveTo(506.09, 583.64, 512.44, 576.21, 517.91, 568.24);
        context.bezierCurveTo(526.56, 556.35, 535.79, 544.76, 546.69, 534.84);
        context.bezierCurveTo(548.55, 531.85, 550.91, 529.24, 553.57, 526.96);
        context.bezierCurveTo(557.31, 523.12, 561.28, 519.55, 565.39, 516.12);
        context.bezierCurveTo(578.84, 503.85, 593.89, 493.47, 609.57, 484.25);
        context.bezierCurveTo(624.81, 476.53, 640.44, 468.53, 657.44, 465.59);
        context.bezierCurveTo(659.73, 464.71, 662.19, 464.35, 664.65, 464.28);
        context.bezierCurveTo(663.04, 468.24, 657.96, 467.47, 654.64, 469.01);
        context.closePath();
        context.moveTo(661.13, 515.73);
        context.bezierCurveTo(652.21, 517.6, 644.72, 523.32, 635.76, 525.04);
        context.bezierCurveTo(628.8, 528.97, 621.71, 532.76, 615.57, 537.95);
        context.bezierCurveTo(606.35, 546.8, 599.35, 557.72, 594.05, 569.31);
        context.bezierCurveTo(591.28, 576.16, 589.6, 583.35, 587.71, 590.47);
        context.bezierCurveTo(586.81, 599.89, 586.41, 609.48, 587.85, 618.88);
        context.bezierCurveTo(591.28, 640.08, 602.25, 659.57, 617.09, 674.89);
        context.bezierCurveTo(626.36, 681.85, 636.99, 686.8, 647.83, 690.77);
        context.bezierCurveTo(657.96, 693.56, 668.04, 697.47, 678.73, 697.08);
        context.bezierCurveTo(700.32, 697.63, 720.72, 688.65, 738.48, 677.09);
        context.bezierCurveTo(743.8, 673.57, 747.41, 668.28, 750.81, 663.03);
        context.bezierCurveTo(751.35, 663.17, 752.39, 663.47, 752.92, 663.61);
        context.bezierCurveTo(752.6, 663.25, 751.97, 662.55, 751.67, 662.2);
        context.bezierCurveTo(759.39, 651.15, 765.15, 638.65, 768.28, 625.53);
        context.bezierCurveTo(770.11, 622.43, 773.32, 619.31, 772.44, 615.4);
        context.bezierCurveTo(770.59, 605.81, 772.99, 595.71, 769.35, 586.4);
        context.bezierCurveTo(765.05, 566.95, 755.68, 547.49, 739.24, 535.53);
        context.bezierCurveTo(717.84, 518.03, 688.43, 508.83, 661.13, 515.73);
        context.closePath();
        context.moveTo(689.52, 781.45);
        context.bezierCurveTo(688.79, 783.59, 689.52, 784.35, 691.71, 783.72);
        context.bezierCurveTo(692.44, 781.56, 691.71, 780.8, 689.52, 781.45);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();


    }

    function drawPath35() {
        context.beginPath();
        context.moveTo(154.85, 549.53);
        context.bezierCurveTo(165.73, 547.31, 177.21, 549.36, 187.23, 554);
        context.bezierCurveTo(185.27, 555.45, 183.29, 556.92, 181.33, 558.37);
        context.bezierCurveTo(181.47, 560.27, 181.61, 562.17, 181.77, 564.07);
        context.bezierCurveTo(182.41, 563.44, 183.69, 562.19, 184.33, 561.56);
        context.bezierCurveTo(199.21, 574.16, 211.37, 589.65, 221.83, 606.05);
        context.bezierCurveTo(239.48, 633.87, 253.8, 663.69, 265.43, 694.49);
        context.bezierCurveTo(274.27, 716.19, 281.21, 738.71, 291.87, 759.64);
        context.bezierCurveTo(294.21, 757.81, 296.67, 756.12, 299.17, 754.55);
        context.bezierCurveTo(299.43, 752.47, 299.69, 750.39, 299.91, 748.31);
        context.bezierCurveTo(301.28, 754.08, 302.83, 759.81, 303.77, 765.67);
        context.bezierCurveTo(304.51, 765.88, 305.96, 766.31, 306.69, 766.52);
        context.bezierCurveTo(306.07, 767.84, 305.45, 769.19, 304.84, 770.53);
        context.bezierCurveTo(308.07, 785.89, 311.13, 801.63, 309.63, 817.4);
        context.bezierCurveTo(309.76, 829.6, 309.48, 841.89, 307.32, 853.95);
        context.bezierCurveTo(306.57, 854.01, 305.09, 854.15, 304.36, 854.21);
        context.bezierCurveTo(305.08, 854.55, 306.52, 855.19, 307.25, 855.52);
        context.bezierCurveTo(305.39, 861.64, 304.39, 867.96, 302.72, 874.13);
        context.bezierCurveTo(298.4, 888.2, 292.51, 901.71, 285.53, 914.67);
        context.bezierCurveTo(279.67, 924.57, 273.55, 934.57, 265.13, 942.56);
        context.bezierCurveTo(257.63, 949.11, 250.31, 956.13, 241.41, 960.81);
        context.bezierCurveTo(240.89, 960.65, 239.84, 960.33, 239.32, 960.17);
        context.bezierCurveTo(239.35, 960.76, 239.37, 961.93, 239.4, 962.52);
        context.bezierCurveTo(239.19, 962.95, 238.76, 963.79, 238.56, 964.21);
        context.bezierCurveTo(239.17, 972.88, 236.89, 981.55, 238.31, 990.24);
        context.bezierCurveTo(237.24, 990.72, 236.17, 991.23, 235.11, 991.73);
        context.bezierCurveTo(234.19, 982.51, 236.52, 972.96, 233.89, 963.97);
        context.bezierCurveTo(229.97, 954.56, 225.49, 945.03, 218, 937.89);
        context.bezierCurveTo(207.2, 926.6, 193.47, 918.83, 181.11, 909.43);
        context.bezierCurveTo(175.77, 905.4, 170.47, 901.32, 165.23, 897.17);
        context.bezierCurveTo(132.4, 867.43, 104.71, 831.88, 84.8, 792.25);
        context.bezierCurveTo(83.57, 789.72, 82.21, 787.27, 80.73, 784.88);
        context.bezierCurveTo(81.35, 783.76, 81.97, 782.64, 82.59, 781.53);
        context.bezierCurveTo(82.05, 782.13, 80.96, 783.35, 80.43, 783.95);
        context.bezierCurveTo(79.17, 780.99, 77.8, 778.11, 76.47, 775.2);
        context.bezierCurveTo(68.44, 756.21, 61.68, 736.56, 58.61, 716.11);
        context.bezierCurveTo(50.99, 675.77, 57.2, 631.28, 82.39, 597.96);
        context.bezierCurveTo(93.81, 582.37, 108.51, 568.92, 125.96, 560.39);
        context.bezierCurveTo(134.96, 555.24, 145.16, 552.97, 154.85, 549.53);
        context.closePath();
        context.moveTo(150.03, 603.17);
        context.bezierCurveTo(150.01, 603.56, 150, 604.36, 149.99, 604.76);
        context.bezierCurveTo(145.6, 605.39, 141.88, 608.15, 140.12, 612.23);
        context.bezierCurveTo(137.63, 618.11, 132.6, 622.75, 131.45, 629.2);
        context.bezierCurveTo(130.35, 632.85, 130.33, 637.03, 128.19, 640.27);
        context.bezierCurveTo(120.27, 641.97, 111.75, 641.52, 103.89, 643.87);
        context.bezierCurveTo(97.19, 647.92, 89.57, 651.56, 85.53, 658.67);
        context.bezierCurveTo(85.63, 659.21, 85.83, 660.32, 85.92, 660.87);
        context.bezierCurveTo(85.15, 661.13, 83.61, 661.65, 82.85, 661.92);
        context.bezierCurveTo(82.25, 668.25, 82.16, 674.64, 82.65, 681);
        context.bezierCurveTo(84.41, 683.07, 85.52, 685.53, 86.41, 688.09);
        context.bezierCurveTo(91.95, 691.96, 96.51, 697.33, 102.93, 699.79);
        context.bezierCurveTo(108.73, 702.04, 114.88, 703.21, 120.81, 705.07);
        context.bezierCurveTo(130.01, 708.07, 139.8, 706.71, 149.29, 706.87);
        context.bezierCurveTo(157.61, 705.51, 165.72, 702.96, 173.64, 700.08);
        context.bezierCurveTo(177.4, 698.8, 178.75, 694.61, 181.33, 691.96);
        context.bezierCurveTo(183.37, 689.45, 187.08, 687.91, 187.27, 684.28);
        context.bezierCurveTo(187.71, 680.79, 189.24, 677.65, 190.8, 674.56);
        context.bezierCurveTo(191.77, 670.05, 189.4, 665.53, 190.35, 661);
        context.bezierCurveTo(191.56, 655.32, 191.04, 649.47, 189.21, 644);
        context.bezierCurveTo(187.48, 639.48, 189.91, 634.44, 187.71, 630.04);
        context.bezierCurveTo(185.13, 623.73, 182.52, 617.44, 179.48, 611.35);
        context.bezierCurveTo(178.05, 608.03, 174.28, 607.2, 171.28, 605.92);
        context.bezierCurveTo(170.97, 605.2, 170.37, 603.76, 170.08, 603.04);
        context.bezierCurveTo(163.59, 600.24, 156.64, 601.85, 150.03, 603.17);
        context.closePath();
        context.moveTo(60.49, 705.51);
        context.bezierCurveTo(59.67, 707.67, 60.33, 708.45, 62.51, 707.85);
        context.bezierCurveTo(63.33, 705.67, 62.65, 704.88, 60.49, 705.51);
        context.closePath();
        context.moveTo(297.55, 762.04);
        context.bezierCurveTo(296.48, 762, 294.37, 761.89, 293.31, 761.85);
        context.bezierCurveTo(294.01, 763.84, 294.72, 765.83, 295.44, 767.83);
        context.bezierCurveTo(296.81, 767.33, 298.19, 766.83, 299.57, 766.35);
        context.bezierCurveTo(299.51, 764.35, 299.45, 762.35, 299.41, 760.36);
        context.bezierCurveTo(298.95, 760.79, 298.01, 761.63, 297.55, 762.04);
        context.closePath();
        context.moveTo(143.04, 870.93);
        context.bezierCurveTo(142.31, 873.13, 143, 873.88, 145.16, 873.16);
        context.bezierCurveTo(145.89, 870.93, 145.19, 870.2, 143.04, 870.93);
        context.closePath();
        context.fillStyle = fillColor19;
        context.fill();


    }

    function drawPath36() {
        context.beginPath();
        context.moveTo(307.57, 239.68);
        context.bezierCurveTo(311.04, 235.55, 314.48, 230.93, 319.77, 229.08);
        context.bezierCurveTo(320.11, 229.51, 320.75, 230.33, 321.08, 230.75);
        context.bezierCurveTo(317.53, 235.49, 312.6, 239.03, 309.25, 243.96);
        context.bezierCurveTo(293.97, 265.29, 287.87, 291.6, 284.88, 317.27);
        context.bezierCurveTo(283.45, 335.52, 284.33, 354, 288.17, 371.93);
        context.bezierCurveTo(290.15, 379.41, 292.19, 387.8, 298.92, 392.52);
        context.bezierCurveTo(295.44, 401.21, 288.55, 407.77, 283.4, 415.43);
        context.bezierCurveTo(267.61, 438.71, 253.45, 463.03, 239.51, 487.43);
        context.bezierCurveTo(233.35, 500.36, 225.43, 512.36, 219.51, 525.4);
        context.bezierCurveTo(218.71, 525.16, 217.08, 524.68, 216.28, 524.44);
        context.bezierCurveTo(217.99, 518.27, 219.53, 512, 222.28, 506.2);
        context.bezierCurveTo(229.33, 491.87, 237.15, 477.91, 245.55, 464.32);
        context.bezierCurveTo(249.15, 457.01, 253.56, 450.17, 258.11, 443.41);
        context.bezierCurveTo(263.77, 433.05, 270.93, 423.64, 277.88, 414.13);
        context.bezierCurveTo(282.04, 406.48, 288.24, 400.24, 292.89, 392.92);
        context.bezierCurveTo(290.19, 387.87, 286.27, 383.43, 284.87, 377.72);
        context.bezierCurveTo(276.93, 356.04, 277.21, 332.51, 279.47, 309.85);
        context.bezierCurveTo(280.75, 295.31, 285.84, 281.51, 290.64, 267.83);
        context.bezierCurveTo(295.25, 257.89, 300.72, 248.27, 307.57, 239.68);
        context.closePath();
        context.fillStyle = fillColor20;
        context.fill();


    }

    function drawPath37() {
        context.beginPath();
        context.moveTo(513.48, 231.05);
        context.bezierCurveTo(523.27, 228.35, 535.45, 227.77, 543.27, 235.37);
        context.bezierCurveTo(546.23, 242.91, 540.25, 254.15, 548.45, 259.57);
        context.bezierCurveTo(546.81, 261.95, 545.24, 264.37, 543.71, 266.83);
        context.bezierCurveTo(539.67, 269.16, 535.49, 271.25, 531.07, 272.75);
        context.bezierCurveTo(528.43, 267.93, 524.87, 263.73, 521.19, 259.69);
        context.bezierCurveTo(516.52, 254.55, 511.33, 249.85, 505.57, 245.96);
        context.bezierCurveTo(506.15, 245.07, 507.28, 243.29, 507.84, 242.41);
        context.bezierCurveTo(508.91, 243.96, 509.97, 245.51, 511.04, 247.08);
        context.bezierCurveTo(510.81, 243.29, 511.48, 239.49, 514.52, 236.92);
        context.bezierCurveTo(514.09, 235.05, 510.36, 231.95, 513.48, 231.05);
        context.closePath();
        context.fillStyle = fillColor21;
        context.fill();


    }

    function drawPath38() {
        context.beginPath();
        context.moveTo(431, 232.25);
        context.bezierCurveTo(447.69, 231.61, 464.79, 233.39, 480.28, 239.95);
        context.bezierCurveTo(492.73, 245.25, 505.31, 251.48, 514.45, 261.76);
        context.bezierCurveTo(518.63, 266.97, 518.81, 273.93, 519.44, 280.27);
        context.bezierCurveTo(516.77, 281.81, 514.07, 283.53, 510.92, 283.79);
        context.bezierCurveTo(505.95, 280.83, 501.23, 277.43, 496.92, 273.56);
        context.bezierCurveTo(480.08, 258.11, 459.84, 246.77, 438.6, 238.56);
        context.bezierCurveTo(435.37, 237.44, 432.51, 235.4, 431, 232.25);
        context.closePath();
        context.fillStyle = fillColor22;
        context.fill();


    }

    function drawPath39() {
        context.beginPath();
        context.moveTo(1158.63, 243.11);
        context.bezierCurveTo(1169.16, 243.25, 1179.61, 240.92, 1190.13, 242.35);
        context.bezierCurveTo(1188.29, 243.56, 1186.45, 244.76, 1184.6, 245.96);
        context.bezierCurveTo(1187.93, 247.88, 1191.04, 250.15, 1193.96, 252.65);
        context.bezierCurveTo(1194.2, 255.11, 1194.48, 257.56, 1194.77, 260.01);
        context.bezierCurveTo(1198.99, 260.21, 1203.25, 260.04, 1207.44, 260.77);
        context.bezierCurveTo(1209.2, 261.87, 1210.56, 263.47, 1212.05, 264.89);
        context.bezierCurveTo(1210.99, 266.03, 1209.92, 267.16, 1208.87, 268.29);
        context.bezierCurveTo(1210.69, 270.07, 1212.53, 271.84, 1214.37, 273.63);
        context.bezierCurveTo(1215.47, 272.71, 1216.57, 271.77, 1217.68, 270.87);
        context.bezierCurveTo(1221.28, 274.28, 1224.76, 277.8, 1228.2, 281.39);
        context.bezierCurveTo(1231.25, 281.73, 1234.61, 281.25, 1237.48, 282.52);
        context.bezierCurveTo(1240.15, 285.89, 1239.19, 290.87, 1241.63, 294.43);
        context.bezierCurveTo(1242.85, 296.31, 1244.33, 297.99, 1245.77, 299.73);
        context.bezierCurveTo(1247.33, 297.48, 1248.88, 295.21, 1250.44, 292.95);
        context.bezierCurveTo(1252.72, 304.48, 1253.35, 316.39, 1251.79, 328.05);
        context.bezierCurveTo(1250, 340.07, 1247.75, 352.24, 1242.15, 363.15);
        context.bezierCurveTo(1239.87, 360.89, 1237.35, 358.71, 1234.19, 357.88);
        context.bezierCurveTo(1229.09, 356.67, 1225.31, 352.85, 1220.6, 350.83);
        context.bezierCurveTo(1220.36, 347.63, 1220.21, 344.43, 1219.72, 341.25);
        context.bezierCurveTo(1216.4, 341.11, 1214.45, 344.28, 1212.13, 346.15);
        context.bezierCurveTo(1208.51, 341.63, 1206.47, 336.15, 1203.35, 331.32);
        context.bezierCurveTo(1202.57, 331.01, 1201.04, 330.4, 1200.27, 330.09);
        context.bezierCurveTo(1200.33, 331.68, 1200.41, 333.28, 1200.52, 334.88);
        context.bezierCurveTo(1198.47, 333.51, 1196.43, 332.15, 1194.4, 330.8);
        context.bezierCurveTo(1193.97, 331.29, 1193.11, 332.29, 1192.67, 332.8);
        context.bezierCurveTo(1192.28, 331.69, 1191.92, 330.59, 1191.57, 329.49);
        context.bezierCurveTo(1190.27, 330.4, 1188.96, 331.29, 1187.69, 332.21);
        context.bezierCurveTo(1186.07, 330.84, 1184.44, 329.51, 1182.83, 328.16);
        context.bezierCurveTo(1183.12, 327.47, 1183.72, 326.07, 1184.01, 325.36);
        context.bezierCurveTo(1183.52, 324.91, 1182.55, 323.97, 1182.05, 323.51);
        context.bezierCurveTo(1182.45, 323.07, 1183.24, 322.16, 1183.64, 321.71);
        context.bezierCurveTo(1183.35, 321.57, 1182.77, 321.28, 1182.48, 321.13);
        context.bezierCurveTo(1179.01, 320.39, 1176.12, 318.31, 1173.53, 315.99);
        context.bezierCurveTo(1172.76, 316.19, 1171.2, 316.6, 1170.41, 316.8);
        context.bezierCurveTo(1171.52, 315.49, 1172.61, 314.17, 1173.75, 312.88);
        context.bezierCurveTo(1170.71, 311.04, 1167.39, 309.75, 1163.81, 309.69);
        context.bezierCurveTo(1160.71, 305.45, 1155.61, 304.21, 1151.01, 302.35);
        context.bezierCurveTo(1151.47, 301.91, 1152.36, 301, 1152.81, 300.55);
        context.bezierCurveTo(1152.05, 297.19, 1151.19, 293.85, 1150.19, 290.56);
        context.bezierCurveTo(1148.21, 291.53, 1146.27, 292.52, 1144.32, 293.51);
        context.bezierCurveTo(1145.08, 292.13, 1145.87, 290.75, 1146.67, 289.39);
        context.bezierCurveTo(1140.13, 287.48, 1135.91, 282, 1131.85, 276.92);
        context.bezierCurveTo(1130.19, 278.69, 1128.53, 280.45, 1126.88, 282.23);
        context.bezierCurveTo(1125.41, 281.24, 1123.96, 280.27, 1122.53, 279.28);
        context.bezierCurveTo(1121.73, 277, 1120.92, 274.73, 1120.05, 272.51);
        context.bezierCurveTo(1119.05, 274.65, 1118.12, 276.84, 1117.19, 279.03);
        context.bezierCurveTo(1111.35, 274.45, 1105.48, 269.88, 1099.25, 265.87);
        context.bezierCurveTo(1099.15, 265.13, 1098.95, 263.68, 1098.85, 262.95);
        context.bezierCurveTo(1107.23, 257.63, 1115.59, 251.84, 1125.39, 249.51);
        context.bezierCurveTo(1136.07, 245.69, 1147.31, 243.64, 1158.63, 243.11);
        context.closePath();
        context.fillStyle = fillColor23;
        context.fill();


    }

    function drawPath40() {
        context.beginPath();
        context.moveTo(1190.13, 242.35);
        context.bezierCurveTo(1203.01, 243.55, 1214.69, 250.52, 1227.71, 251.11);
        context.bezierCurveTo(1239.85, 261.87, 1248.15, 276.85, 1250.44, 292.95);
        context.bezierCurveTo(1248.88, 295.21, 1247.33, 297.48, 1245.77, 299.73);
        context.bezierCurveTo(1244.33, 297.99, 1242.85, 296.31, 1241.63, 294.43);
        context.bezierCurveTo(1239.19, 290.87, 1240.15, 285.89, 1237.48, 282.52);
        context.bezierCurveTo(1234.61, 281.25, 1231.25, 281.73, 1228.2, 281.39);
        context.bezierCurveTo(1224.76, 277.8, 1221.28, 274.28, 1217.68, 270.87);
        context.bezierCurveTo(1216.57, 271.77, 1215.47, 272.71, 1214.37, 273.63);
        context.bezierCurveTo(1212.53, 271.84, 1210.69, 270.07, 1208.87, 268.29);
        context.bezierCurveTo(1209.92, 267.16, 1210.99, 266.03, 1212.05, 264.89);
        context.bezierCurveTo(1210.56, 263.47, 1209.2, 261.87, 1207.44, 260.77);
        context.bezierCurveTo(1203.25, 260.04, 1198.99, 260.21, 1194.77, 260.01);
        context.bezierCurveTo(1194.48, 257.56, 1194.2, 255.11, 1193.96, 252.65);
        context.bezierCurveTo(1191.04, 250.15, 1187.93, 247.88, 1184.6, 245.96);
        context.bezierCurveTo(1186.45, 244.76, 1188.29, 243.56, 1190.13, 242.35);
        context.closePath();
        context.fillStyle = fillColor24;
        context.fill();


    }

    function drawPath41() {
        context.beginPath();
        context.moveTo(803.47, 268.08);
        context.bezierCurveTo(848.92, 263.85, 894.89, 264.23, 940.17, 270.16);
        context.bezierCurveTo(947.16, 271.79, 954.35, 272.24, 961.39, 273.65);
        context.bezierCurveTo(973.8, 276.61, 986.55, 278.23, 998.63, 282.55);
        context.bezierCurveTo(1002.07, 283.53, 1005.49, 284.63, 1008.99, 285.47);
        context.bezierCurveTo(1011.51, 286.51, 1013.97, 287.73, 1016.39, 289.05);
        context.bezierCurveTo(1016.55, 289.84, 1016.85, 291.43, 1017.01, 292.21);
        context.bezierCurveTo(1015.65, 292.17, 1012.95, 292.09, 1011.59, 292.04);
        context.bezierCurveTo(1006.08, 290.08, 1000.4, 288.67, 994.68, 287.53);
        context.bezierCurveTo(975.68, 282.87, 956.44, 278.84, 937.01, 276.65);
        context.bezierCurveTo(907.37, 271.93, 877.31, 269.41, 847.27, 269.81);
        context.bezierCurveTo(825.31, 269.2, 803.28, 270.07, 781.43, 272.43);
        context.bezierCurveTo(780.21, 272.57, 777.79, 272.85, 776.57, 273);
        context.bezierCurveTo(776.4, 276.56, 774.67, 275.03, 773.53, 273.43);
        context.bezierCurveTo(765.59, 274.16, 757.64, 275.68, 749.64, 275.07);
        context.bezierCurveTo(767.4, 271.56, 785.43, 269.47, 803.47, 268.08);
        context.closePath();
        context.fillStyle = fillColor25;
        context.fill();


    }

    function drawPath42() {
        context.beginPath();
        context.moveTo(781.43, 272.43);
        context.bezierCurveTo(803.28, 270.07, 825.31, 269.2, 847.27, 269.81);
        context.bezierCurveTo(843.88, 270.76, 840.48, 271.69, 836.99, 272.13);
        context.bezierCurveTo(826.69, 270.45, 816.43, 272.96, 806.19, 273.8);
        context.bezierCurveTo(796.87, 274.45, 787.8, 277.49, 778.39, 277.03);
        context.bezierCurveTo(779.4, 275.49, 780.4, 273.96, 781.43, 272.43);
        context.closePath();
        context.fillStyle = fillColor26;
        context.fill();


    }

    function drawPath43() {
        context.beginPath();
        context.moveTo(847.27, 269.81);
        context.bezierCurveTo(877.31, 269.41, 907.37, 271.93, 937.01, 276.65);
        context.bezierCurveTo(930.89, 278.28, 924.59, 277.4, 918.37, 277.17);
        context.bezierCurveTo(913.81, 276.96, 909.2, 276.92, 904.76, 275.77);
        context.bezierCurveTo(897.08, 273.55, 889.08, 275.91, 881.29, 274.52);
        context.bezierCurveTo(868.13, 274.11, 854.95, 272.87, 841.79, 273.85);
        context.bezierCurveTo(840.17, 273.27, 838.57, 272.69, 836.99, 272.13);
        context.bezierCurveTo(840.48, 271.69, 843.88, 270.76, 847.27, 269.81);
        context.closePath();
        context.fillStyle = fillColor27;
        context.fill();


    }

    function drawPath44() {
        context.beginPath();
        context.moveTo(940.17, 270.16);
        context.bezierCurveTo(941.89, 269.76, 943.64, 269.45, 945.4, 269.21);
        context.bezierCurveTo(955.2, 269.69, 965.09, 269.71, 974.63, 272.43);
        context.bezierCurveTo(986.27, 273.65, 997.65, 276.53, 1009.33, 277.37);
        context.bezierCurveTo(1014.84, 278.49, 1019.89, 281.36, 1025.6, 281.73);
        context.bezierCurveTo(1032.72, 282.07, 1039.07, 285.56, 1045.95, 287.01);
        context.bezierCurveTo(1052.99, 288.48, 1059.25, 292.21, 1066.24, 293.87);
        context.bezierCurveTo(1082.23, 299.11, 1098.07, 305.13, 1112.63, 313.65);
        context.bezierCurveTo(1121.52, 317.96, 1129.75, 323.61, 1139.05, 327.04);
        context.bezierCurveTo(1149.36, 330.92, 1158.2, 337.6, 1167.67, 343.05);
        context.bezierCurveTo(1172.85, 346.24, 1178.41, 348.95, 1183.03, 353);
        context.bezierCurveTo(1185.63, 355.27, 1188.24, 357.55, 1191.24, 359.29);
        context.bezierCurveTo(1200.44, 364.23, 1207, 372.75, 1216.24, 377.65);
        context.bezierCurveTo(1216.07, 378.55, 1215.72, 380.35, 1215.55, 381.24);
        context.bezierCurveTo(1226.53, 390.45, 1235.53, 401.69, 1245.51, 411.91);
        context.bezierCurveTo(1247.8, 414.05, 1248.32, 417.16, 1248.85, 420.11);
        context.bezierCurveTo(1252.52, 421.52, 1253.52, 425.68, 1255.56, 428.64);
        context.bezierCurveTo(1256.76, 431.13, 1259.35, 432.33, 1261.49, 433.88);
        context.bezierCurveTo(1264.56, 438.64, 1267.55, 443.48, 1270.15, 448.53);
        context.lineTo(1270.75, 449.67);
        context.bezierCurveTo(1267.13, 448.31, 1264.28, 445.77, 1263.12, 442.03);
        context.bezierCurveTo(1261.92, 441.45, 1260.75, 440.89, 1259.59, 440.33);
        context.bezierCurveTo(1259.16, 439, 1258.75, 437.68, 1258.35, 436.36);
        context.bezierCurveTo(1251.95, 431.16, 1248.13, 423.64, 1242.2, 418);
        context.bezierCurveTo(1237.53, 414.15, 1237.39, 406.84, 1231.39, 404.4);
        context.bezierCurveTo(1226.16, 396.61, 1219.75, 389.55, 1211.79, 384.51);
        context.bezierCurveTo(1210.84, 384.27, 1208.95, 383.8, 1208, 383.56);
        context.lineTo(1207.63, 383.52);
        context.bezierCurveTo(1201.91, 373.69, 1190.23, 369.77, 1183.63, 360.64);
        context.bezierCurveTo(1180.81, 355.72, 1175.37, 353.71, 1170.99, 350.55);
        context.bezierCurveTo(1161.76, 345.01, 1152.03, 340.32, 1143, 334.45);
        context.bezierCurveTo(1135.28, 329.68, 1125.97, 328.16, 1118.57, 322.81);
        context.bezierCurveTo(1115.84, 320.73, 1112.48, 320, 1109.21, 319.32);
        context.bezierCurveTo(1103.28, 317.51, 1098.15, 313.88, 1092.4, 311.63);
        context.bezierCurveTo(1084.53, 308.49, 1076.32, 306.07, 1069.08, 301.56);
        context.bezierCurveTo(1066.56, 299.89, 1063.65, 298.92, 1060.61, 298.96);
        context.bezierCurveTo(1055.92, 292.39, 1047.12, 294.07, 1040.43, 291.36);
        context.bezierCurveTo(1030.35, 287.75, 1019.85, 284.29, 1008.99, 285.47);
        context.bezierCurveTo(1005.49, 284.63, 1002.07, 283.53, 998.63, 282.55);
        context.bezierCurveTo(986.55, 278.23, 973.8, 276.61, 961.39, 273.65);
        context.bezierCurveTo(954.35, 272.24, 947.16, 271.79, 940.17, 270.16);
        context.closePath();
        context.fillStyle = fillColor28;
        context.fill();


    }

    function drawPath45() {
        context.beginPath();
        context.moveTo(806.19, 273.8);
        context.bezierCurveTo(816.43, 272.96, 826.69, 270.45, 836.99, 272.13);
        context.bezierCurveTo(838.57, 272.69, 840.17, 273.27, 841.79, 273.85);
        context.bezierCurveTo(834.03, 274.59, 826.15, 274, 818.51, 275.72);
        context.bezierCurveTo(812.43, 277.04, 806.19, 277.08, 800, 277.16);
        context.bezierCurveTo(792.31, 277.13, 785.05, 280.09, 777.44, 280.69);
        context.bezierCurveTo(765.73, 281.76, 754.15, 283.79, 742.68, 286.36);
        context.bezierCurveTo(725.27, 288.88, 708.75, 295.4, 691.44, 298.4);
        context.bezierCurveTo(695.08, 295.31, 700.21, 294.97, 703.73, 291.79);
        context.bezierCurveTo(704.19, 291.41, 705.08, 290.68, 705.52, 290.31);
        context.bezierCurveTo(714.05, 287.59, 722.97, 286.57, 731.77, 285.24);
        context.bezierCurveTo(738.8, 282.56, 746.27, 281.77, 753.59, 280.32);
        context.bezierCurveTo(761.49, 277.32, 770, 276.92, 778.39, 277.03);
        context.bezierCurveTo(787.8, 277.49, 796.87, 274.45, 806.19, 273.8);
        context.closePath();
        context.fillStyle = fillColor29;
        context.fill();


    }

    function drawPath46() {
        context.beginPath();
        context.moveTo(773.53, 273.43);
        context.bezierCurveTo(774.67, 275.03, 776.4, 276.56, 776.57, 273);
        context.bezierCurveTo(777.79, 272.85, 780.21, 272.57, 781.43, 272.43);
        context.bezierCurveTo(780.4, 273.96, 779.4, 275.49, 778.39, 277.03);
        context.bezierCurveTo(770, 276.92, 761.49, 277.32, 753.59, 280.32);
        context.bezierCurveTo(746.27, 281.77, 738.8, 282.56, 731.77, 285.24);
        context.bezierCurveTo(722.97, 286.57, 714.05, 287.59, 705.52, 290.31);
        context.bezierCurveTo(705.08, 290.68, 704.19, 291.41, 703.73, 291.79);
        context.bezierCurveTo(696.57, 292.53, 689.73, 294.65, 683.24, 297.69);
        context.bezierCurveTo(672.17, 299.76, 661.99, 304.65, 651.2, 307.67);
        context.bezierCurveTo(641.63, 311.56, 632.44, 316.33, 623.15, 320.83);
        context.bezierCurveTo(614.61, 323.71, 607.11, 328.85, 598.6, 331.79);
        context.bezierCurveTo(594.51, 336.41, 587.71, 336.64, 583.33, 340.95);
        context.bezierCurveTo(576.33, 346.79, 568.99, 352.52, 563.75, 360.09);
        context.bezierCurveTo(561.13, 363.53, 556.19, 364.84, 554.71, 369.2);
        context.bezierCurveTo(546.6, 372.63, 539.61, 378.05, 532.6, 383.27);
        context.bezierCurveTo(525.85, 387.44, 519.12, 391.95, 513.56, 397.63);
        context.bezierCurveTo(511.17, 402.12, 507.52, 405.63, 502.97, 407.91);
        context.bezierCurveTo(501.45, 406.6, 499.93, 405.31, 498.43, 404);
        context.bezierCurveTo(513.19, 391.53, 528.04, 379.12, 543.76, 367.87);
        context.bezierCurveTo(545.44, 366.45, 547.03, 364.91, 548.49, 363.25);
        context.bezierCurveTo(551.21, 362.63, 554.75, 363.2, 556.73, 360.8);
        context.bezierCurveTo(560.56, 356.51, 562.33, 350.68, 566.67, 346.8);
        context.bezierCurveTo(570.87, 343.08, 575.92, 340.59, 580.75, 337.8);
        context.bezierCurveTo(591.71, 331.29, 602.79, 324.89, 614.29, 319.37);
        context.bezierCurveTo(622.8, 316.01, 630.8, 311.51, 639.43, 308.44);
        context.bezierCurveTo(644.43, 306.57, 649.36, 304.52, 654.24, 302.36);
        context.bezierCurveTo(665.15, 297.43, 677.12, 295.53, 688.15, 290.91);
        context.bezierCurveTo(696.29, 287.73, 705.19, 287.17, 713.33, 283.97);
        context.bezierCurveTo(720.91, 280.92, 729.65, 282.41, 736.71, 277.87);
        context.bezierCurveTo(741.05, 277.13, 745.33, 276.01, 749.64, 275.07);
        context.bezierCurveTo(757.64, 275.68, 765.59, 274.16, 773.53, 273.43);
        context.closePath();
        context.fillStyle = fillColor30;
        context.fill();


    }

    function drawPath47() {
        context.beginPath();
        context.moveTo(841.79, 273.85);
        context.bezierCurveTo(854.95, 272.87, 868.13, 274.11, 881.29, 274.52);
        context.bezierCurveTo(889.08, 275.91, 897.08, 273.55, 904.76, 275.77);
        context.bezierCurveTo(909.2, 276.92, 913.81, 276.96, 918.37, 277.17);
        context.bezierCurveTo(916.04, 281.75, 910.11, 280.04, 905.92, 280.88);
        context.bezierCurveTo(889.01, 281.79, 872.01, 279.72, 855.16, 281.76);
        context.bezierCurveTo(844.79, 282.71, 834.35, 281.52, 824, 282.72);
        context.bezierCurveTo(815.69, 283.76, 807.24, 282.73, 799, 284.49);
        context.bezierCurveTo(794.07, 285.48, 789.13, 286.56, 784.09, 286.68);
        context.bezierCurveTo(771.95, 286.92, 759.97, 289.32, 747.85, 289.93);
        context.bezierCurveTo(743.65, 290, 740.15, 292.68, 736.11, 293.47);
        context.bezierCurveTo(731.84, 294.39, 727.47, 294.65, 723.15, 295.19);
        context.bezierCurveTo(724, 296.15, 724.87, 297.12, 725.73, 298.08);
        context.bezierCurveTo(724.75, 298.17, 722.79, 298.35, 721.81, 298.44);
        context.bezierCurveTo(717.35, 298.48, 712.73, 297.69, 708.41, 299.15);
        context.bezierCurveTo(698.93, 302.83, 689.12, 305.55, 679.49, 308.8);
        context.bezierCurveTo(669.55, 313.13, 659.53, 317.33, 649.57, 321.68);
        context.bezierCurveTo(646.55, 323.12, 643.25, 323.84, 639.95, 324.32);
        context.bezierCurveTo(639.76, 322, 639.6, 319.71, 639.43, 317.4);
        context.bezierCurveTo(646.49, 315.13, 652.68, 310.63, 660.13, 309.49);
        context.bezierCurveTo(665.33, 305.31, 672.32, 305.2, 678.21, 302.45);
        context.bezierCurveTo(682.4, 300.44, 686.8, 298.92, 691.44, 298.4);
        context.bezierCurveTo(708.75, 295.4, 725.27, 288.88, 742.68, 286.36);
        context.bezierCurveTo(754.15, 283.79, 765.73, 281.76, 777.44, 280.69);
        context.bezierCurveTo(785.05, 280.09, 792.31, 277.13, 800, 277.16);
        context.bezierCurveTo(806.19, 277.08, 812.43, 277.04, 818.51, 275.72);
        context.bezierCurveTo(826.15, 274, 834.03, 274.59, 841.79, 273.85);
        context.closePath();
        context.fillStyle = fillColor31;
        context.fill();
        


    }

    function drawPath48() {
        context.beginPath();
        context.moveTo(1120.05, 272.51);
        context.bezierCurveTo(1120.92, 274.73, 1121.73, 277, 1122.53, 279.28);
        context.bezierCurveTo(1123.96, 280.27, 1125.41, 281.24, 1126.88, 282.23);
        context.bezierCurveTo(1128.53, 280.45, 1130.19, 278.69, 1131.85, 276.92);
        context.bezierCurveTo(1135.91, 282, 1140.13, 287.48, 1146.67, 289.39);
        context.bezierCurveTo(1145.87, 290.75, 1145.08, 292.13, 1144.32, 293.51);
        context.bezierCurveTo(1146.27, 292.52, 1148.21, 291.53, 1150.19, 290.56);
        context.bezierCurveTo(1151.19, 293.85, 1152.05, 297.19, 1152.81, 300.55);
        context.bezierCurveTo(1152.36, 301, 1151.47, 301.91, 1151.01, 302.35);
        context.bezierCurveTo(1155.61, 304.21, 1160.71, 305.45, 1163.81, 309.69);
        context.bezierCurveTo(1167.39, 309.75, 1170.71, 311.04, 1173.75, 312.88);
        context.bezierCurveTo(1172.61, 314.17, 1171.52, 315.49, 1170.41, 316.8);
        context.bezierCurveTo(1171.2, 316.6, 1172.76, 316.19, 1173.53, 315.99);
        context.bezierCurveTo(1176.12, 318.31, 1179.01, 320.39, 1182.48, 321.13);
        context.bezierCurveTo(1182.77, 321.28, 1183.35, 321.57, 1183.64, 321.71);
        context.bezierCurveTo(1183.24, 322.16, 1182.45, 323.07, 1182.05, 323.51);
        context.bezierCurveTo(1182.55, 323.97, 1183.52, 324.91, 1184.01, 325.36);
        context.bezierCurveTo(1183.72, 326.07, 1183.12, 327.47, 1182.83, 328.16);
        context.bezierCurveTo(1176.09, 323.51, 1170.4, 315.97, 1161.83, 315.01);
        context.bezierCurveTo(1148.33, 301.4, 1132.12, 290.93, 1117.19, 279.03);
        context.bezierCurveTo(1118.12, 276.84, 1119.05, 274.65, 1120.05, 272.51);
        context.closePath();
        context.fillStyle = fillColor32;
        context.fill();


    }

    function drawPath49() {
        context.beginPath();
        context.moveTo(937.01, 276.65);
        context.bezierCurveTo(956.44, 278.84, 975.68, 282.87, 994.68, 287.53);
        context.bezierCurveTo(992.81, 287.35, 990.95, 287.24, 989.09, 287.12);
        context.bezierCurveTo(989.85, 288.2, 990.63, 289.28, 991.41, 290.36);
        context.bezierCurveTo(987.84, 290.52, 984.27, 290.76, 980.71, 290.95);
        context.bezierCurveTo(971.11, 290.07, 961.6, 288.51, 951.97, 288.11);
        context.bezierCurveTo(937.96, 283.81, 923.16, 286, 908.91, 283.24);
        context.bezierCurveTo(908.16, 282.65, 906.67, 281.47, 905.92, 280.88);
        context.bezierCurveTo(910.11, 280.04, 916.04, 281.75, 918.37, 277.17);
        context.bezierCurveTo(924.59, 277.4, 930.89, 278.28, 937.01, 276.65);
        context.closePath();
        context.fillStyle = fillColor33;
        context.fill();


    }

    function drawPath50() {
        context.beginPath();
        context.moveTo(697.28, 285.32);
        context.bezierCurveTo(710.65, 284.05, 722.97, 275.89, 736.71, 277.87);
        context.bezierCurveTo(729.65, 282.41, 720.91, 280.92, 713.33, 283.97);
        context.bezierCurveTo(705.19, 287.17, 696.29, 287.73, 688.15, 290.91);
        context.bezierCurveTo(677.12, 295.53, 665.15, 297.43, 654.24, 302.36);
        context.bezierCurveTo(649.36, 304.52, 644.43, 306.57, 639.43, 308.44);
        context.bezierCurveTo(630.8, 311.51, 622.8, 316.01, 614.29, 319.37);
        context.bezierCurveTo(602.79, 324.89, 591.71, 331.29, 580.75, 337.8);
        context.bezierCurveTo(575.92, 340.59, 570.87, 343.08, 566.67, 346.8);
        context.bezierCurveTo(562.33, 350.68, 560.56, 356.51, 556.73, 360.8);
        context.bezierCurveTo(554.75, 363.2, 551.21, 362.63, 548.49, 363.25);
        context.bezierCurveTo(552.2, 357.84, 557.85, 353.55, 558.73, 346.6);
        context.bezierCurveTo(570.75, 340.79, 580.45, 330.73, 593.37, 326.65);
        context.bezierCurveTo(602.43, 323.89, 609.13, 316.24, 618.53, 314.44);
        context.bezierCurveTo(622.21, 313.85, 624.79, 311.05, 627.73, 309.08);
        context.bezierCurveTo(631.11, 307.59, 634.88, 307.36, 638.32, 306.01);
        context.bezierCurveTo(643.55, 304.15, 647.68, 299.77, 653.33, 298.96);
        context.bezierCurveTo(656.99, 298.32, 660.61, 297.41, 664, 295.85);
        context.bezierCurveTo(669.87, 293.24, 676.37, 292.63, 682.33, 290.29);
        context.bezierCurveTo(687.23, 288.39, 691.97, 285.84, 697.28, 285.32);
        context.closePath();
        context.fillStyle = fillColor34;
        context.fill();


    }

    function drawPath51() {
        context.beginPath();
        context.moveTo(824, 282.72);
        context.bezierCurveTo(834.35, 281.52, 844.79, 282.71, 855.16, 281.76);
        context.bezierCurveTo(872.01, 279.72, 889.01, 281.79, 905.92, 280.88);
        context.bezierCurveTo(906.67, 281.47, 908.16, 282.65, 908.91, 283.24);
        context.bezierCurveTo(897.47, 284.03, 886.04, 282.35, 874.6, 283.08);
        context.bezierCurveTo(863.81, 282.6, 853.16, 284.32, 842.43, 284.93);
        context.bezierCurveTo(803.27, 285.87, 764.01, 289.45, 725.73, 298.08);
        context.bezierCurveTo(724.87, 297.12, 724, 296.15, 723.15, 295.19);
        context.bezierCurveTo(727.47, 294.65, 731.84, 294.39, 736.11, 293.47);
        context.bezierCurveTo(740.15, 292.68, 743.65, 290, 747.85, 289.93);
        context.bezierCurveTo(759.97, 289.32, 771.95, 286.92, 784.09, 286.68);
        context.bezierCurveTo(789.13, 286.56, 794.07, 285.48, 799, 284.49);
        context.bezierCurveTo(807.24, 282.73, 815.69, 283.76, 824, 282.72);
        context.closePath();
        context.fillStyle = fillColor35;
        context.fill();


    }

    function drawPath52() {
        context.beginPath();
        context.moveTo(842.43, 284.93);
        context.bezierCurveTo(853.16, 284.32, 863.81, 282.6, 874.6, 283.08);
        context.bezierCurveTo(886.04, 282.35, 897.47, 284.03, 908.91, 283.24);
        context.bezierCurveTo(923.16, 286, 937.96, 283.81, 951.97, 288.11);
        context.bezierCurveTo(961.6, 288.51, 971.11, 290.07, 980.71, 290.95);
        context.bezierCurveTo(987.13, 292.91, 993.83, 293.77, 1000.23, 295.85);
        context.bezierCurveTo(999.76, 296.59, 998.84, 298.05, 998.37, 298.79);
        context.bezierCurveTo(958.81, 289.97, 918.23, 286.73, 877.8, 285.21);
        context.bezierCurveTo(866.01, 284.88, 854.21, 284.55, 842.43, 284.93);
        context.closePath();
        context.fillStyle = fillColor36;
        context.fill();


    }

    function drawPath53() {
        context.beginPath();
        context.moveTo(725.73, 298.08);
        context.bezierCurveTo(764.01, 289.45, 803.27, 285.87, 842.43, 284.93);
        context.bezierCurveTo(854.21, 284.55, 866.01, 284.88, 877.8, 285.21);
        context.bezierCurveTo(871.83, 290.36, 863.72, 288.19, 856.68, 290.07);
        context.bezierCurveTo(834.09, 290.2, 811.51, 291.11, 789.01, 293.31);
        context.bezierCurveTo(747.83, 297.76, 706.19, 304.36, 668.15, 321.52);
        context.bezierCurveTo(663.69, 323.43, 659.44, 326.05, 654.57, 326.71);
        context.bezierCurveTo(654.11, 325.99, 653.17, 324.56, 652.71, 323.85);
        context.bezierCurveTo(667.25, 317.2, 681.95, 310.71, 697.19, 305.76);
        context.bezierCurveTo(705.05, 303.47, 712.95, 301.32, 720.85, 299.2);
        context.bezierCurveTo(721.03, 299.61, 721.39, 300.44, 721.56, 300.85);
        context.bezierCurveTo(721.63, 300.25, 721.75, 299.04, 721.81, 298.44);
        context.bezierCurveTo(722.79, 298.35, 724.75, 298.17, 725.73, 298.08);
        context.closePath();
        context.fillStyle = fillColor37;
        context.fill();

    }

    function drawPath54() {
        context.beginPath();
        context.moveTo(877.8, 285.21);
        context.bezierCurveTo(918.23, 286.73, 958.81, 289.97, 998.37, 298.79);
        context.bezierCurveTo(1008.47, 301.04, 1018.37, 304.05, 1028.25, 307.08);
        context.bezierCurveTo(1024, 307.12, 1019.81, 306.21, 1015.68, 305.35);
        context.bezierCurveTo(963.44, 294.51, 910, 289.79, 856.68, 290.07);
        context.bezierCurveTo(863.72, 288.19, 871.83, 290.36, 877.8, 285.21);
        context.closePath();
        context.fillStyle = fillColor38;
        context.fill();


    }

    function drawPath55() {
        context.beginPath();
        context.moveTo(1008.99, 285.47);
        context.bezierCurveTo(1019.85, 284.29, 1030.35, 287.75, 1040.43, 291.36);
        context.bezierCurveTo(1047.12, 294.07, 1055.92, 292.39, 1060.61, 298.96);
        context.bezierCurveTo(1056.75, 298.95, 1052.84, 298.77, 1049.2, 297.4);
        context.bezierCurveTo(1042.73, 294.96, 1035.68, 294.68, 1029.35, 291.91);
        context.bezierCurveTo(1025.67, 289.97, 1021.65, 291.63, 1017.96, 292.51);
        context.bezierCurveTo(1017.43, 291.35, 1016.91, 290.2, 1016.39, 289.05);
        context.bezierCurveTo(1013.97, 287.73, 1011.51, 286.51, 1008.99, 285.47);
        context.closePath();
        context.fillStyle = fillColor39;
        context.fill();


    }

    function drawPath56() {
        context.beginPath();
        context.moveTo(989.09, 287.12);
        context.bezierCurveTo(990.95, 287.24, 992.81, 287.35, 994.68, 287.53);
        context.bezierCurveTo(1000.4, 288.67, 1006.08, 290.08, 1011.59, 292.04);
        context.bezierCurveTo(1014.2, 294.19, 1016.77, 296.39, 1019.44, 298.48);
        context.bezierCurveTo(1013, 297.97, 1006.53, 297.32, 1000.23, 295.85);
        context.bezierCurveTo(993.83, 293.77, 987.13, 292.91, 980.71, 290.95);
        context.bezierCurveTo(984.27, 290.76, 987.84, 290.52, 991.41, 290.36);
        context.bezierCurveTo(990.63, 289.28, 989.85, 288.2, 989.09, 287.12);
        context.closePath();
        context.fillStyle = fillColor40;
        context.fill();


    }

    function drawPath57() {
        context.beginPath();
        context.moveTo(1016.39, 289.05);
        context.bezierCurveTo(1016.91, 290.2, 1017.43, 291.35, 1017.96, 292.51);
        context.bezierCurveTo(1021.65, 291.63, 1025.67, 289.97, 1029.35, 291.91);
        context.bezierCurveTo(1035.68, 294.68, 1042.73, 294.96, 1049.2, 297.4);
        context.bezierCurveTo(1052.84, 298.77, 1056.75, 298.95, 1060.61, 298.96);
        context.bezierCurveTo(1063.65, 298.92, 1066.56, 299.89, 1069.08, 301.56);
        context.bezierCurveTo(1076.32, 306.07, 1084.53, 308.49, 1092.4, 311.63);
        context.bezierCurveTo(1098.15, 313.88, 1103.28, 317.51, 1109.21, 319.32);
        context.bezierCurveTo(1109.53, 320.23, 1110.17, 322.03, 1110.48, 322.92);
        context.bezierCurveTo(1117.01, 326.21, 1123.43, 329.77, 1130.25, 332.44);
        context.bezierCurveTo(1137.48, 335.03, 1143.08, 340.84, 1150.69, 342.53);
        context.bezierCurveTo(1153.63, 347.95, 1159.96, 349.29, 1164.71, 352.57);
        context.bezierCurveTo(1171.56, 357.29, 1179.6, 360.49, 1185.17, 366.89);
        context.bezierCurveTo(1190.41, 373.25, 1198.83, 376.12, 1203.16, 383.36);
        context.bezierCurveTo(1204.28, 383.4, 1206.51, 383.48, 1207.63, 383.52);
        context.lineTo(1208, 383.56);
        context.bezierCurveTo(1208.32, 385.61, 1208.56, 387.69, 1209.15, 389.71);
        context.bezierCurveTo(1210.88, 391.05, 1212.97, 391.81, 1214.96, 392.77);
        context.bezierCurveTo(1222.73, 404.41, 1234.13, 412.93, 1243.07, 423.6);
        context.bezierCurveTo(1248.87, 429.05, 1252.47, 436.25, 1257.79, 442.12);
        context.bezierCurveTo(1261.77, 446.6, 1265.31, 451.52, 1269.81, 455.55);
        context.bezierCurveTo(1272.2, 457.59, 1273.88, 460.28, 1275, 463.21);
        context.bezierCurveTo(1278.12, 469.95, 1283.19, 475.93, 1284.12, 483.56);
        context.bezierCurveTo(1283.01, 483.47, 1281.96, 483.41, 1280.88, 483.33);
        context.bezierCurveTo(1277.53, 477.72, 1273.15, 472.77, 1267.83, 468.97);
        context.bezierCurveTo(1265.03, 461.43, 1258, 456.95, 1253.44, 450.61);
        context.bezierCurveTo(1249.24, 445.03, 1244.8, 439.63, 1240.77, 433.92);
        context.bezierCurveTo(1234.87, 426.52, 1227.27, 420.61, 1221.81, 412.83);
        context.bezierCurveTo(1220.56, 410.69, 1218.31, 409.68, 1216.16, 408.76);
        context.lineTo(1216.08, 407.91);
        context.bezierCurveTo(1217.07, 401.95, 1210.88, 399.75, 1207.11, 396.77);
        context.bezierCurveTo(1203.39, 394.29, 1201.37, 390.17, 1198.29, 387.09);
        context.bezierCurveTo(1189.61, 380.23, 1181.12, 373.13, 1172.39, 366.36);
        context.bezierCurveTo(1166.08, 362.93, 1161.49, 356.84, 1154.51, 354.68);
        context.bezierCurveTo(1146.83, 352.17, 1142.28, 344.49, 1134.53, 342.05);
        context.bezierCurveTo(1128.88, 340.45, 1123.65, 337.76, 1118.68, 334.68);
        context.bezierCurveTo(1112.09, 330.51, 1103.77, 329.96, 1097.8, 324.75);
        context.bezierCurveTo(1093.79, 321.23, 1088.57, 319.84, 1083.33, 319.91);
        context.lineTo(1083.24, 319.89);
        context.bezierCurveTo(1081.89, 318.07, 1081.11, 315.31, 1078.52, 314.95);
        context.bezierCurveTo(1066.11, 312.11, 1055.11, 305.04, 1042.55, 302.64);
        context.bezierCurveTo(1035.67, 301.67, 1029.61, 296.09, 1022.41, 298.35);
        context.bezierCurveTo(1021.41, 298.41, 1020.41, 298.45, 1019.44, 298.48);
        context.bezierCurveTo(1016.77, 296.39, 1014.2, 294.19, 1011.59, 292.04);
        context.bezierCurveTo(1012.95, 292.09, 1015.65, 292.17, 1017.01, 292.21);
        context.bezierCurveTo(1016.85, 291.43, 1016.55, 289.84, 1016.39, 289.05);
        context.closePath();
        context.fillStyle = fillColor41;
        context.fill();


    }

    function drawPath58() {
        context.beginPath();
        context.moveTo(789.01, 293.31);
        context.bezierCurveTo(811.51, 291.11, 834.09, 290.2, 856.68, 290.07);
        context.bezierCurveTo(910, 289.79, 963.44, 294.51, 1015.68, 305.35);
        context.bezierCurveTo(1017.29, 308.39, 1020.71, 309.11, 1023.69, 310.11);
        context.bezierCurveTo(1023.65, 311.09, 1023.6, 313.05, 1023.56, 314.04);
        context.bezierCurveTo(1015.21, 312.12, 1007.32, 308.49, 998.69, 307.84);
        context.bezierCurveTo(983.67, 304, 967.95, 304.23, 952.95, 300.23);
        context.bezierCurveTo(944.76, 298.29, 936.24, 298.83, 927.99, 297.29);
        context.bezierCurveTo(920.83, 295.91, 913.53, 297.53, 906.35, 296.6);
        context.bezierCurveTo(889.2, 294.44, 871.87, 294.97, 854.68, 296.35);
        context.bezierCurveTo(836.57, 295.51, 818.72, 298.85, 800.65, 299.23);
        context.bezierCurveTo(796.67, 298.81, 792.68, 298.36, 788.67, 298.32);
        context.bezierCurveTo(790.01, 297.29, 791.37, 296.27, 792.73, 295.24);
        context.bezierCurveTo(791.49, 294.6, 790.24, 293.95, 789.01, 293.31);
        context.closePath();
        context.fillStyle = fillColor42;
        context.fill();


    }

    function drawPath59() {
        context.beginPath();
        context.moveTo(683.24, 297.69);
        context.bezierCurveTo(689.73, 294.65, 696.57, 292.53, 703.73, 291.79);
        context.bezierCurveTo(700.21, 294.97, 695.08, 295.31, 691.44, 298.4);
        context.bezierCurveTo(686.8, 298.92, 682.4, 300.44, 678.21, 302.45);
        context.bezierCurveTo(672.32, 305.2, 665.33, 305.31, 660.13, 309.49);
        context.bezierCurveTo(652.68, 310.63, 646.49, 315.13, 639.43, 317.4);
        context.bezierCurveTo(637.96, 317.92, 636.49, 318.45, 635.07, 319.07);
        context.bezierCurveTo(626.99, 323.75, 617.95, 326.4, 609.97, 331.27);
        context.bezierCurveTo(605.63, 333.69, 600.71, 334.99, 596.6, 337.88);
        context.bezierCurveTo(594.12, 339.64, 591.4, 341.07, 588.36, 341.55);
        context.bezierCurveTo(587.11, 341.4, 584.6, 341.09, 583.33, 340.95);
        context.bezierCurveTo(587.71, 336.64, 594.51, 336.41, 598.6, 331.79);
        context.bezierCurveTo(607.11, 328.85, 614.61, 323.71, 623.15, 320.83);
        context.bezierCurveTo(632.44, 316.33, 641.63, 311.56, 651.2, 307.67);
        context.bezierCurveTo(661.99, 304.65, 672.17, 299.76, 683.24, 297.69);
        context.closePath();
        context.fillStyle = fillColor43;
        context.fill();


    }

    function drawPath60() {
        context.beginPath();
        context.moveTo(668.15, 321.52);
        context.bezierCurveTo(706.19, 304.36, 747.83, 297.76, 789.01, 293.31);
        context.bezierCurveTo(790.24, 293.95, 791.49, 294.6, 792.73, 295.24);
        context.bezierCurveTo(791.37, 296.27, 790.01, 297.29, 788.67, 298.32);
        context.bezierCurveTo(779.6, 299.13, 770.11, 298.08, 761.49, 301.52);
        context.bezierCurveTo(756.85, 303.25, 751.97, 304.05, 747.09, 304.65);
        context.bezierCurveTo(747, 305.6, 746.83, 307.49, 746.73, 308.44);
        context.bezierCurveTo(733.65, 310.48, 720.53, 312.63, 708, 317.05);
        context.bezierCurveTo(701.53, 319.8, 694.04, 318.81, 687.96, 322.59);
        context.bezierCurveTo(679.17, 325.93, 670.19, 328.81, 661.32, 331.93);
        context.bezierCurveTo(654.21, 334.72, 648.24, 340.75, 640.36, 341.2);
        context.bezierCurveTo(636.59, 341.65, 632.09, 340.72, 629.12, 343.64);
        context.bezierCurveTo(624.21, 348.41, 616.59, 348.25, 611.76, 353.19);
        context.bezierCurveTo(607.15, 357.57, 599.96, 357.44, 595.59, 362.17);
        context.bezierCurveTo(589.6, 368.57, 580.71, 373.01, 578.39, 382.12);
        context.bezierCurveTo(578.24, 382.23, 577.95, 382.45, 577.8, 382.56);
        context.bezierCurveTo(575.64, 383.8, 573.45, 385, 571.28, 386.21);
        context.bezierCurveTo(570.31, 385.09, 569.33, 383.97, 568.37, 382.87);
        context.bezierCurveTo(570.57, 381.6, 572.88, 380.45, 574.83, 378.8);
        context.bezierCurveTo(575.96, 376.56, 576.41, 374.05, 577.11, 371.65);
        context.bezierCurveTo(582.61, 369.13, 587.85, 365.85, 591.32, 360.77);
        context.bezierCurveTo(593.36, 357.49, 597.08, 356.36, 600.59, 355.41);
        context.bezierCurveTo(599.73, 353.75, 598.87, 352.07, 598.12, 350.36);
        context.bezierCurveTo(598.09, 349.99, 598.01, 349.23, 597.99, 348.85);
        context.bezierCurveTo(601.08, 348.57, 604.17, 348.25, 607.27, 347.89);
        context.bezierCurveTo(608.13, 344.31, 610.32, 341.4, 614.35, 341.75);
        context.bezierCurveTo(617.09, 341.33, 620.05, 341.31, 622.51, 339.83);
        context.bezierCurveTo(632.39, 333.85, 642.92, 328.04, 654.57, 326.71);
        context.bezierCurveTo(659.44, 326.05, 663.69, 323.43, 668.15, 321.52);
        context.closePath();
        context.fillStyle = fillColor44;
        context.fill();


    }

    function drawPath61() {
        context.beginPath();
        context.moveTo(854.68, 296.35);
        context.bezierCurveTo(871.87, 294.97, 889.2, 294.44, 906.35, 296.6);
        context.bezierCurveTo(913.53, 297.53, 920.83, 295.91, 927.99, 297.29);
        context.bezierCurveTo(936.24, 298.83, 944.76, 298.29, 952.95, 300.23);
        context.bezierCurveTo(967.95, 304.23, 983.67, 304, 998.69, 307.84);
        context.bezierCurveTo(1007.32, 308.49, 1015.21, 312.12, 1023.56, 314.04);
        context.bezierCurveTo(1027.71, 315.37, 1031.91, 316.52, 1036.12, 317.64);
        context.bezierCurveTo(1041.59, 318.97, 1045.75, 323.23, 1051.15, 324.77);
        context.bezierCurveTo(1058.85, 327.11, 1067, 328.43, 1074.03, 332.63);
        context.bezierCurveTo(1079.69, 336.09, 1085.79, 338.77, 1092.12, 340.77);
        context.bezierCurveTo(1097.32, 341.76, 1098.85, 348.01, 1103.89, 349.27);
        context.bezierCurveTo(1109.03, 350.96, 1114.07, 352.97, 1118.73, 355.75);
        context.bezierCurveTo(1126.01, 359.91, 1134.44, 361.77, 1141.29, 366.72);
        context.bezierCurveTo(1149.85, 372.23, 1158.89, 377.24, 1166.23, 384.41);
        context.bezierCurveTo(1171.29, 389.17, 1177.59, 392.47, 1182.31, 397.63);
        context.bezierCurveTo(1188.36, 404.47, 1196, 409.68, 1201.92, 416.68);
        context.bezierCurveTo(1208.71, 424.97, 1216.21, 432.63, 1223.29, 440.67);
        context.bezierCurveTo(1228.4, 445.2, 1231.21, 452, 1237.43, 455.35);
        context.bezierCurveTo(1242.27, 464.31, 1249.8, 471.72, 1257.71, 478.03);
        context.bezierCurveTo(1259.59, 482.44, 1261.85, 486.67, 1264.35, 490.77);
        context.bezierCurveTo(1267.13, 498.01, 1270.83, 504.97, 1275.47, 511.21);
        context.bezierCurveTo(1276.47, 511.61, 1278.48, 512.44, 1279.49, 512.85);
        context.bezierCurveTo(1284.31, 522.36, 1287, 532.76, 1291.81, 542.25);
        context.bezierCurveTo(1291.95, 546.75, 1292.05, 551.32, 1290.77, 555.68);
        context.bezierCurveTo(1286.24, 559.56, 1281.92, 563.81, 1278.95, 569.04);
        context.bezierCurveTo(1274.89, 557.2, 1271.64, 545.08, 1266.72, 533.55);
        context.bezierCurveTo(1261.81, 519.53, 1252.69, 507.63, 1244.72, 495.27);
        context.bezierCurveTo(1233.41, 479.08, 1222.8, 462.35, 1210.01, 447.24);
        context.bezierCurveTo(1203.45, 439.47, 1196.53, 432, 1189.51, 424.65);
        context.bezierCurveTo(1188.75, 424.6, 1187.21, 424.52, 1186.45, 424.47);
        context.bezierCurveTo(1173.39, 411.85, 1158.45, 401.25, 1143.27, 391.35);
        context.bezierCurveTo(1123.52, 378.51, 1102.85, 366.55, 1080.24, 359.59);
        context.bezierCurveTo(1072.95, 357.24, 1065.95, 354.09, 1058.6, 351.97);
        context.bezierCurveTo(1010.16, 335.21, 958.97, 327.96, 907.99, 324.84);
        context.bezierCurveTo(888.29, 323.72, 868.51, 326.69, 848.92, 324.05);
        context.bezierCurveTo(841.8, 321.32, 834.04, 322.48, 826.63, 322.6);
        context.bezierCurveTo(824.03, 322.47, 821.84, 323.76, 819.87, 325.27);
        context.bezierCurveTo(815.83, 325.85, 811.75, 326.23, 807.69, 326.63);
        context.bezierCurveTo(783.72, 329.01, 759.71, 331.72, 736.12, 336.77);
        context.bezierCurveTo(728.31, 338.4, 720.81, 341.17, 713.25, 343.64);
        context.bezierCurveTo(707.6, 341.93, 702.69, 345.79, 697.36, 346.81);
        context.bezierCurveTo(689.77, 348.27, 682.88, 351.89, 675.55, 354.16);
        context.bezierCurveTo(666.85, 356.8, 658.77, 361.05, 650.16, 363.88);
        context.bezierCurveTo(647.35, 364.69, 645.19, 366.68, 643.95, 369.32);
        context.bezierCurveTo(621.79, 380.05, 599.99, 391.72, 579.83, 405.93);
        context.bezierCurveTo(559.4, 419.92, 540.13, 435.67, 522.63, 453.19);
        context.bezierCurveTo(511.99, 462.53, 503.03, 473.53, 493.41, 483.88);
        context.bezierCurveTo(459.21, 523.88, 431.25, 569.27, 411.43, 618.03);
        context.bezierCurveTo(408.76, 624.47, 405.07, 630.83, 404.52, 637.88);
        context.bezierCurveTo(404.88, 639.84, 403.29, 641.28, 402.23, 642.68);
        context.bezierCurveTo(400.45, 646.96, 399.09, 651.39, 397.67, 655.79);
        context.bezierCurveTo(393.21, 667.89, 392.04, 680.79, 388.91, 693.23);
        context.bezierCurveTo(384.89, 710.29, 385.69, 727.93, 385.92, 745.33);
        context.bezierCurveTo(386.05, 754.01, 386.88, 762.67, 387.63, 771.32);
        context.bezierCurveTo(387.91, 770.47, 388.48, 768.76, 388.76, 767.91);
        context.bezierCurveTo(387.57, 775.6, 388.89, 783.37, 390.39, 790.93);
        context.bezierCurveTo(391.2, 790.25, 392.81, 788.89, 393.61, 788.21);
        context.bezierCurveTo(392.61, 789.31, 391.61, 790.41, 390.61, 791.52);
        context.bezierCurveTo(393.45, 804.6, 396.56, 817.64, 400.57, 830.43);
        context.bezierCurveTo(406.73, 849.67, 416.25, 867.59, 426.29, 885.05);
        context.bezierCurveTo(428.19, 893.95, 434.08, 901.41, 439.83, 908.23);
        context.bezierCurveTo(441.59, 910.53, 441.81, 913.56, 442.49, 916.31);
        context.bezierCurveTo(444.11, 916.83, 445.72, 917.36, 447.35, 917.92);
        context.bezierCurveTo(447.93, 919.52, 448.53, 921.15, 449.15, 922.79);
        context.bezierCurveTo(457.12, 926.51, 460.63, 935.33, 468.32, 939.47);
        context.bezierCurveTo(472.55, 947.59, 480.84, 952.24, 488.09, 957.29);
        context.bezierCurveTo(490.36, 959.09, 493.17, 959.63, 496.01, 959.85);
        context.bezierCurveTo(511.08, 970.56, 526.6, 980.76, 543.37, 988.67);
        context.bezierCurveTo(559.4, 997.39, 576.31, 1004.39, 593.83, 1009.48);
        context.bezierCurveTo(604.13, 1013.4, 614.73, 1016.53, 625.19, 1020.05);
        context.bezierCurveTo(638.2, 1024.33, 651.72, 1026.77, 665, 1030.04);
        context.bezierCurveTo(704.48, 1039.77, 745.03, 1044.37, 785.55, 1047.12);
        context.bezierCurveTo(784.36, 1047.51, 782, 1048.27, 780.81, 1048.65);
        context.bezierCurveTo(794.08, 1050.36, 807.49, 1051.61, 820.88, 1051.2);
        context.bezierCurveTo(830.36, 1050.55, 839.85, 1051.73, 849.35, 1051.2);
        context.bezierCurveTo(858.89, 1050.76, 868.69, 1052.4, 878.01, 1049.69);
        context.bezierCurveTo(873.29, 1048.92, 868.53, 1048.52, 863.76, 1048.45);
        context.bezierCurveTo(892.28, 1047.61, 920.8, 1046.21, 949.2, 1043.41);
        context.bezierCurveTo(984.51, 1039.33, 1019.87, 1034.96, 1054.53, 1026.89);
        context.bezierCurveTo(1064.32, 1025.04, 1073.99, 1022.52, 1083.76, 1020.55);
        context.bezierCurveTo(1088.37, 1022.56, 1093.55, 1022.12, 1098.45, 1021.72);
        context.bezierCurveTo(1103.21, 1020.85, 1107.36, 1018, 1112.11, 1016.97);
        context.bezierCurveTo(1119.19, 1015.47, 1125.73, 1012.29, 1132.33, 1009.44);
        context.bezierCurveTo(1135.57, 1008.08, 1138.15, 1005.61, 1140.44, 1003.03);
        context.bezierCurveTo(1143.51, 1002.59, 1146.55, 1001.88, 1149.56, 1001.08);
        context.bezierCurveTo(1151.09, 1000.65, 1152.65, 1000.25, 1154.21, 999.87);
        context.bezierCurveTo(1154.71, 1000.08, 1155.71, 1000.51, 1156.2, 1000.72);
        context.bezierCurveTo(1161.13, 1004.35, 1166.49, 1000.39, 1171.57, 999.4);
        context.bezierCurveTo(1172.29, 1000.16, 1173.01, 1000.97, 1173.71, 1001.81);
        context.bezierCurveTo(1171.09, 1002.48, 1168.51, 1003.16, 1165.91, 1003.81);
        context.bezierCurveTo(1166.77, 1004.43, 1168.49, 1005.65, 1169.35, 1006.28);
        context.bezierCurveTo(1167.59, 1007.33, 1165.91, 1008.55, 1164.23, 1009.72);
        context.bezierCurveTo(1160.23, 1010.47, 1156.27, 1011.45, 1152.37, 1012.6);
        context.bezierCurveTo(1142.48, 1015.15, 1132, 1016.48, 1123.07, 1021.77);
        context.bezierCurveTo(1118.93, 1024.27, 1114.44, 1026.12, 1109.73, 1027.17);
        context.bezierCurveTo(1101.87, 1029.07, 1094.15, 1031.53, 1086.71, 1034.68);
        context.bezierCurveTo(1077.21, 1038.29, 1064.88, 1036.64, 1058.07, 1045.51);
        context.lineTo(1057.92, 1045.51);
        context.bezierCurveTo(1050.43, 1045.33, 1043.09, 1047.21, 1035.95, 1049.19);
        context.bezierCurveTo(1026.33, 1052.76, 1015.97, 1053.4, 1006.29, 1056.76);
        context.bezierCurveTo(999.88, 1059.08, 992.41, 1058.09, 986.72, 1062.27);
        context.bezierCurveTo(960.63, 1065.23, 934.41, 1067.2, 908.16, 1068.13);
        context.bezierCurveTo(906.12, 1066.72, 903.76, 1066.04, 901.32, 1066.11);
        context.bezierCurveTo(891.55, 1066, 881.77, 1066.36, 872, 1066.16);
        context.bezierCurveTo(866.35, 1066.21, 861.73, 1061.93, 856.07, 1062.16);
        context.bezierCurveTo(842.76, 1062.37, 829.4, 1061.63, 816.16, 1063.16);
        context.bezierCurveTo(810.28, 1063.8, 804.57, 1061.63, 798.72, 1061.76);
        context.bezierCurveTo(782.45, 1062.4, 766.19, 1058.43, 749.96, 1061.08);
        context.bezierCurveTo(688.83, 1053.16, 627.99, 1039.84, 570.76, 1016.51);
        context.bezierCurveTo(555.39, 1010.36, 540.4, 1003.24, 526, 995.07);
        context.bezierCurveTo(525.15, 988.75, 517.87, 987.01, 515.13, 981.72);
        context.bezierCurveTo(511.52, 981.4, 507.88, 981.36, 504.28, 981.55);
        context.bezierCurveTo(497.61, 976.95, 490.88, 972.43, 484.55, 967.39);
        context.bezierCurveTo(482.56, 965.65, 480.04, 964.83, 477.48, 964.48);
        context.bezierCurveTo(479.16, 967.25, 481.36, 969.65, 483.95, 971.63);
        context.bezierCurveTo(483.76, 972.89, 483.59, 974.17, 483.43, 975.48);
        context.bezierCurveTo(484.92, 977, 486.41, 978.55, 487.92, 980.09);
        context.bezierCurveTo(485.55, 980.77, 483.17, 981.44, 480.79, 982.07);
        context.lineTo(480.32, 982.01);
        context.bezierCurveTo(479.2, 979.19, 479.53, 974.68, 475.96, 973.64);
        context.bezierCurveTo(466.43, 970.83, 459.85, 962.76, 453.96, 955.23);
        context.bezierCurveTo(451.36, 952.36, 446.72, 952.19, 444.6, 948.79);
        context.bezierCurveTo(441.37, 943.6, 436.48, 939.76, 433.29, 934.55);
        context.bezierCurveTo(431.88, 932.12, 429.17, 931.12, 426.85, 929.85);
        context.bezierCurveTo(419.91, 926.76, 416.41, 919.84, 413.29, 913.37);
        context.bezierCurveTo(411.87, 909.91, 408.43, 908.29, 405.12, 907.13);
        context.bezierCurveTo(404.75, 902.61, 401.05, 899.53, 398.91, 895.83);
        context.bezierCurveTo(394.92, 888.92, 388.85, 883.11, 387.2, 875.05);
        context.bezierCurveTo(386.63, 874.96, 385.47, 874.79, 384.89, 874.69);
        context.bezierCurveTo(384.47, 868.45, 380.61, 863.36, 378.56, 857.65);
        context.bezierCurveTo(374.31, 846.23, 370.19, 834.68, 367.96, 822.67);
        context.bezierCurveTo(366.77, 815.85, 363.19, 809.61, 363.07, 802.61);
        context.bezierCurveTo(362.84, 799.07, 362.8, 795.52, 362.53, 792);
        context.bezierCurveTo(362.16, 783.44, 358.71, 775.32, 359.08, 766.69);
        context.bezierCurveTo(358.24, 751.07, 362.77, 735.73, 361.84, 720.13);
        context.bezierCurveTo(362.19, 712.67, 363.35, 705.24, 363.09, 697.75);
        context.bezierCurveTo(366.61, 686.95, 369.03, 675.84, 371.72, 664.84);
        context.bezierCurveTo(376.28, 657.09, 379.65, 648.49, 379.77, 639.39);
        context.bezierCurveTo(379.97, 635.72, 380.93, 632.04, 383.44, 629.25);
        context.bezierCurveTo(386.97, 625.59, 390.64, 622.05, 393.89, 618.13);
        context.lineTo(393.65, 620.03);
        context.bezierCurveTo(406.07, 591.63, 420.68, 564.25, 435.84, 537.25);
        context.bezierCurveTo(440.44, 529.47, 445.39, 521.88, 450.29, 514.28);
        context.bezierCurveTo(455.67, 505.23, 462.85, 497.43, 468.44, 488.49);
        context.bezierCurveTo(479, 475.13, 490.29, 462.36, 501.47, 449.49);
        context.bezierCurveTo(523.36, 427.05, 546.93, 405.84, 574.03, 389.8);
        context.bezierCurveTo(577.36, 387.8, 581.16, 385.96, 582.69, 382.11);
        context.bezierCurveTo(581.47, 382.21, 579.03, 382.44, 577.8, 382.56);
        context.bezierCurveTo(577.95, 382.45, 578.24, 382.23, 578.39, 382.12);
        context.bezierCurveTo(580.91, 380.31, 583.2, 378.19, 585.32, 375.91);
        context.bezierCurveTo(589.35, 371.32, 595.57, 369.09, 598.63, 363.59);
        context.bezierCurveTo(607.28, 363, 614.13, 357.45, 621.44, 353.47);
        context.bezierCurveTo(627.53, 351.11, 633.64, 348.77, 639.49, 345.85);
        context.bezierCurveTo(639.77, 344.29, 640.05, 342.75, 640.36, 341.2);
        context.bezierCurveTo(648.24, 340.75, 654.21, 334.72, 661.32, 331.93);
        context.bezierCurveTo(670.19, 328.81, 679.17, 325.93, 687.96, 322.59);
        context.bezierCurveTo(694.04, 318.81, 701.53, 319.8, 708, 317.05);
        context.bezierCurveTo(720.53, 312.63, 733.65, 310.48, 746.73, 308.44);
        context.bezierCurveTo(757.43, 307.65, 768.08, 306.27, 778.49, 303.71);
        context.bezierCurveTo(785.87, 302.13, 793.53, 301.92, 800.65, 299.23);
        context.bezierCurveTo(818.72, 298.85, 836.57, 295.51, 854.68, 296.35);
        context.closePath();
        context.fillStyle = fillColor45;
        context.fill();


    }

    function drawPath62() {
        context.beginPath();
        context.moveTo(1000.23, 295.85);
        context.bezierCurveTo(1006.53, 297.32, 1013, 297.97, 1019.44, 298.48);
        context.bezierCurveTo(1020.41, 298.45, 1021.41, 298.41, 1022.41, 298.35);
        context.bezierCurveTo(1028.11, 303.85, 1036.55, 303.35, 1043.55, 306.05);
        context.bezierCurveTo(1052.36, 309.32, 1061.48, 311.72, 1070.25, 315.12);
        context.bezierCurveTo(1074.56, 316.76, 1078.6, 319.27, 1083.24, 319.89);
        context.lineTo(1083.33, 319.91);
        context.bezierCurveTo(1092.57, 326.08, 1102.89, 330.35, 1112.84, 335.23);
        context.bezierCurveTo(1122.88, 341.4, 1134.11, 345.39, 1143.96, 351.92);
        context.bezierCurveTo(1149.09, 355.41, 1154.96, 357.64, 1160.08, 361.15);
        context.bezierCurveTo(1179.91, 374.81, 1197.97, 390.93, 1214.21, 408.69);
        context.bezierCurveTo(1214.68, 408.51, 1215.61, 408.11, 1216.08, 407.91);
        context.lineTo(1216.16, 408.76);
        context.bezierCurveTo(1215.92, 413.52, 1220.76, 416.2, 1221.64, 420.71);
        context.bezierCurveTo(1209.99, 409.24, 1197.44, 398.8, 1184.95, 388.28);
        context.bezierCurveTo(1185.12, 387.88, 1185.45, 387.05, 1185.63, 386.65);
        context.bezierCurveTo(1184.56, 381.09, 1179.2, 379.48, 1174.97, 376.97);
        context.bezierCurveTo(1171.23, 372.19, 1165.83, 369.33, 1161.32, 365.39);
        context.bezierCurveTo(1158.97, 363.24, 1155.71, 362.88, 1152.79, 362.07);
        context.bezierCurveTo(1152.39, 361.45, 1151.59, 360.21, 1151.2, 359.6);
        context.bezierCurveTo(1147.64, 358.57, 1144.25, 357.01, 1141.63, 354.37);
        context.bezierCurveTo(1137.96, 350.59, 1132.36, 350.57, 1127.81, 348.48);
        context.bezierCurveTo(1124.47, 347.24, 1122.09, 344.48, 1119.23, 342.53);
        context.bezierCurveTo(1116.55, 341.37, 1113.59, 341.13, 1110.89, 340.08);
        context.bezierCurveTo(1109.77, 338.67, 1108.92, 337.08, 1108, 335.56);
        context.bezierCurveTo(1104.09, 334.55, 1099.6, 334.51, 1096.49, 331.61);
        context.bezierCurveTo(1094.81, 330.25, 1093.33, 328.67, 1091.51, 327.53);
        context.bezierCurveTo(1088.4, 326.76, 1085.17, 326.77, 1082.08, 325.97);
        context.bezierCurveTo(1077.96, 324.35, 1075.89, 319.44, 1071.43, 318.44);
        context.bezierCurveTo(1056.68, 315.95, 1043.72, 305.77, 1028.25, 307.08);
        context.bezierCurveTo(1018.37, 304.05, 1008.47, 301.04, 998.37, 298.79);
        context.bezierCurveTo(998.84, 298.05, 999.76, 296.59, 1000.23, 295.85);
        context.closePath();
        context.fillStyle = fillColor46;
        context.fill();


    }

    function drawPath63() {
        context.beginPath();
        context.moveTo(1022.41, 298.35);
        context.bezierCurveTo(1029.61, 296.09, 1035.67, 301.67, 1042.55, 302.64);
        context.bezierCurveTo(1055.11, 305.04, 1066.11, 312.11, 1078.52, 314.95);
        context.bezierCurveTo(1081.11, 315.31, 1081.89, 318.07, 1083.24, 319.89);
        context.bezierCurveTo(1078.6, 319.27, 1074.56, 316.76, 1070.25, 315.12);
        context.bezierCurveTo(1061.48, 311.72, 1052.36, 309.32, 1043.55, 306.05);
        context.bezierCurveTo(1036.55, 303.35, 1028.11, 303.85, 1022.41, 298.35);
        context.closePath();
        context.fillStyle = fillColor47;
        context.fill();


    }

    function drawPath64() {
        context.beginPath();
        context.moveTo(708.41, 299.15);
        context.bezierCurveTo(712.73, 297.69, 717.35, 298.48, 721.81, 298.44);
        context.bezierCurveTo(721.75, 299.04, 721.63, 300.25, 721.56, 300.85);
        context.bezierCurveTo(721.39, 300.44, 721.03, 299.61, 720.85, 299.2);
        context.bezierCurveTo(712.95, 301.32, 705.05, 303.47, 697.19, 305.76);
        context.bezierCurveTo(681.95, 310.71, 667.25, 317.2, 652.71, 323.85);
        context.bezierCurveTo(643.65, 323.96, 636.32, 330.13, 627.67, 331.99);
        context.bezierCurveTo(630.44, 329.81, 633.33, 327.72, 635.71, 325.08);
        context.bezierCurveTo(635.65, 323.05, 635.32, 321.07, 635.07, 319.07);
        context.bezierCurveTo(636.49, 318.45, 637.96, 317.92, 639.43, 317.4);
        context.bezierCurveTo(639.6, 319.71, 639.76, 322, 639.95, 324.32);
        context.bezierCurveTo(643.25, 323.84, 646.55, 323.12, 649.57, 321.68);
        context.bezierCurveTo(659.53, 317.33, 669.55, 313.13, 679.49, 308.8);
        context.bezierCurveTo(689.12, 305.55, 698.93, 302.83, 708.41, 299.15);
        context.closePath();
        context.fillStyle = fillColor48;
        context.fill();


    }

    function drawPath65() {
        context.beginPath();
        context.moveTo(761.49, 301.52);
        context.bezierCurveTo(770.11, 298.08, 779.6, 299.13, 788.67, 298.32);
        context.bezierCurveTo(792.68, 298.36, 796.67, 298.81, 800.65, 299.23);
        context.bezierCurveTo(793.53, 301.92, 785.87, 302.13, 778.49, 303.71);
        context.bezierCurveTo(768.08, 306.27, 757.43, 307.65, 746.73, 308.44);
        context.bezierCurveTo(746.83, 307.49, 747, 305.6, 747.09, 304.65);
        context.bezierCurveTo(751.97, 304.05, 756.85, 303.25, 761.49, 301.52);
        context.closePath();
        context.fillStyle = fillColor49;
        context.fill();


    }

    function drawPath66() {
        context.beginPath();
        context.moveTo(1015.68, 305.35);
        context.bezierCurveTo(1019.81, 306.21, 1024, 307.12, 1028.25, 307.08);
        context.bezierCurveTo(1043.72, 305.77, 1056.68, 315.95, 1071.43, 318.44);
        context.bezierCurveTo(1075.89, 319.44, 1077.96, 324.35, 1082.08, 325.97);
        context.bezierCurveTo(1085.17, 326.77, 1088.4, 326.76, 1091.51, 327.53);
        context.bezierCurveTo(1093.33, 328.67, 1094.81, 330.25, 1096.49, 331.61);
        context.bezierCurveTo(1099.6, 334.51, 1104.09, 334.55, 1108, 335.56);
        context.bezierCurveTo(1108.92, 337.08, 1109.77, 338.67, 1110.89, 340.08);
        context.bezierCurveTo(1113.59, 341.13, 1116.55, 341.37, 1119.23, 342.53);
        context.bezierCurveTo(1122.09, 344.48, 1124.47, 347.24, 1127.81, 348.48);
        context.bezierCurveTo(1132.36, 350.57, 1137.96, 350.59, 1141.63, 354.37);
        context.bezierCurveTo(1144.25, 357.01, 1147.64, 358.57, 1151.2, 359.6);
        context.bezierCurveTo(1151.59, 360.21, 1152.39, 361.45, 1152.79, 362.07);
        context.bezierCurveTo(1155.71, 362.88, 1158.97, 363.24, 1161.32, 365.39);
        context.bezierCurveTo(1165.83, 369.33, 1171.23, 372.19, 1174.97, 376.97);
        context.bezierCurveTo(1179.2, 379.48, 1184.56, 381.09, 1185.63, 386.65);
        context.bezierCurveTo(1185.45, 387.05, 1185.12, 387.88, 1184.95, 388.28);
        context.bezierCurveTo(1184.77, 388.68, 1184.43, 389.47, 1184.25, 389.87);
        context.bezierCurveTo(1180.57, 387.92, 1177.45, 384.79, 1173.23, 384.05);
        context.bezierCurveTo(1168.65, 383.69, 1166.09, 379.68, 1162.71, 377.2);
        context.bezierCurveTo(1154.47, 370.08, 1144.36, 365.71, 1136.03, 358.75);
        context.bezierCurveTo(1131.4, 355.37, 1125.49, 354.49, 1120.84, 351.17);
        context.bezierCurveTo(1116.13, 347.77, 1110.24, 346.91, 1105.33, 343.93);
        context.bezierCurveTo(1098.96, 340.25, 1092.29, 337.12, 1085.56, 334.17);
        context.bezierCurveTo(1079.71, 331.63, 1074.36, 328.03, 1068.27, 326.07);
        context.bezierCurveTo(1060.88, 323.76, 1053.96, 319.91, 1046.16, 319.15);
        context.bezierCurveTo(1045.77, 318.47, 1045.01, 317.13, 1044.63, 316.45);
        context.bezierCurveTo(1037.68, 315.19, 1030.69, 312.52, 1023.56, 314.04);
        context.bezierCurveTo(1023.6, 313.05, 1023.65, 311.09, 1023.69, 310.11);
        context.bezierCurveTo(1020.71, 309.11, 1017.29, 308.39, 1015.68, 305.35);
        context.closePath();
        context.fillStyle = fillColor50;
        context.fill();


    }

    function drawPath67() {
        context.beginPath();
        context.moveTo(1023.56, 314.04);
        context.bezierCurveTo(1030.69, 312.52, 1037.68, 315.19, 1044.63, 316.45);
        context.bezierCurveTo(1045.01, 317.13, 1045.77, 318.47, 1046.16, 319.15);
        context.bezierCurveTo(1053.96, 319.91, 1060.88, 323.76, 1068.27, 326.07);
        context.bezierCurveTo(1074.36, 328.03, 1079.71, 331.63, 1085.56, 334.17);
        context.bezierCurveTo(1092.29, 337.12, 1098.96, 340.25, 1105.33, 343.93);
        context.bezierCurveTo(1110.24, 346.91, 1116.13, 347.77, 1120.84, 351.17);
        context.bezierCurveTo(1125.49, 354.49, 1131.4, 355.37, 1136.03, 358.75);
        context.bezierCurveTo(1144.36, 365.71, 1154.47, 370.08, 1162.71, 377.2);
        context.bezierCurveTo(1166.09, 379.68, 1168.65, 383.69, 1173.23, 384.05);
        context.bezierCurveTo(1173.44, 384.88, 1173.87, 386.55, 1174.08, 387.37);
        context.bezierCurveTo(1181.24, 391.51, 1186.48, 398.04, 1193.09, 402.89);
        context.bezierCurveTo(1198.97, 407.24, 1202.44, 413.93, 1208.09, 418.55);
        context.bezierCurveTo(1211.32, 421.21, 1214.45, 424.07, 1216.71, 427.65);
        context.bezierCurveTo(1220.4, 433.43, 1225.83, 437.76, 1229.92, 443.21);
        context.bezierCurveTo(1232.73, 447.07, 1236.88, 450.27, 1237.43, 455.35);
        context.bezierCurveTo(1231.21, 452, 1228.4, 445.2, 1223.29, 440.67);
        context.bezierCurveTo(1216.21, 432.63, 1208.71, 424.97, 1201.92, 416.68);
        context.bezierCurveTo(1196, 409.68, 1188.36, 404.47, 1182.31, 397.63);
        context.bezierCurveTo(1177.59, 392.47, 1171.29, 389.17, 1166.23, 384.41);
        context.bezierCurveTo(1158.89, 377.24, 1149.85, 372.23, 1141.29, 366.72);
        context.bezierCurveTo(1134.44, 361.77, 1126.01, 359.91, 1118.73, 355.75);
        context.bezierCurveTo(1114.07, 352.97, 1109.03, 350.96, 1103.89, 349.27);
        context.bezierCurveTo(1098.85, 348.01, 1097.32, 341.76, 1092.12, 340.77);
        context.bezierCurveTo(1085.79, 338.77, 1079.69, 336.09, 1074.03, 332.63);
        context.bezierCurveTo(1067, 328.43, 1058.85, 327.11, 1051.15, 324.77);
        context.bezierCurveTo(1045.75, 323.23, 1041.59, 318.97, 1036.12, 317.64);
        context.bezierCurveTo(1031.91, 316.52, 1027.71, 315.37, 1023.56, 314.04);
        context.closePath();
        context.fillStyle = fillColor51;
        context.fill();

    }

    function drawPath68() {
        context.beginPath();
        context.moveTo(609.97, 331.27);
        context.bezierCurveTo(617.95, 326.4, 626.99, 323.75, 635.07, 319.07);
        context.bezierCurveTo(635.32, 321.07, 635.65, 323.05, 635.71, 325.08);
        context.bezierCurveTo(633.33, 327.72, 630.44, 329.81, 627.67, 331.99);
        context.bezierCurveTo(624.93, 333.4, 622.21, 334.83, 619.45, 336.16);
        context.bezierCurveTo(611.51, 335.69, 606.44, 342.75, 599.2, 344.75);
        context.bezierCurveTo(591.65, 347.8, 586.31, 354.27, 579.11, 357.95);
        context.bezierCurveTo(572.85, 361.27, 569.13, 367.47, 565.39, 373.19);
        context.bezierCurveTo(560.68, 375, 556.29, 377.51, 551.77, 379.71);
        context.bezierCurveTo(551.09, 378.35, 550.37, 377.03, 549.8, 375.64);
        context.bezierCurveTo(551.29, 374.43, 552.92, 373.39, 554.52, 372.32);
        context.bezierCurveTo(556.95, 371.48, 559.39, 370.72, 561.84, 369.95);
        context.bezierCurveTo(565.29, 362.2, 571.01, 355.91, 576.91, 349.95);
        context.bezierCurveTo(581.83, 348.85, 586, 346.07, 588.36, 341.55);
        context.bezierCurveTo(591.4, 341.07, 594.12, 339.64, 596.6, 337.88);
        context.bezierCurveTo(600.71, 334.99, 605.63, 333.69, 609.97, 331.27);
        context.closePath();
        context.fillStyle = fillColor52;
        context.fill();


    }

    function drawPath69() {
        context.beginPath();
        context.moveTo(1083.33, 319.91);
        context.bezierCurveTo(1088.57, 319.84, 1093.79, 321.23, 1097.8, 324.75);
        context.bezierCurveTo(1103.77, 329.96, 1112.09, 330.51, 1118.68, 334.68);
        context.bezierCurveTo(1123.65, 337.76, 1128.88, 340.45, 1134.53, 342.05);
        context.bezierCurveTo(1142.28, 344.49, 1146.83, 352.17, 1154.51, 354.68);
        context.bezierCurveTo(1161.49, 356.84, 1166.08, 362.93, 1172.39, 366.36);
        context.bezierCurveTo(1181.12, 373.13, 1189.61, 380.23, 1198.29, 387.09);
        context.bezierCurveTo(1201.37, 390.17, 1203.39, 394.29, 1207.11, 396.77);
        context.bezierCurveTo(1210.88, 399.75, 1217.07, 401.95, 1216.08, 407.91);
        context.bezierCurveTo(1215.61, 408.11, 1214.68, 408.51, 1214.21, 408.69);
        context.bezierCurveTo(1197.97, 390.93, 1179.91, 374.81, 1160.08, 361.15);
        context.bezierCurveTo(1154.96, 357.64, 1149.09, 355.41, 1143.96, 351.92);
        context.bezierCurveTo(1134.11, 345.39, 1122.88, 341.4, 1112.84, 335.23);
        context.bezierCurveTo(1102.89, 330.35, 1092.57, 326.08, 1083.33, 319.91);
        context.closePath();
        context.fillStyle = fillColor53;
        context.fill();


    }

    function drawPath70() {
        context.beginPath();
        context.moveTo(1109.21, 319.32);
        context.bezierCurveTo(1112.48, 320, 1115.84, 320.73, 1118.57, 322.81);
        context.bezierCurveTo(1125.97, 328.16, 1135.28, 329.68, 1143, 334.45);
        context.bezierCurveTo(1152.03, 340.32, 1161.76, 345.01, 1170.99, 350.55);
        context.bezierCurveTo(1175.37, 353.71, 1180.81, 355.72, 1183.63, 360.64);
        context.bezierCurveTo(1190.23, 369.77, 1201.91, 373.69, 1207.63, 383.52);
        context.bezierCurveTo(1206.51, 383.48, 1204.28, 383.4, 1203.16, 383.36);
        context.bezierCurveTo(1198.83, 376.12, 1190.41, 373.25, 1185.17, 366.89);
        context.bezierCurveTo(1179.6, 360.49, 1171.56, 357.29, 1164.71, 352.57);
        context.bezierCurveTo(1159.96, 349.29, 1153.63, 347.95, 1150.69, 342.53);
        context.bezierCurveTo(1143.08, 340.84, 1137.48, 335.03, 1130.25, 332.44);
        context.bezierCurveTo(1123.43, 329.77, 1117.01, 326.21, 1110.48, 322.92);
        context.bezierCurveTo(1110.17, 322.03, 1109.53, 320.23, 1109.21, 319.32);
        context.closePath();
        context.fillStyle = fillColor54;
        context.fill();


    }

    function drawPath71() {
        context.beginPath();
        context.moveTo(627.67, 331.99);
        context.bezierCurveTo(636.32, 330.13, 643.65, 323.96, 652.71, 323.85);
        context.bezierCurveTo(653.17, 324.56, 654.11, 325.99, 654.57, 326.71);
        context.bezierCurveTo(642.92, 328.04, 632.39, 333.85, 622.51, 339.83);
        context.bezierCurveTo(620.05, 341.31, 617.09, 341.33, 614.35, 341.75);
        context.bezierCurveTo(616.01, 339.85, 617.68, 337.97, 619.45, 336.16);
        context.bezierCurveTo(622.21, 334.83, 624.93, 333.4, 627.67, 331.99);
        context.closePath();
        context.fillStyle = fillColor55;
        context.fill();


    }

    function drawPath72() {
        context.beginPath();
        context.moveTo(819.87, 325.27);
        context.bezierCurveTo(821.84, 323.76, 824.03, 322.47, 826.63, 322.6);
        context.bezierCurveTo(834.04, 322.48, 841.8, 321.32, 848.92, 324.05);
        context.bezierCurveTo(839.23, 324.35, 829.55, 324.99, 819.87, 325.27);
        context.closePath();
        context.fillStyle = fillColor56;
        context.fill();


    }

    function drawPath73() {
        context.beginPath();
        context.moveTo(819.87, 325.27);
        context.bezierCurveTo(829.55, 324.99, 839.23, 324.35, 848.92, 324.05);
        context.bezierCurveTo(868.51, 326.69, 888.29, 323.72, 907.99, 324.84);
        context.bezierCurveTo(958.97, 327.96, 1010.16, 335.21, 1058.6, 351.97);
        context.bezierCurveTo(1056.99, 352.49, 1055.4, 353.01, 1053.83, 353.55);
        context.bezierCurveTo(1054.03, 355.01, 1054.25, 356.48, 1054.49, 357.95);
        context.bezierCurveTo(1049.45, 356.87, 1044.73, 354.84, 1039.92, 353.09);
        context.bezierCurveTo(1001.29, 341.8, 961.36, 335.51, 921.28, 332.4);
        context.bezierCurveTo(897.35, 329.89, 873.27, 331.69, 849.29, 330.51);
        context.bezierCurveTo(838.23, 330.19, 827.2, 331.53, 816.16, 331.4);
        context.bezierCurveTo(812.73, 331.04, 809.68, 329.45, 807.69, 326.63);
        context.bezierCurveTo(811.75, 326.23, 815.83, 325.85, 819.87, 325.27);
        context.closePath();
        context.fillStyle = fillColor57;
        context.fill();


    }

    function drawPath74() {
        context.beginPath();
        context.moveTo(736.12, 336.77);
        context.bezierCurveTo(759.71, 331.72, 783.72, 329.01, 807.69, 326.63);
        context.bezierCurveTo(809.68, 329.45, 812.73, 331.04, 816.16, 331.4);
        context.bezierCurveTo(805.45, 330.49, 794.81, 332.25, 784.2, 333.32);
        context.bezierCurveTo(775.68, 334.55, 767.13, 335.6, 758.8, 337.77);
        context.bezierCurveTo(741.36, 340.71, 723.47, 342.65, 707.04, 349.59);
        context.bezierCurveTo(694.68, 355.67, 681.25, 359.05, 668.64, 364.49);
        context.bezierCurveTo(659.67, 368.29, 650.64, 372.05, 642.01, 376.63);
        context.bezierCurveTo(641.84, 376.32, 641.51, 375.69, 641.33, 375.39);
        context.bezierCurveTo(636.57, 380.16, 630.08, 382.39, 624.36, 385.71);
        context.bezierCurveTo(617.91, 389.49, 611.36, 393.11, 605.11, 397.21);
        context.bezierCurveTo(602.19, 399.15, 599.21, 401, 596.28, 402.92);
        context.bezierCurveTo(592.32, 405.52, 588.31, 408.04, 584.4, 410.73);
        context.bezierCurveTo(582.88, 409.13, 581.35, 407.53, 579.83, 405.93);
        context.bezierCurveTo(599.99, 391.72, 621.79, 380.05, 643.95, 369.32);
        context.bezierCurveTo(655.95, 364.27, 667.88, 359.03, 680.16, 354.72);
        context.bezierCurveTo(690.96, 350.31, 702.57, 348.33, 713.25, 343.64);
        context.bezierCurveTo(720.81, 341.17, 728.31, 338.4, 736.12, 336.77);
        context.closePath();
        context.fillStyle = fillColor58;
        context.fill();


    }

    function drawPath75() {
        context.beginPath();
        context.moveTo(1187.69, 332.21);
        context.bezierCurveTo(1188.96, 331.29, 1190.27, 330.4, 1191.57, 329.49);
        context.bezierCurveTo(1191.92, 330.59, 1192.28, 331.69, 1192.67, 332.8);
        context.bezierCurveTo(1193.11, 332.29, 1193.97, 331.29, 1194.4, 330.8);
        context.bezierCurveTo(1196.43, 332.15, 1198.47, 333.51, 1200.52, 334.88);
        context.bezierCurveTo(1200.41, 333.28, 1200.33, 331.68, 1200.27, 330.09);
        context.bezierCurveTo(1201.04, 330.4, 1202.57, 331.01, 1203.35, 331.32);
        context.bezierCurveTo(1206.47, 336.15, 1208.51, 341.63, 1212.13, 346.15);
        context.bezierCurveTo(1214.45, 344.28, 1216.4, 341.11, 1219.72, 341.25);
        context.bezierCurveTo(1220.21, 344.43, 1220.36, 347.63, 1220.6, 350.83);
        context.bezierCurveTo(1225.31, 352.85, 1229.09, 356.67, 1234.19, 357.88);
        context.bezierCurveTo(1237.35, 358.71, 1239.87, 360.89, 1242.15, 363.15);
        context.bezierCurveTo(1241.88, 369.84, 1236.83, 374.83, 1232.11, 378.97);
        context.bezierCurveTo(1219.23, 361.68, 1203.36, 346.92, 1187.69, 332.21);
        context.closePath();
        context.fillStyle = fillColor59;
        context.fill();


    }

    function drawPath76() {
        context.beginPath();
        context.moveTo(816.16, 331.4);
        context.bezierCurveTo(827.2, 331.53, 838.23, 330.19, 849.29, 330.51);
        context.bezierCurveTo(873.27, 331.69, 897.35, 329.89, 921.28, 332.4);
        context.bezierCurveTo(961.36, 335.51, 1001.29, 341.8, 1039.92, 353.09);
        context.bezierCurveTo(1044.73, 354.84, 1049.45, 356.87, 1054.49, 357.95);
        context.bezierCurveTo(1068.91, 361.53, 1082.71, 367.12, 1096.28, 373.07);
        context.bezierCurveTo(1095.72, 373.64, 1094.61, 374.76, 1094.05, 375.32);
        context.bezierCurveTo(1094.01, 376.53, 1094, 377.76, 1093.99, 378.99);
        context.bezierCurveTo(1091.31, 380.45, 1088.77, 382.17, 1086.64, 384.35);
        context.bezierCurveTo(1072.47, 380.25, 1058.44, 375.56, 1043.92, 372.83);
        context.bezierCurveTo(1039.49, 371.69, 1035.24, 369.88, 1030.67, 369.48);
        context.bezierCurveTo(1023.88, 368.71, 1017.41, 366.47, 1010.69, 365.41);
        context.bezierCurveTo(997.32, 363.87, 984.31, 360.12, 970.93, 358.56);
        context.bezierCurveTo(895.29, 348.67, 818.17, 349.6, 742.89, 362);
        context.bezierCurveTo(713.11, 367.36, 683.47, 373.97, 654.73, 383.57);
        context.bezierCurveTo(647.84, 384.76, 641.71, 388.27, 634.99, 389.99);
        context.bezierCurveTo(625.79, 392.65, 617.43, 397.71, 608.01, 399.59);
        context.bezierCurveTo(607.29, 399, 605.83, 397.8, 605.11, 397.21);
        context.bezierCurveTo(611.36, 393.11, 617.91, 389.49, 624.36, 385.71);
        context.bezierCurveTo(630.08, 382.39, 636.57, 380.16, 641.33, 375.39);
        context.bezierCurveTo(641.51, 375.69, 641.84, 376.32, 642.01, 376.63);
        context.bezierCurveTo(650.64, 372.05, 659.67, 368.29, 668.64, 364.49);
        context.bezierCurveTo(681.25, 359.05, 694.68, 355.67, 707.04, 349.59);
        context.bezierCurveTo(723.47, 342.65, 741.36, 340.71, 758.8, 337.77);
        context.bezierCurveTo(767.13, 335.6, 775.68, 334.55, 784.2, 333.32);
        context.bezierCurveTo(794.81, 332.25, 805.45, 330.49, 816.16, 331.4);
        context.closePath();
        context.fillStyle = fillColor60;
        context.fill();


    }

    function drawPath77() {
        context.beginPath();
        context.moveTo(599.2, 344.75);
        context.bezierCurveTo(606.44, 342.75, 611.51, 335.69, 619.45, 336.16);
        context.bezierCurveTo(617.68, 337.97, 616.01, 339.85, 614.35, 341.75);
        context.bezierCurveTo(610.32, 341.4, 608.13, 344.31, 607.27, 347.89);
        context.bezierCurveTo(604.17, 348.25, 601.08, 348.57, 597.99, 348.85);
        context.bezierCurveTo(598.01, 349.23, 598.09, 349.99, 598.12, 350.36);
        context.bezierCurveTo(590.53, 354.12, 583.91, 359.35, 576.83, 363.92);
        context.bezierCurveTo(576.2, 371.77, 569.55, 376.92, 563.04, 380.17);
        context.bezierCurveTo(561.05, 381.33, 558.91, 379.89, 556.95, 379.57);
        context.bezierCurveTo(559.79, 377.51, 562.79, 375.6, 565.39, 373.19);
        context.bezierCurveTo(569.13, 367.47, 572.85, 361.27, 579.11, 357.95);
        context.bezierCurveTo(586.31, 354.27, 591.65, 347.8, 599.2, 344.75);
        context.closePath();
        context.fillStyle = fillColor61;
        context.fill();


    }

    function drawPath78() {
        context.beginPath();
        context.moveTo(563.75, 360.09);
        context.bezierCurveTo(568.99, 352.52, 576.33, 346.79, 583.33, 340.95);
        context.bezierCurveTo(584.6, 341.09, 587.11, 341.4, 588.36, 341.55);
        context.bezierCurveTo(586, 346.07, 581.83, 348.85, 576.91, 349.95);
        context.bezierCurveTo(571.01, 355.91, 565.29, 362.2, 561.84, 369.95);
        context.bezierCurveTo(559.39, 370.72, 556.95, 371.48, 554.52, 372.32);
        context.bezierCurveTo(554.57, 371.55, 554.67, 369.97, 554.71, 369.2);
        context.bezierCurveTo(556.19, 364.84, 561.13, 363.53, 563.75, 360.09);
        context.closePath();
        context.fillStyle = fillColor62;
        context.fill();


    }

    function drawPath79() {
        context.beginPath();
        context.moveTo(629.12, 343.64);
        context.bezierCurveTo(632.09, 340.72, 636.59, 341.65, 640.36, 341.2);
        context.bezierCurveTo(640.05, 342.75, 639.77, 344.29, 639.49, 345.85);
        context.bezierCurveTo(633.64, 348.77, 627.53, 351.11, 621.44, 353.47);
        context.bezierCurveTo(614.13, 357.45, 607.28, 363, 598.63, 363.59);
        context.bezierCurveTo(595.57, 369.09, 589.35, 371.32, 585.32, 375.91);
        context.bezierCurveTo(583.2, 378.19, 580.91, 380.31, 578.39, 382.12);
        context.bezierCurveTo(580.71, 373.01, 589.6, 368.57, 595.59, 362.17);
        context.bezierCurveTo(599.96, 357.44, 607.15, 357.57, 611.76, 353.19);
        context.bezierCurveTo(616.59, 348.25, 624.21, 348.41, 629.12, 343.64);
        context.closePath();
        context.fillStyle = fillColor63;
        context.fill();


    }

    function drawPath80() {
        context.beginPath();
        context.moveTo(697.36, 346.81);
        context.bezierCurveTo(702.69, 345.79, 707.6, 341.93, 713.25, 343.64);
        context.bezierCurveTo(702.57, 348.33, 690.96, 350.31, 680.16, 354.72);
        context.bezierCurveTo(667.88, 359.03, 655.95, 364.27, 643.95, 369.32);
        context.bezierCurveTo(645.19, 366.68, 647.35, 364.69, 650.16, 363.88);
        context.bezierCurveTo(658.77, 361.05, 666.85, 356.8, 675.55, 354.16);
        context.bezierCurveTo(682.88, 351.89, 689.77, 348.27, 697.36, 346.81);
        context.closePath();
        context.fillStyle = fillColor64;
        context.fill();


    }

    function drawPath81() {
        context.beginPath();
        context.moveTo(128.51, 987.49);
        context.bezierCurveTo(137.16, 986.44, 146.63, 986.31, 154.32, 990.99);
        context.bezierCurveTo(156.51, 994.59, 158.53, 998.45, 159.56, 1002.57);
        context.bezierCurveTo(159.95, 1009.85, 157.77, 1017.89, 152.29, 1022.95);
        context.bezierCurveTo(145.59, 1025.13, 138.2, 1025.79, 131.19, 1024.88);
        context.bezierCurveTo(125.27, 1024.11, 122.88, 1017.95, 119.53, 1013.83);
        context.bezierCurveTo(116.31, 1010.39, 118.52, 1005.75, 119.08, 1001.77);
        context.bezierCurveTo(119.45, 995.85, 123.45, 990.35, 128.51, 987.49);
        context.closePath();
        context.fillStyle = fillColor64;
        context.fill();


    }

    function drawPath82() {
        context.beginPath();
        context.moveTo(598.12, 350.36);
        context.bezierCurveTo(598.87, 352.07, 599.73, 353.75, 600.59, 355.41);
        context.bezierCurveTo(597.08, 356.36, 593.36, 357.49, 591.32, 360.77);
        context.bezierCurveTo(587.85, 365.85, 582.61, 369.13, 577.11, 371.65);
        context.bezierCurveTo(576.41, 374.05, 575.96, 376.56, 574.83, 378.8);
        context.bezierCurveTo(572.88, 380.45, 570.57, 381.6, 568.37, 382.87);
        context.bezierCurveTo(569.33, 383.97, 570.31, 385.09, 571.28, 386.21);
        context.bezierCurveTo(550.76, 398.95, 531.33, 413.68, 514.19, 430.72);
        context.bezierCurveTo(512.43, 428, 509.61, 426.89, 506.55, 426.52);
        context.bezierCurveTo(505.95, 426.15, 504.75, 425.43, 504.15, 425.07);
        context.bezierCurveTo(509.28, 422.07, 514.11, 418.56, 518.29, 414.33);
        context.bezierCurveTo(518.01, 413.16, 517.75, 411.99, 517.48, 410.83);
        context.bezierCurveTo(518.07, 410.39, 519.24, 409.51, 519.83, 409.07);
        context.bezierCurveTo(521.4, 408.76, 522.99, 408.49, 524.57, 408.23);
        context.bezierCurveTo(528.84, 401.17, 538.75, 399.64, 541.28, 391.4);
        context.bezierCurveTo(546.39, 387.31, 551.61, 383.37, 556.95, 379.57);
        context.bezierCurveTo(558.91, 379.89, 561.05, 381.33, 563.04, 380.17);
        context.bezierCurveTo(569.55, 376.92, 576.2, 371.77, 576.83, 363.92);
        context.bezierCurveTo(583.91, 359.35, 590.53, 354.12, 598.12, 350.36);
        context.closePath();
        context.fillStyle = fillColor65;
        context.fill();


    }

    function drawPath83() {
        context.beginPath();
        context.moveTo(1053.83, 353.55);
        context.bezierCurveTo(1055.4, 353.01, 1056.99, 352.49, 1058.6, 351.97);
        context.bezierCurveTo(1065.95, 354.09, 1072.95, 357.24, 1080.24, 359.59);
        context.bezierCurveTo(1102.85, 366.55, 1123.52, 378.51, 1143.27, 391.35);
        context.bezierCurveTo(1158.45, 401.25, 1173.39, 411.85, 1186.45, 424.47);
        context.bezierCurveTo(1187.21, 424.52, 1188.75, 424.6, 1189.51, 424.65);
        context.bezierCurveTo(1196.53, 432, 1203.45, 439.47, 1210.01, 447.24);
        context.bezierCurveTo(1222.8, 462.35, 1233.41, 479.08, 1244.72, 495.27);
        context.bezierCurveTo(1252.69, 507.63, 1261.81, 519.53, 1266.72, 533.55);
        context.bezierCurveTo(1271.64, 545.08, 1274.89, 557.2, 1278.95, 569.04);
        context.bezierCurveTo(1278.57, 570.93, 1278.29, 572.84, 1278.12, 574.77);
        context.bezierCurveTo(1278.65, 568.37, 1275.08, 562.87, 1272.21, 557.47);
        context.bezierCurveTo(1264.52, 542.57, 1257.64, 527.24, 1249.24, 512.72);
        context.bezierCurveTo(1241.96, 498.09, 1233.31, 484.09, 1223.95, 470.69);
        context.bezierCurveTo(1216.05, 458.85, 1206.2, 448.48, 1196.27, 438.35);
        context.bezierCurveTo(1190.8, 432.68, 1184.31, 428.23, 1177.99, 423.6);
        context.bezierCurveTo(1165.85, 411.87, 1151.48, 402.83, 1137.69, 393.2);
        context.bezierCurveTo(1124.52, 385.29, 1110.31, 379.29, 1096.28, 373.07);
        context.bezierCurveTo(1082.71, 367.12, 1068.91, 361.53, 1054.49, 357.95);
        context.bezierCurveTo(1054.25, 356.48, 1054.03, 355.01, 1053.83, 353.55);
        context.closePath();
        context.fillStyle = fillColor66;
        context.fill();
        


    }

    function drawPath84() {
        context.beginPath();
        context.moveTo(534.56, 365.09);
        context.bezierCurveTo(536.33, 364.09, 538.4, 364.4, 540.35, 364.39);
        context.bezierCurveTo(539.19, 365.81, 538, 367.23, 536.68, 368.51);
        context.bezierCurveTo(525.97, 374.31, 516.8, 382.43, 507.2, 389.83);
        context.bezierCurveTo(496.4, 398.05, 486.96, 407.83, 476.85, 416.85);
        context.bezierCurveTo(464.75, 427.96, 453.89, 440.29, 442.83, 452.4);
        context.bezierCurveTo(438.17, 458.75, 432.45, 464.24, 427.79, 470.6);
        context.bezierCurveTo(421.33, 478.43, 415.61, 486.81, 409.55, 494.95);
        context.bezierCurveTo(407.53, 497.81, 405.56, 500.71, 403.64, 503.64);
        context.bezierCurveTo(401.43, 506.97, 399.31, 510.37, 397.16, 513.77);
        context.bezierCurveTo(394.48, 517.84, 392.15, 522.13, 389.76, 526.39);
        context.bezierCurveTo(388.32, 525.73, 386.89, 525.08, 385.47, 524.44);
        context.bezierCurveTo(414.12, 474.71, 451.09, 429.65, 494.84, 392.45);
        context.bezierCurveTo(507.49, 382.56, 519.84, 371.84, 534.56, 365.09);
        context.closePath();
        context.fillStyle = fillColor67;
        context.fill();


    }

    function drawPath85() {
        context.beginPath();
        context.moveTo(536.68, 368.51);
        context.bezierCurveTo(539.03, 368.21, 541.39, 368.03, 543.76, 367.87);
        context.bezierCurveTo(528.04, 379.12, 513.19, 391.53, 498.43, 404);
        context.bezierCurveTo(494.01, 407.68, 489.84, 411.69, 484.95, 414.75);
        context.bezierCurveTo(481.05, 420.07, 475.13, 423.32, 470.47, 427.92);
        context.bezierCurveTo(465.6, 433.33, 461.76, 439.68, 456.11, 444.36);
        context.bezierCurveTo(451.12, 448.69, 446.96, 453.85, 443.12, 459.2);
        context.bezierCurveTo(438.92, 465.11, 432.76, 469.33, 429, 475.59);
        context.bezierCurveTo(424.49, 483.29, 417.2, 488.67, 411.55, 495.45);
        context.bezierCurveTo(411.04, 495.32, 410.05, 495.07, 409.55, 494.95);
        context.bezierCurveTo(415.61, 486.81, 421.33, 478.43, 427.79, 470.6);
        context.bezierCurveTo(432.45, 464.24, 438.17, 458.75, 442.83, 452.4);
        context.bezierCurveTo(453.89, 440.29, 464.75, 427.96, 476.85, 416.85);
        context.bezierCurveTo(486.96, 407.83, 496.4, 398.05, 507.2, 389.83);
        context.bezierCurveTo(516.8, 382.43, 525.97, 374.31, 536.68, 368.51);
        context.closePath();
        context.fillStyle = fillColor68;
        context.fill();


    }

    function drawPath86() {
        context.beginPath();
        context.moveTo(532.6, 383.27);
        context.bezierCurveTo(539.61, 378.05, 546.6, 372.63, 554.71, 369.2);
        context.bezierCurveTo(554.67, 369.97, 554.57, 371.55, 554.52, 372.32);
        context.bezierCurveTo(552.92, 373.39, 551.29, 374.43, 549.8, 375.64);
        context.bezierCurveTo(550.37, 377.03, 551.09, 378.35, 551.77, 379.71);
        context.bezierCurveTo(516.75, 399.71, 487.57, 428.41, 461.4, 458.8);
        context.bezierCurveTo(458.43, 462.31, 455.55, 465.91, 452.8, 469.6);
        context.bezierCurveTo(452.51, 468.61, 451.91, 466.61, 451.61, 465.61);
        context.bezierCurveTo(450.77, 464.97, 449.93, 464.33, 449.11, 463.71);
        context.lineTo(447.52, 462.57);
        context.bezierCurveTo(450.97, 461.05, 453.11, 458, 454.44, 454.6);
        context.bezierCurveTo(456.29, 452.76, 458.11, 450.87, 459.85, 448.93);
        context.bezierCurveTo(460.96, 448.31, 462.07, 447.68, 463.19, 447.07);
        context.bezierCurveTo(463.73, 445.91, 464.29, 444.73, 464.87, 443.59);
        context.bezierCurveTo(470.55, 440.39, 473.21, 434.01, 478.51, 430.36);
        context.bezierCurveTo(481.6, 428.12, 484.39, 425.44, 486.37, 422.15);
        context.bezierCurveTo(487.51, 421.53, 488.67, 420.95, 489.81, 420.36);
        context.bezierCurveTo(490.33, 419.09, 490.87, 417.84, 491.4, 416.59);
        context.bezierCurveTo(492.93, 416.09, 494.47, 415.6, 496.01, 415.12);
        context.bezierCurveTo(497.45, 411.96, 499.95, 409.55, 502.97, 407.91);
        context.bezierCurveTo(507.52, 405.63, 511.17, 402.12, 513.56, 397.63);
        context.bezierCurveTo(519.12, 391.95, 525.85, 387.44, 532.6, 383.27);
        context.closePath();
        context.fillStyle = fillColor69;
        context.fill();


    }

    function drawPath87() {
        context.beginPath();
        context.moveTo(1216.24, 377.65);
        context.bezierCurveTo(1216.69, 375.37, 1217.23, 373.11, 1217.77, 370.85);
        context.bezierCurveTo(1233.92, 390.69, 1248.33, 411.93, 1261.49, 433.88);
        context.bezierCurveTo(1259.35, 432.33, 1256.76, 431.13, 1255.56, 428.64);
        context.bezierCurveTo(1253.52, 425.68, 1252.52, 421.52, 1248.85, 420.11);
        context.bezierCurveTo(1248.32, 417.16, 1247.8, 414.05, 1245.51, 411.91);
        context.bezierCurveTo(1235.53, 401.69, 1226.53, 390.45, 1215.55, 381.24);
        context.bezierCurveTo(1215.72, 380.35, 1216.07, 378.55, 1216.24, 377.65);
        context.closePath();
        context.fillStyle = fillColor70;
        context.fill();


    }

    function drawPath88() {
        context.beginPath();
        context.moveTo(551.77, 379.71);
        context.bezierCurveTo(556.29, 377.51, 560.68, 375, 565.39, 373.19);
        context.bezierCurveTo(562.79, 375.6, 559.79, 377.51, 556.95, 379.57);
        context.bezierCurveTo(551.61, 383.37, 546.39, 387.31, 541.28, 391.4);
        context.bezierCurveTo(533.53, 396.56, 526.65, 402.77, 519.83, 409.07);
        context.bezierCurveTo(519.24, 409.51, 518.07, 410.39, 517.48, 410.83);
        context.bezierCurveTo(512.71, 414.49, 508.39, 418.68, 503.92, 422.71);
        context.bezierCurveTo(500.37, 425.67, 496.64, 428.47, 493.61, 431.99);
        context.bezierCurveTo(488.73, 437.69, 482.89, 442.49, 478.2, 448.35);
        context.bezierCurveTo(441.15, 489.52, 412, 537.36, 389.05, 587.64);
        context.bezierCurveTo(373.63, 621.84, 361.44, 657.4, 351.37, 693.52);
        context.bezierCurveTo(353.25, 681.95, 352.73, 669.8, 357.24, 658.79);
        context.bezierCurveTo(364.2, 634.72, 373.88, 611.56, 383.53, 588.48);
        context.bezierCurveTo(383.65, 588.19, 383.88, 587.6, 383.99, 587.32);
        context.bezierCurveTo(391.53, 570.43, 399.83, 553.91, 408.45, 537.56);
        context.bezierCurveTo(409.4, 535.69, 410.41, 533.87, 411.48, 532.07);
        context.bezierCurveTo(423.92, 510.4, 437.33, 489.25, 452.8, 469.6);
        context.bezierCurveTo(455.55, 465.91, 458.43, 462.31, 461.4, 458.8);
        context.bezierCurveTo(487.57, 428.41, 516.75, 399.71, 551.77, 379.71);
        context.closePath();
        context.fillStyle = fillColor71;
        context.fill();


    }

    function drawPath89() {
        context.beginPath();
        context.moveTo(1096.28, 373.07);
        context.bezierCurveTo(1110.31, 379.29, 1124.52, 385.29, 1137.69, 393.2);
        context.bezierCurveTo(1151.48, 402.83, 1165.85, 411.87, 1177.99, 423.6);
        context.bezierCurveTo(1172.17, 422.65, 1167.73, 418.53, 1162.49, 416.2);
        context.bezierCurveTo(1155.84, 413.19, 1149.77, 409.01, 1142.96, 406.36);
        context.bezierCurveTo(1133.73, 402.79, 1125.28, 397.35, 1115.63, 394.88);
        context.bezierCurveTo(1106.15, 390.87, 1096.23, 388.08, 1086.64, 384.35);
        context.bezierCurveTo(1088.77, 382.17, 1091.31, 380.45, 1093.99, 378.99);
        context.bezierCurveTo(1094, 377.76, 1094.01, 376.53, 1094.05, 375.32);
        context.bezierCurveTo(1094.61, 374.76, 1095.72, 373.64, 1096.28, 373.07);
        context.closePath();
        context.fillStyle = fillColor72;
        context.fill();


    }

    function drawPath90() {
        context.beginPath();
        context.moveTo(571.28, 386.21);
        context.bezierCurveTo(573.45, 385, 575.64, 383.8, 577.8, 382.56);
        context.bezierCurveTo(579.03, 382.44, 581.47, 382.21, 582.69, 382.11);
        context.bezierCurveTo(581.16, 385.96, 577.36, 387.8, 574.03, 389.8);
        context.bezierCurveTo(546.93, 405.84, 523.36, 427.05, 501.47, 449.49);
        context.bezierCurveTo(490.29, 462.36, 479, 475.13, 468.44, 488.49);
        context.bezierCurveTo(462.85, 497.43, 455.67, 505.23, 450.29, 514.28);
        context.bezierCurveTo(445.39, 521.88, 440.44, 529.47, 435.84, 537.25);
        context.bezierCurveTo(420.68, 564.25, 406.07, 591.63, 393.65, 620.03);
        context.lineTo(393.89, 618.13);
        context.bezierCurveTo(396.61, 609.21, 400.8, 600.87, 404.37, 592.27);
        context.bezierCurveTo(414.25, 568.03, 428.12, 545.73, 441.13, 523.12);
        context.bezierCurveTo(452.04, 506.71, 462.96, 490.24, 475, 474.6);
        context.bezierCurveTo(486.99, 459.07, 500.08, 444.35, 514.19, 430.72);
        context.bezierCurveTo(531.33, 413.68, 550.76, 398.95, 571.28, 386.21);
        context.closePath();
        context.fillStyle = fillColor73;
        context.fill();


    }

    function drawPath91() {
        context.beginPath();
        context.moveTo(1173.23, 384.05);
        context.bezierCurveTo(1177.45, 384.79, 1180.57, 387.92, 1184.25, 389.87);
        context.lineTo(1185.37, 390.55);
        context.bezierCurveTo(1211.52, 413.2, 1235.48, 438.77, 1254.45, 467.8);
        context.bezierCurveTo(1259.19, 475.29, 1263.95, 482.79, 1268.33, 490.49);
        context.bezierCurveTo(1267.33, 490.56, 1265.35, 490.71, 1264.35, 490.77);
        context.bezierCurveTo(1261.85, 486.67, 1259.59, 482.44, 1257.71, 478.03);
        context.bezierCurveTo(1249.8, 471.72, 1242.27, 464.31, 1237.43, 455.35);
        context.bezierCurveTo(1236.88, 450.27, 1232.73, 447.07, 1229.92, 443.21);
        context.bezierCurveTo(1225.83, 437.76, 1220.4, 433.43, 1216.71, 427.65);
        context.bezierCurveTo(1214.45, 424.07, 1211.32, 421.21, 1208.09, 418.55);
        context.bezierCurveTo(1202.44, 413.93, 1198.97, 407.24, 1193.09, 402.89);
        context.bezierCurveTo(1186.48, 398.04, 1181.24, 391.51, 1174.08, 387.37);
        context.bezierCurveTo(1173.87, 386.55, 1173.44, 384.88, 1173.23, 384.05);
        context.closePath();
        context.fillStyle = fillColor74;
        context.fill();


    }

    function drawPath92() {
        context.beginPath();
        context.moveTo(1208, 383.56);
        context.bezierCurveTo(1208.95, 383.8, 1210.84, 384.27, 1211.79, 384.51);
        context.bezierCurveTo(1219.75, 389.55, 1226.16, 396.61, 1231.39, 404.4);
        context.bezierCurveTo(1237.39, 406.84, 1237.53, 414.15, 1242.2, 418);
        context.bezierCurveTo(1248.13, 423.64, 1251.95, 431.16, 1258.35, 436.36);
        context.bezierCurveTo(1258.75, 437.68, 1259.16, 439, 1259.59, 440.33);
        context.bezierCurveTo(1260.75, 440.89, 1261.92, 441.45, 1263.12, 442.03);
        context.bezierCurveTo(1264.28, 445.77, 1267.13, 448.31, 1270.75, 449.67);
        context.bezierCurveTo(1272.71, 453.15, 1274.93, 456.51, 1276.67, 460.12);
        context.bezierCurveTo(1276.25, 460.89, 1275.43, 462.44, 1275, 463.21);
        context.bezierCurveTo(1273.88, 460.28, 1272.2, 457.59, 1269.81, 455.55);
        context.bezierCurveTo(1265.31, 451.52, 1261.77, 446.6, 1257.79, 442.12);
        context.bezierCurveTo(1252.47, 436.25, 1248.87, 429.05, 1243.07, 423.6);
        context.bezierCurveTo(1234.13, 412.93, 1222.73, 404.41, 1214.96, 392.77);
        context.bezierCurveTo(1212.97, 391.81, 1210.88, 391.05, 1209.15, 389.71);
        context.bezierCurveTo(1208.56, 387.69, 1208.32, 385.61, 1208, 383.56);
        context.closePath();
        context.fillStyle = fillColor75;
        context.fill();


    }

    function drawPath93() {
        context.beginPath();
        context.moveTo(1184.25, 389.87);
        context.bezierCurveTo(1184.43, 389.47, 1184.77, 388.68, 1184.95, 388.28);
        context.bezierCurveTo(1197.44, 398.8, 1209.99, 409.24, 1221.64, 420.71);
        context.bezierCurveTo(1233.95, 433.89, 1246.11, 447.35, 1256.39, 462.2);
        context.bezierCurveTo(1255.91, 462.52, 1254.93, 463.16, 1254.45, 463.48);
        context.bezierCurveTo(1254.45, 464.93, 1254.37, 466.33, 1254.45, 467.8);
        context.bezierCurveTo(1235.48, 438.77, 1211.52, 413.2, 1185.37, 390.55);
        context.lineTo(1184.25, 389.87);
        context.closePath();
        context.fillStyle = fillColor76;
        context.fill();


    }

    function drawPath94() {
        context.beginPath();
        context.moveTo(1293.35, 388.89);
        context.bezierCurveTo(1304, 396.33, 1310.23, 408.27, 1317.03, 418.99);
        context.bezierCurveTo(1322.79, 426.93, 1327.36, 435.65, 1333.33, 443.45);
        context.lineTo(1333.33, 449.25);
        context.bezierCurveTo(1325.2, 436.63, 1317.35, 423.76, 1308, 411.97);
        context.bezierCurveTo(1304.03, 407.24, 1301.67, 400.67, 1295.68, 398.05);
        context.bezierCurveTo(1297.67, 394.72, 1295.17, 391.61, 1293.35, 388.89);
        context.closePath();
        context.fillStyle = fillColor77;
        context.fill();


    }

    function drawPath95() {
        context.beginPath();
        context.moveTo(1295.68, 398.05);
        context.bezierCurveTo(1301.67, 400.67, 1304.03, 407.24, 1308, 411.97);
        context.bezierCurveTo(1317.35, 423.76, 1325.2, 436.63, 1333.33, 449.25);
        context.lineTo(1333.33, 460.6);
        context.bezierCurveTo(1324.32, 446.67, 1315.93, 432.33, 1306.47, 418.69);
        context.bezierCurveTo(1302.85, 413.83, 1298.92, 409.12, 1296.29, 403.61);
        context.bezierCurveTo(1295.28, 401.92, 1295.27, 399.92, 1295.68, 398.05);
        context.closePath();
        context.fillStyle = fillColor78;
        context.fill();


    }

    function drawPath96() {
        context.beginPath();
        context.moveTo(484.95, 414.75);
        context.bezierCurveTo(489.84, 411.69, 494.01, 407.68, 498.43, 404);
        context.bezierCurveTo(499.93, 405.31, 501.45, 406.6, 502.97, 407.91);
        context.bezierCurveTo(499.95, 409.55, 497.45, 411.96, 496.01, 415.12);
        context.bezierCurveTo(494.47, 415.6, 492.93, 416.09, 491.4, 416.59);
        context.bezierCurveTo(490.87, 417.84, 490.33, 419.09, 489.81, 420.36);
        context.bezierCurveTo(488.67, 420.95, 487.51, 421.53, 486.37, 422.15);
        context.bezierCurveTo(484.39, 425.44, 481.6, 428.12, 478.51, 430.36);
        context.bezierCurveTo(473.21, 434.01, 470.55, 440.39, 464.87, 443.59);
        context.bezierCurveTo(464.29, 444.73, 463.73, 445.91, 463.19, 447.07);
        context.bezierCurveTo(462.07, 447.68, 460.96, 448.31, 459.85, 448.93);
        context.bezierCurveTo(458.11, 450.87, 456.29, 452.76, 454.44, 454.6);
        context.bezierCurveTo(453.11, 458, 450.97, 461.05, 447.52, 462.57);
        context.bezierCurveTo(444.11, 464.24, 442.07, 467.53, 439.79, 470.41);
        context.bezierCurveTo(434.8, 476.79, 429.25, 482.87, 425.87, 490.31);
        context.bezierCurveTo(424.6, 490.72, 423.33, 491.15, 422.07, 491.56);
        context.bezierCurveTo(418.16, 497.93, 413.39, 503.93, 411.37, 511.25);
        context.bezierCurveTo(407.71, 513.09, 405.64, 516.76, 405.13, 520.75);
        context.bezierCurveTo(396.85, 529.83, 393.47, 542.55, 384.39, 551.07);
        context.bezierCurveTo(385.83, 545.23, 390.08, 540.76, 392.68, 535.47);
        context.bezierCurveTo(395.83, 529.16, 399.29, 522.91, 401.04, 516.03);
        context.bezierCurveTo(401.91, 512.8, 403.21, 509.73, 404.67, 506.75);
        context.bezierCurveTo(404.41, 505.96, 403.89, 504.41, 403.64, 503.64);
        context.bezierCurveTo(405.56, 500.71, 407.53, 497.81, 409.55, 494.95);
        context.bezierCurveTo(410.05, 495.07, 411.04, 495.32, 411.55, 495.45);
        context.bezierCurveTo(417.2, 488.67, 424.49, 483.29, 429, 475.59);
        context.bezierCurveTo(432.76, 469.33, 438.92, 465.11, 443.12, 459.2);
        context.bezierCurveTo(446.96, 453.85, 451.12, 448.69, 456.11, 444.36);
        context.bezierCurveTo(461.76, 439.68, 465.6, 433.33, 470.47, 427.92);
        context.bezierCurveTo(475.13, 423.32, 481.05, 420.07, 484.95, 414.75);
        context.closePath();
        context.fillStyle = fillColor79;
        context.fill();


    }

    function drawPath97() {
        context.beginPath();
        context.moveTo(522.63, 453.19);
        context.bezierCurveTo(540.13, 435.67, 559.4, 419.92, 579.83, 405.93);
        context.bezierCurveTo(581.35, 407.53, 582.88, 409.13, 584.4, 410.73);
        context.bezierCurveTo(568.28, 422.12, 552.69, 434.35, 538.37, 447.96);
        context.bezierCurveTo(513.12, 470.05, 491.88, 496.28, 471.67, 522.96);
        context.bezierCurveTo(471.69, 522.2, 471.76, 520.68, 471.79, 519.92);
        context.bezierCurveTo(470.08, 527.76, 464.07, 533.33, 460.04, 539.96);
        context.bezierCurveTo(448.61, 557.81, 438.32, 576.37, 428.76, 595.27);
        context.bezierCurveTo(422.87, 607.85, 416.69, 620.31, 412.49, 633.59);
        context.bezierCurveTo(408.91, 641.88, 405.92, 650.43, 403.33, 659.08);
        context.bezierCurveTo(401.44, 657.97, 399.56, 656.88, 397.67, 655.79);
        context.bezierCurveTo(399.09, 651.39, 400.45, 646.96, 402.23, 642.68);
        context.bezierCurveTo(403.29, 641.28, 404.88, 639.84, 404.52, 637.88);
        context.bezierCurveTo(405.07, 630.83, 408.76, 624.47, 411.43, 618.03);
        context.bezierCurveTo(431.25, 569.27, 459.21, 523.88, 493.41, 483.88);
        context.bezierCurveTo(503.03, 473.53, 511.99, 462.53, 522.63, 453.19);
        context.closePath();
        context.fillStyle = fillColor80;
        context.fill();


    }

    function drawPath98() {
        context.beginPath();
        context.moveTo(1216.16, 408.76);
        context.bezierCurveTo(1218.31, 409.68, 1220.56, 410.69, 1221.81, 412.83);
        context.bezierCurveTo(1227.27, 420.61, 1234.87, 426.52, 1240.77, 433.92);
        context.bezierCurveTo(1244.8, 439.63, 1249.24, 445.03, 1253.44, 450.61);
        context.bezierCurveTo(1258, 456.95, 1265.03, 461.43, 1267.83, 468.97);
        context.bezierCurveTo(1265.97, 469.67, 1264.12, 470.36, 1262.29, 471.05);
        context.bezierCurveTo(1260.28, 468.12, 1258.39, 465.13, 1256.39, 462.2);
        context.bezierCurveTo(1246.11, 447.35, 1233.95, 433.89, 1221.64, 420.71);
        context.bezierCurveTo(1220.76, 416.2, 1215.92, 413.52, 1216.16, 408.76);
        context.closePath();
        context.fillStyle = fillColor81;
        context.fill();


    }

    function drawPath99() {
        context.beginPath();
        context.moveTo(503.92, 422.71);
        context.bezierCurveTo(508.39, 418.68, 512.71, 414.49, 517.48, 410.83);
        context.bezierCurveTo(517.75, 411.99, 518.01, 413.16, 518.29, 414.33);
        context.bezierCurveTo(514.11, 418.56, 509.28, 422.07, 504.15, 425.07);
        context.bezierCurveTo(504.75, 425.43, 505.95, 426.15, 506.55, 426.52);
        context.bezierCurveTo(502.01, 427.12, 500.47, 431.93, 497.29, 434.57);
        context.bezierCurveTo(493.49, 437.95, 490.4, 441.97, 487.05, 445.76);
        context.bezierCurveTo(484.95, 448.48, 481.21, 447.95, 478.2, 448.35);
        context.bezierCurveTo(482.89, 442.49, 488.73, 437.69, 493.61, 431.99);
        context.bezierCurveTo(496.64, 428.47, 500.37, 425.67, 503.92, 422.71);
        context.closePath();
        context.fillStyle = fillColor82;
        context.fill();


    }

    function drawPath100() {
        context.beginPath();
        context.moveTo(357.97, 419.07);
        context.bezierCurveTo(359.41, 417.63, 360.83, 416.15, 362.41, 414.85);
        context.bezierCurveTo(364.76, 417.29, 366.45, 420.25, 368.19, 423.15);
        context.bezierCurveTo(349.55, 450.39, 334.25, 479.76, 320.93, 509.92);
        context.bezierCurveTo(310.64, 530.93, 303.29, 553.21, 295.56, 575.25);
        context.bezierCurveTo(293.33, 580.91, 293.04, 587.59, 288.56, 592.11);
        context.lineTo(290.68, 590.68);
        context.bezierCurveTo(284.2, 613.44, 277.13, 636.23, 274.48, 659.83);
        context.bezierCurveTo(273.89, 666.53, 271.32, 673.6, 274.16, 680.12);
        context.bezierCurveTo(278.36, 690.99, 281.56, 702.2, 284.51, 713.45);
        context.bezierCurveTo(286.29, 721.47, 288.69, 729.44, 289, 737.69);
        context.bezierCurveTo(284.24, 730.08, 280.75, 721.69, 279.09, 712.85);
        context.bezierCurveTo(271.4, 685.08, 260.65, 658.17, 247.61, 632.48);
        context.bezierCurveTo(241.68, 622.47, 236.48, 611.99, 229.6, 602.56);
        context.bezierCurveTo(218.03, 585.32, 203.01, 570, 184.75, 559.91);
        context.bezierCurveTo(184.64, 560.32, 184.44, 561.15, 184.33, 561.56);
        context.bezierCurveTo(183.69, 562.19, 182.41, 563.44, 181.77, 564.07);
        context.bezierCurveTo(181.61, 562.17, 181.47, 560.27, 181.33, 558.37);
        context.bezierCurveTo(183.29, 556.92, 185.27, 555.45, 187.23, 554);
        context.bezierCurveTo(210.6, 565.05, 227.28, 586.08, 240.23, 607.85);
        context.bezierCurveTo(251.25, 625.31, 259.05, 644.49, 268.04, 663.01);
        context.bezierCurveTo(268.08, 647.48, 272.23, 632.36, 275.96, 617.39);
        context.bezierCurveTo(281.32, 593.28, 289.36, 569.85, 297.83, 546.68);
        context.bezierCurveTo(314.17, 502.57, 334.67, 459.87, 360.52, 420.53);
        context.bezierCurveTo(359.88, 420.16, 358.61, 419.43, 357.97, 419.07);
        context.closePath();
        context.fillStyle = fillColor83;
        context.fill();


    }

	function drawPath101() {
		//// #c8ccf0ff
		//// Bezier 101 Drawing
		context.beginPath();
		context.moveTo(368.19, 423.15);
		context.bezierCurveTo(369.6, 421.12, 371.08, 419.15, 372.49, 417.12);
		context.bezierCurveTo(369.81, 427.73, 363.19, 436.68, 359.43, 446.85);
		context.bezierCurveTo(357.04, 453.48, 353.04, 459.53, 352.01, 466.61);
		context.bezierCurveTo(350.75, 474.73, 344.88, 480.96, 341.93, 488.44);
		context.bezierCurveTo(335.33, 505.09, 331.12, 522.56, 324.65, 539.27);
		context.bezierCurveTo(318.19, 561.12, 313.48, 583.43, 306.95, 605.27);
		context.bezierCurveTo(304.61, 613.77, 303.77, 622.61, 301.55, 631.15);
		context.bezierCurveTo(298.31, 643.79, 297.64, 656.95, 293.91, 669.47);
		context.bezierCurveTo(291.83, 682.87, 289.15, 696.17, 287.43, 709.64);
		context.bezierCurveTo(284.17, 700.49, 279.28, 691.95, 277.29, 682.37);
		context.bezierCurveTo(275.05, 675.08, 273.19, 667.51, 274.48, 659.83);
		context.bezierCurveTo(277.13, 636.23, 284.2, 613.44, 290.68, 590.68);
		context.lineTo(288.56, 592.11);
		context.bezierCurveTo(293.04, 587.59, 293.33, 580.91, 295.56, 575.25);
		context.bezierCurveTo(303.29, 553.21, 310.64, 530.93, 320.93, 509.92);
		context.bezierCurveTo(334.25, 479.76, 349.55, 450.39, 368.19, 423.15);
		context.closePath();
		context.fillStyle = fillColor84;
		context.fill();


	}
	
	function drawPath102() {
		//// #f7b6e0ff
		//// Bezier 102 Drawing
		context.beginPath();
		context.moveTo(497.29, 434.57);
		context.bezierCurveTo(500.47, 431.93, 502.01, 427.12, 506.55, 426.52);
		context.bezierCurveTo(509.61, 426.89, 512.43, 428, 514.19, 430.72);
		context.bezierCurveTo(500.08, 444.35, 486.99, 459.07, 475, 474.6);
		context.bezierCurveTo(474.07, 474.69, 472.2, 474.89, 471.27, 474.99);
		context.bezierCurveTo(466.8, 482.01, 460.27, 487.41, 455.83, 494.49);
		context.bezierCurveTo(450.39, 500.19, 445.4, 506.28, 440.27, 512.27);
		context.bezierCurveTo(438.07, 515.59, 437.81, 519.96, 434.91, 522.89);
		context.bezierCurveTo(432.13, 525.8, 430.16, 529.32, 429.07, 533.19);
		context.bezierCurveTo(428.6, 533.44, 427.64, 533.96, 427.16, 534.21);
		context.bezierCurveTo(421.76, 540.28, 418.97, 548.05, 414.72, 554.87);
		context.bezierCurveTo(410.76, 561.85, 405.71, 568.23, 402.61, 575.71);
		context.bezierCurveTo(398.56, 585.29, 393.27, 594.33, 389.81, 604.17);
		context.bezierCurveTo(388.43, 608.27, 385.96, 611.88, 384.53, 615.95);
		context.bezierCurveTo(383.4, 620.28, 383.6, 624.81, 383.44, 629.25);
		context.bezierCurveTo(380.93, 632.04, 379.97, 635.72, 379.77, 639.39);
		context.bezierCurveTo(378.31, 639.69, 376.84, 640.01, 375.39, 640.33);
		context.bezierCurveTo(374.16, 647.08, 372.08, 653.64, 368.95, 659.76);
		context.bezierCurveTo(365.09, 669.92, 361.68, 680.53, 362.24, 691.56);
		context.bezierCurveTo(359.59, 695.21, 357.2, 699.33, 357.55, 704.04);
		context.bezierCurveTo(357.71, 716.04, 356.09, 727.97, 356.41, 739.97);
		context.bezierCurveTo(356.6, 745.77, 355.37, 751.49, 355.16, 757.28);
		context.bezierCurveTo(356, 775.95, 357.68, 794.57, 359.37, 813.19);
		context.bezierCurveTo(360.12, 818.4, 362.64, 823.12, 364.03, 828.17);
		context.bezierCurveTo(366.47, 836.92, 368.27, 846, 372.69, 854.04);
		context.bezierCurveTo(376.2, 860.35, 378.88, 867.08, 380.63, 874.08);
		context.bezierCurveTo(381.69, 874.24, 383.83, 874.55, 384.89, 874.69);
		context.bezierCurveTo(385.47, 874.79, 386.63, 874.96, 387.2, 875.05);
		context.bezierCurveTo(388.85, 883.11, 394.92, 888.92, 398.91, 895.83);
		context.bezierCurveTo(401.05, 899.53, 404.75, 902.61, 405.12, 907.13);
		context.bezierCurveTo(404.59, 913.44, 409.36, 917.76, 411.93, 922.97);
		context.bezierCurveTo(414.68, 928.73, 420.41, 932.2, 423.6, 937.69);
		context.bezierCurveTo(424.41, 937.88, 426.03, 938.25, 426.84, 938.44);
		context.bezierCurveTo(432.92, 940.4, 436.13, 946.43, 439.49, 951.4);
		context.bezierCurveTo(441.03, 954.32, 444.37, 955.27, 447.13, 956.65);
		context.bezierCurveTo(447.52, 957.39, 448.28, 958.84, 448.65, 959.57);
		context.bezierCurveTo(450.27, 960.04, 451.88, 960.52, 453.51, 961.01);
		context.bezierCurveTo(460.28, 969.2, 469.88, 974.15, 477.41, 981.49);
		context.bezierCurveTo(478.13, 981.63, 479.59, 981.89, 480.32, 982.01);
		context.lineTo(480.79, 982.07);
		context.bezierCurveTo(483.32, 984.39, 486.21, 986.24, 489.24, 987.87);
		context.bezierCurveTo(495.85, 993.68, 504.29, 996.68, 511.73, 1001.24);
		context.bezierCurveTo(523, 1008.31, 535.27, 1013.77, 547.97, 1017.68);
		context.bezierCurveTo(552.45, 1018.77, 557.28, 1020.17, 561.73, 1018.17);
		context.bezierCurveTo(563.4, 1018.88, 565.09, 1019.61, 566.77, 1020.36);
		context.bezierCurveTo(597.75, 1033.41, 630.09, 1042.8, 662.72, 1050.72);
		context.bezierCurveTo(688.32, 1056.49, 714.21, 1060.87, 740.16, 1064.77);
		context.bezierCurveTo(748.6, 1066.12, 757.13, 1066.96, 765.65, 1067.67);
		context.bezierCurveTo(782.25, 1069.96, 799, 1070.99, 815.73, 1072);
		context.bezierCurveTo(817.11, 1072.71, 818.49, 1073.49, 819.87, 1074.28);
		context.bezierCurveTo(807.48, 1073.25, 795.07, 1073.81, 782.68, 1072.93);
		context.bezierCurveTo(775.56, 1073.04, 768.43, 1072.75, 761.39, 1071.56);
		context.bezierCurveTo(745.88, 1069.28, 729.87, 1070.77, 714.67, 1066.61);
		context.bezierCurveTo(710.81, 1065.97, 706.92, 1066.79, 703.08, 1067.01);
		context.bezierCurveTo(702.59, 1066.99, 701.59, 1066.92, 701.09, 1066.89);
		context.bezierCurveTo(697.87, 1062.44, 692.05, 1062.63, 687.19, 1061.91);
		context.bezierCurveTo(674.47, 1060.21, 661.49, 1059.67, 649.17, 1055.84);
		context.bezierCurveTo(637.84, 1053.77, 627.28, 1048.99, 616.03, 1046.67);
		context.bezierCurveTo(605.81, 1044.73, 596.37, 1040.25, 587, 1035.93);
		context.bezierCurveTo(583.03, 1034.35, 578.59, 1034.71, 574.53, 1033.44);
		context.bezierCurveTo(570, 1032, 565.91, 1029.29, 561.16, 1028.55);
		context.bezierCurveTo(556.61, 1027.83, 552.03, 1027.44, 547.49, 1026.68);
		context.bezierCurveTo(547.4, 1026.19, 547.21, 1025.21, 547.12, 1024.72);
		context.bezierCurveTo(540.28, 1025.03, 535, 1019.2, 528.05, 1020.57);
		context.bezierCurveTo(525.44, 1018.31, 522.49, 1016.47, 519.19, 1015.41);
		context.bezierCurveTo(514.79, 1013.92, 511.49, 1010.35, 507.12, 1008.83);
		context.bezierCurveTo(501.69, 1006.97, 497.08, 1003.41, 491.59, 1001.73);
		context.bezierCurveTo(489.19, 997.57, 484.29, 997.17, 480.24, 995.64);
		context.bezierCurveTo(476.03, 994.4, 476.48, 987.61, 472, 987.12);
		context.bezierCurveTo(464.97, 986.77, 459.72, 981.47, 455.24, 976.61);
		context.bezierCurveTo(452.61, 972.93, 447.91, 971.85, 444.91, 968.6);
		context.bezierCurveTo(441.85, 965.27, 437.84, 963.08, 434.6, 960);
		context.bezierCurveTo(431.73, 956.35, 429.92, 950.95, 424.2, 951.56);
		context.bezierCurveTo(421.16, 948.88, 418.19, 946.12, 415.2, 943.39);
		context.bezierCurveTo(415.21, 942.39, 415.24, 941.4, 415.27, 940.41);
		context.bezierCurveTo(414.43, 940.39, 413.59, 940.36, 412.76, 940.35);
		context.bezierCurveTo(399.11, 925.55, 389.17, 907.99, 378.51, 891.05);
		context.bezierCurveTo(377.93, 891.16, 376.79, 891.36, 376.21, 891.47);
		context.bezierCurveTo(376.05, 891.16, 375.75, 890.56, 375.59, 890.25);
		context.bezierCurveTo(361.15, 862.28, 351.2, 831.95, 346.75, 800.76);
		context.bezierCurveTo(341.88, 767.44, 344.8, 733.11, 354.79, 700.97);
		context.bezierCurveTo(354, 701.01, 352.43, 701.08, 351.64, 701.11);
		context.bezierCurveTo(350.27, 698.69, 350.36, 696.04, 351.37, 693.52);
		context.bezierCurveTo(361.44, 657.4, 373.63, 621.84, 389.05, 587.64);
		context.bezierCurveTo(412, 537.36, 441.15, 489.52, 478.2, 448.35);
		context.bezierCurveTo(481.21, 447.95, 484.95, 448.48, 487.05, 445.76);
		context.bezierCurveTo(490.4, 441.97, 493.49, 437.95, 497.29, 434.57);
		context.closePath();
		context.fillStyle = fillColor85;
		context.fill();
	}


	function drawPath103() {
		//// #c7d0d3ff
		//// Bezier 103 Drawing
		context.beginPath();
		context.moveTo(1196.27, 438.35);
		context.bezierCurveTo(1206.2, 448.48, 1216.05, 458.85, 1223.95, 470.69);
		context.bezierCurveTo(1233.31, 484.09, 1241.96, 498.09, 1249.24, 512.72);
		context.bezierCurveTo(1245.08, 508.55, 1242.44, 503.25, 1239.35, 498.32);
		context.bezierCurveTo(1239.11, 498.12, 1238.63, 497.71, 1238.39, 497.49);
		context.bezierCurveTo(1232.35, 485.85, 1222.96, 476.39, 1215.77, 465.47);
		context.bezierCurveTo(1210.27, 456.79, 1202.31, 450.17, 1195.55, 442.56);
		context.bezierCurveTo(1195.72, 441.51, 1196.08, 439.4, 1196.27, 438.35);
		context.closePath();
		context.fillStyle = fillColor86;
		context.fill();

	}

	function drawPath104() {
		//// #070800ff
		//// Bezier 104 Drawing
		context.beginPath();
		context.moveTo(1270.15, 448.53);
		context.bezierCurveTo(1272.44, 449.05, 1274.73, 449.56, 1277.05, 450.08);
		context.bezierCurveTo(1286.27, 466.36, 1295.07, 482.91, 1302.96, 499.88);
		context.bezierCurveTo(1306.29, 506.72, 1308.87, 513.91, 1311.97, 520.85);
		context.bezierCurveTo(1315.52, 530.61, 1319.13, 540.39, 1321.4, 550.55);
		context.bezierCurveTo(1321.33, 551.29, 1321.21, 552.77, 1321.15, 553.52);
		context.bezierCurveTo(1320.08, 552.29, 1319.03, 551.05, 1317.99, 549.84);
		context.bezierCurveTo(1317, 550.63, 1316.03, 551.44, 1315.08, 552.25);
		context.bezierCurveTo(1311.44, 536.99, 1305.43, 522.45, 1299.57, 507.93);
		context.bezierCurveTo(1292.72, 491.64, 1285.13, 475.65, 1276.67, 460.12);
		context.bezierCurveTo(1274.93, 456.51, 1272.71, 453.15, 1270.75, 449.67);
		context.lineTo(1270.15, 448.53);
		context.closePath();
		context.fillStyle = fillColor87;
		context.fill();
	}


	function drawPath105() {
		//// #fcefb4ff
		//// Bezier 105 Drawing
		context.beginPath();
		context.moveTo(1276.67, 460.12);
		context.bezierCurveTo(1285.13, 475.65, 1292.72, 491.64, 1299.57, 507.93);
		context.bezierCurveTo(1305.43, 522.45, 1311.44, 536.99, 1315.08, 552.25);
		context.bezierCurveTo(1315.8, 555.13, 1316.31, 558.08, 1316.69, 561.04);
		context.bezierCurveTo(1314.53, 558.89, 1312.4, 556.71, 1310.09, 554.75);
		context.bezierCurveTo(1313.12, 550.76, 1308.49, 547.36, 1307.23, 543.73);
		context.bezierCurveTo(1305.04, 537.67, 1303.32, 531.44, 1300.75, 525.52);
		context.bezierCurveTo(1293.61, 509.83, 1283.16, 496, 1274.85, 480.97);
		context.bezierCurveTo(1272.51, 476.96, 1269.37, 473.41, 1267.83, 468.97);
		context.bezierCurveTo(1273.15, 472.77, 1277.53, 477.72, 1280.88, 483.33);
		context.bezierCurveTo(1281.96, 483.41, 1283.01, 483.47, 1284.12, 483.56);
		context.bezierCurveTo(1283.19, 475.93, 1278.12, 469.95, 1275, 463.21);
		context.bezierCurveTo(1275.43, 462.44, 1276.25, 460.89, 1276.67, 460.12);
		context.closePath();
		context.fillStyle = fillColor88;
		context.fill();
	}


	function drawPath106() {
		//// #d5f9c5ff
		//// Bezier 106 Drawing
		context.beginPath();
		context.moveTo(439.79, 470.41);
		context.bezierCurveTo(442.07, 467.53, 444.11, 464.24, 447.52, 462.57);
		context.lineTo(449.11, 463.71);
		context.bezierCurveTo(445.47, 468.91, 441.4, 473.79, 437.04, 478.39);
		context.bezierCurveTo(431.53, 484.21, 428.09, 491.56, 423.12, 497.79);
		context.bezierCurveTo(419.51, 502.39, 416.25, 507.28, 413.37, 512.36);
		context.lineTo(411.37, 511.25);
		context.bezierCurveTo(413.39, 503.93, 418.16, 497.93, 422.07, 491.56);
		context.bezierCurveTo(423.33, 491.15, 424.6, 490.72, 425.87, 490.31);
		context.bezierCurveTo(429.25, 482.87, 434.8, 476.79, 439.79, 470.41);
		context.closePath();
		context.fillStyle = fillColor89;
		context.fill();

	}

	function drawPath107() {
		//// #100114ff
		//// Bezier 107 Drawing
		context.beginPath();
		context.moveTo(1254.45, 463.48);
		context.bezierCurveTo(1254.93, 463.16, 1255.91, 462.52, 1256.39, 462.2);
		context.bezierCurveTo(1258.39, 465.13, 1260.28, 468.12, 1262.29, 471.05);
		context.bezierCurveTo(1275.63, 492.01, 1287.25, 514.32, 1294.09, 538.29);
		context.bezierCurveTo(1293.36, 539.63, 1292.59, 540.95, 1291.81, 542.25);
		context.bezierCurveTo(1287, 532.76, 1284.31, 522.36, 1279.49, 512.85);
		context.bezierCurveTo(1276.05, 505.27, 1272.24, 497.85, 1268.33, 490.49);
		context.bezierCurveTo(1263.95, 482.79, 1259.19, 475.29, 1254.45, 467.8);
		context.bezierCurveTo(1254.37, 466.33, 1254.45, 464.93, 1254.45, 463.48);
		context.closePath();
		context.fillStyle = fillColor90;
		context.fill();

	}

	function drawPath108() {
		//// #f3fa9dff
		//// Bezier 108 Drawing
		context.beginPath();
		context.moveTo(449.11, 463.71);
		context.bezierCurveTo(449.93, 464.33, 450.77, 464.97, 451.61, 465.61);
		context.bezierCurveTo(451.91, 466.61, 452.51, 468.61, 452.8, 469.6);
		context.bezierCurveTo(451.8, 469.68, 449.8, 469.83, 448.79, 469.91);
		context.bezierCurveTo(443, 477.48, 438.59, 486.09, 431.79, 492.84);
		context.bezierCurveTo(428.4, 497.63, 426.59, 503.37, 422.84, 507.95);
		context.bezierCurveTo(419.43, 511.91, 418.37, 518.07, 413.4, 520.49);
		context.bezierCurveTo(410.81, 518.39, 412.88, 514.97, 413.37, 512.36);
		context.bezierCurveTo(416.25, 507.28, 419.51, 502.39, 423.12, 497.79);
		context.bezierCurveTo(428.09, 491.56, 431.53, 484.21, 437.04, 478.39);
		context.bezierCurveTo(441.4, 473.79, 445.47, 468.91, 449.11, 463.71);
		context.closePath();
		context.fillStyle = fillColor91;
		context.fill();

	}


		//// #313131ff

	function drawPath109() {
		//// #e3f8b9ff
		//// Bezier 109 Drawing
		context.beginPath();
		context.moveTo(448.79, 469.91);
		context.bezierCurveTo(449.8, 469.83, 451.8, 469.68, 452.8, 469.6);
		context.bezierCurveTo(437.33, 489.25, 423.92, 510.4, 411.48, 532.07);
		context.bezierCurveTo(409.21, 528.93, 411.53, 525.33, 412.28, 522.13);
		context.bezierCurveTo(410.09, 522.53, 407.91, 522.93, 405.71, 523.19);
		context.lineTo(405.13, 520.75);
		context.bezierCurveTo(405.64, 516.76, 407.71, 513.09, 411.37, 511.25);
		context.lineTo(413.37, 512.36);
		context.bezierCurveTo(412.88, 514.97, 410.81, 518.39, 413.4, 520.49);
		context.bezierCurveTo(418.37, 518.07, 419.43, 511.91, 422.84, 507.95);
		context.bezierCurveTo(426.59, 503.37, 428.4, 497.63, 431.79, 492.84);
		context.bezierCurveTo(438.59, 486.09, 443, 477.48, 448.79, 469.91);
		context.closePath();
		context.fillStyle = fillColor92;
		context.fill();

	}

	function drawPath110() {
		//// #f1bcd7ff
		//// Bezier 110 Drawing
		context.beginPath();
		context.moveTo(1262.29, 471.05);
		context.bezierCurveTo(1264.12, 470.36, 1265.97, 469.67, 1267.83, 468.97);
		context.bezierCurveTo(1269.37, 473.41, 1272.51, 476.96, 1274.85, 480.97);
		context.bezierCurveTo(1283.16, 496, 1293.61, 509.83, 1300.75, 525.52);
		context.bezierCurveTo(1303.32, 531.44, 1305.04, 537.67, 1307.23, 543.73);
		context.bezierCurveTo(1308.49, 547.36, 1313.12, 550.76, 1310.09, 554.75);
		context.bezierCurveTo(1305.99, 552.89, 1301.44, 552.44, 1297, 552.91);
		context.bezierCurveTo(1297.92, 552.57, 1299.75, 551.91, 1300.65, 551.57);
		context.bezierCurveTo(1298.31, 547.23, 1296.08, 542.81, 1294.09, 538.29);
		context.bezierCurveTo(1287.25, 514.32, 1275.63, 492.01, 1262.29, 471.05);
		context.closePath();
		context.fillStyle = fillColor93;
		context.fill();


	}
	function drawPath111() {
		//// #cac6e9ff
		//// Bezier 111 Drawing
		context.beginPath();
		context.moveTo(471.27, 474.99);
		context.bezierCurveTo(472.2, 474.89, 474.07, 474.69, 475, 474.6);
		context.bezierCurveTo(462.96, 490.24, 452.04, 506.71, 441.13, 523.12);
		context.bezierCurveTo(436.21, 524.03, 433.88, 528.64, 430.99, 532.17);
		context.bezierCurveTo(430.51, 532.43, 429.55, 532.93, 429.07, 533.19);
		context.bezierCurveTo(430.16, 529.32, 432.13, 525.8, 434.91, 522.89);
		context.bezierCurveTo(437.81, 519.96, 438.07, 515.59, 440.27, 512.27);
		context.bezierCurveTo(445.4, 506.28, 450.39, 500.19, 455.83, 494.49);
		context.bezierCurveTo(460.27, 487.41, 466.8, 482.01, 471.27, 474.99);
		context.closePath();
		context.fillStyle = fillColor94;
		context.fill();

	}

	function drawPath112() {
		//// #95bbd4ff
		//// Bezier 112 Drawing
		context.beginPath();
		context.moveTo(117.76, 490.69);
		context.bezierCurveTo(126.36, 489.07, 135.24, 489.24, 143.83, 490.91);
		context.bezierCurveTo(151.96, 492.43, 160.47, 492.63, 168.19, 495.87);
		context.bezierCurveTo(172.35, 497.59, 176.57, 499.13, 180.76, 500.79);
		context.bezierCurveTo(187.41, 503.39, 192.45, 508.64, 198.25, 512.63);
		context.bezierCurveTo(202.88, 515.77, 206.56, 520.04, 209.53, 524.73);
		context.bezierCurveTo(208.84, 524.8, 207.45, 524.92, 206.76, 524.97);
		context.bezierCurveTo(202.12, 519.29, 195.71, 515.53, 189.73, 511.44);
		context.bezierCurveTo(179.68, 504.8, 168.04, 501.27, 156.41, 498.49);
		context.bezierCurveTo(143.85, 494.55, 130.63, 493.64, 117.55, 494.47);
		context.bezierCurveTo(117.6, 493.52, 117.71, 491.64, 117.76, 490.69);
		context.closePath();
		context.fillStyle = fillColor95;
		context.fill();

	}

	function drawPath113() {
		//// #b5cdecff
		//// Bezier 113 Drawing
		context.beginPath();
		context.moveTo(1264.35, 490.77);
		context.bezierCurveTo(1265.35, 490.71, 1267.33, 490.56, 1268.33, 490.49);
		context.bezierCurveTo(1272.24, 497.85, 1276.05, 505.27, 1279.49, 512.85);
		context.bezierCurveTo(1278.48, 512.44, 1276.47, 511.61, 1275.47, 511.21);
		context.bezierCurveTo(1270.83, 504.97, 1267.13, 498.01, 1264.35, 490.77);
		context.closePath();
		context.fillStyle = fillColor96;
		context.fill();

	}

	function drawPath114() {
		//// #fcfefdff
		//// Bezier 114 Drawing
		context.beginPath();
		context.moveTo(1084.17, 510.91);
		context.bezierCurveTo(1097.16, 503.91, 1111.56, 497.89, 1126.63, 499.35);
		context.bezierCurveTo(1145.99, 500.93, 1165.67, 507.83, 1179.55, 521.89);
		context.bezierCurveTo(1195.2, 536.72, 1201.31, 558.87, 1202.43, 579.8);
		context.bezierCurveTo(1203.99, 586.73, 1202.01, 593.83, 1198.72, 599.95);
		context.bezierCurveTo(1197.97, 600.16, 1196.48, 600.59, 1195.73, 600.8);
		context.bezierCurveTo(1194.65, 601.01, 1193.57, 601.21, 1192.51, 601.39);
		context.bezierCurveTo(1193.24, 599.47, 1193.91, 597.52, 1194.63, 595.6);
		context.bezierCurveTo(1199.37, 586.12, 1198.04, 575.29, 1196.59, 565.19);
		context.bezierCurveTo(1195.61, 559.2, 1193.4, 553.53, 1191.13, 547.96);
		context.bezierCurveTo(1190.01, 551.03, 1188.99, 554.17, 1187.23, 556.96);
		context.bezierCurveTo(1182.99, 561.93, 1176.61, 564.96, 1170.01, 564.32);
		context.bezierCurveTo(1158.43, 563.32, 1150.2, 550.68, 1153.73, 539.63);
		context.bezierCurveTo(1155.17, 536.24, 1157.01, 532.88, 1160.03, 530.64);
		context.bezierCurveTo(1163.71, 527.28, 1168.88, 526.81, 1173.57, 526.04);
		context.bezierCurveTo(1161.19, 515.59, 1145.76, 508.07, 1129.36, 507.43);
		context.bezierCurveTo(1110.83, 507.25, 1092.84, 516.51, 1081.24, 530.79);
		context.bezierCurveTo(1070.96, 541.97, 1064.93, 556.61, 1062.55, 571.51);
		context.bezierCurveTo(1060.65, 589.63, 1063.8, 608.52, 1073.36, 624.21);
		context.bezierCurveTo(1074.01, 623.57, 1075.32, 622.29, 1075.96, 621.65);
		context.bezierCurveTo(1075.25, 622.56, 1074.56, 623.48, 1073.88, 624.4);
		context.bezierCurveTo(1081.03, 635.25, 1092.19, 643.8, 1105.08, 646.32);
		context.bezierCurveTo(1111.21, 647.64, 1117.51, 647.72, 1123.76, 647.72);
		context.bezierCurveTo(1122.37, 649.43, 1120.93, 651.11, 1119.49, 652.77);
		context.bezierCurveTo(1117.03, 655.07, 1115.23, 658.41, 1112.11, 659.81);
		context.bezierCurveTo(1105.31, 659.19, 1098.76, 657.07, 1092.23, 655.24);
		context.bezierCurveTo(1082.55, 652.56, 1075.41, 644.99, 1068.53, 638.12);
		context.bezierCurveTo(1060.27, 630.08, 1054.37, 619.85, 1050.6, 609.01);
		context.bezierCurveTo(1050.25, 608.55, 1049.57, 607.61, 1049.23, 607.15);
		context.bezierCurveTo(1048.52, 601.55, 1046.77, 596.13, 1046.15, 590.53);
		context.bezierCurveTo(1044.76, 578.95, 1045.61, 567.11, 1048.57, 555.83);
		context.bezierCurveTo(1050.15, 550.83, 1052.69, 546.19, 1054.13, 541.12);
		context.bezierCurveTo(1062.24, 529.51, 1070.44, 516.45, 1084.17, 510.91);
		context.closePath();
		context.fillStyle = fillColor97;
		context.fill();
	}
	function drawPath115() {
		//// Bezier 115 Drawing
		context.beginPath();
		context.moveTo(661.13, 515.73);
		context.bezierCurveTo(688.43, 508.83, 717.84, 518.03, 739.24, 535.53);
		context.bezierCurveTo(755.68, 547.49, 765.05, 566.95, 769.35, 586.4);
		context.bezierCurveTo(771.36, 599.37, 771.56, 612.73, 768.28, 625.53);
		context.bezierCurveTo(765.15, 638.65, 759.39, 651.15, 751.67, 662.2);
		context.bezierCurveTo(751.97, 662.55, 752.6, 663.25, 752.92, 663.61);
		context.bezierCurveTo(752.39, 663.47, 751.35, 663.17, 750.81, 663.03);
		context.bezierCurveTo(747.41, 668.28, 743.8, 673.57, 738.48, 677.09);
		context.bezierCurveTo(720.72, 688.65, 700.32, 697.63, 678.73, 697.08);
		context.bezierCurveTo(668.04, 697.47, 657.96, 693.56, 647.83, 690.77);
		context.bezierCurveTo(636.99, 686.8, 626.36, 681.85, 617.09, 674.89);
		context.bezierCurveTo(602.25, 659.57, 591.28, 640.08, 587.85, 618.88);
		context.bezierCurveTo(586.41, 609.48, 586.81, 599.89, 587.71, 590.47);
		context.bezierCurveTo(589.6, 583.35, 591.28, 576.16, 594.05, 569.31);
		context.bezierCurveTo(599.35, 557.72, 606.35, 546.8, 615.57, 537.95);
		context.bezierCurveTo(621.71, 532.76, 628.8, 528.97, 635.76, 525.04);
		context.bezierCurveTo(644.72, 523.32, 652.21, 517.6, 661.13, 515.73);
		context.closePath();
		context.moveTo(630.01, 547.37);
		context.bezierCurveTo(622.89, 556.69, 616.11, 566.61, 612.71, 577.96);
		context.bezierCurveTo(607.35, 592.13, 605.24, 607.65, 607.44, 622.69);
		context.bezierCurveTo(609.83, 634.19, 615.68, 644.48, 621.16, 654.72);
		context.bezierCurveTo(624.17, 659.57, 628.71, 663.13, 632.49, 667.33);
		context.bezierCurveTo(641.13, 676.8, 653.44, 681.55, 665.36, 685.39);
		context.bezierCurveTo(681.24, 690.44, 698.84, 689.8, 714.35, 683.77);
		context.bezierCurveTo(726.27, 676.61, 739.21, 669.83, 747.29, 658.07);
		context.bezierCurveTo(752.31, 649.44, 755.43, 639.87, 758.32, 630.36);
		context.bezierCurveTo(764.59, 608.73, 762.48, 585.21, 753.75, 564.57);
		context.bezierCurveTo(752.09, 567.69, 750.95, 571.15, 748.61, 573.87);
		context.bezierCurveTo(746.39, 575.89, 743.69, 577.27, 741.2, 578.92);
		context.bezierCurveTo(736.75, 579.67, 731.99, 580.35, 727.77, 578.24);
		context.bezierCurveTo(719.29, 575.48, 714.81, 566.07, 715.53, 557.57);
		context.bezierCurveTo(717.13, 552.44, 719.84, 547.33, 724.6, 544.52);
		context.bezierCurveTo(728.71, 541.67, 733.85, 541.49, 738.67, 541.81);
		context.bezierCurveTo(723.32, 529.04, 704.11, 520.24, 683.91, 520.08);
		context.bezierCurveTo(663.57, 522.63, 643.81, 532.08, 630.01, 547.37);
		context.closePath();
		context.fillStyle = fillColor97;
		context.fill();

	}

	function drawPath116() {
		//// #edf5f5ff
		//// Bezier 116 Drawing
		context.beginPath();
		context.moveTo(1302.96, 499.88);
		context.bezierCurveTo(1304.12, 499.96, 1306.45, 500.13, 1307.63, 500.21);
		context.bezierCurveTo(1307.83, 501.03, 1308.23, 502.64, 1308.43, 503.44);
		context.bezierCurveTo(1309.13, 502.84, 1309.87, 502.24, 1310.61, 501.65);
		context.bezierCurveTo(1312.8, 506.8, 1314.15, 512.23, 1315.95, 517.52);
		context.bezierCurveTo(1316.67, 520.32, 1319.51, 521.55, 1321.59, 523.23);
		context.bezierCurveTo(1322.27, 527.43, 1322.51, 532.33, 1326.89, 534.45);
		context.bezierCurveTo(1328.76, 536.92, 1330.95, 539.13, 1333.33, 541.12);
		context.lineTo(1333.33, 613.71);
		context.bezierCurveTo(1332.09, 601.25, 1329.01, 588.96, 1325.07, 577.11);
		context.bezierCurveTo(1323.55, 569.96, 1323.19, 562.63, 1322.43, 555.39);
		context.bezierCurveTo(1324.99, 551.67, 1328.36, 546.8, 1325.84, 542.23);
		context.bezierCurveTo(1323.21, 537.11, 1320.83, 531.89, 1318.93, 526.45);
		context.bezierCurveTo(1317.99, 523.32, 1314.41, 522.43, 1311.97, 520.85);
		context.bezierCurveTo(1308.87, 513.91, 1306.29, 506.72, 1302.96, 499.88);
		context.closePath();
		context.fillStyle = fillColor98;
		context.fill();

	}

	function drawPath117() {
		//// #9fc0caff
		//// Bezier 117 Drawing
		context.beginPath();
		context.moveTo(397.16, 513.77);
		context.bezierCurveTo(399.31, 510.37, 401.43, 506.97, 403.64, 503.64);
		context.bezierCurveTo(403.89, 504.41, 404.41, 505.96, 404.67, 506.75);
		context.bezierCurveTo(403.21, 509.73, 401.91, 512.8, 401.04, 516.03);
		context.bezierCurveTo(399.75, 515.27, 398.45, 514.52, 397.16, 513.77);
		context.closePath();
		context.fillStyle = fillColor99;
		context.fill();
	}


	function drawPath118() {
		//// #212636ff
		//// Bezier 118 Drawing
		context.beginPath();
		context.moveTo(1081.24, 530.79);
		context.bezierCurveTo(1092.84, 516.51, 1110.83, 507.25, 1129.36, 507.43);
		context.bezierCurveTo(1145.76, 508.07, 1161.19, 515.59, 1173.57, 526.04);
		context.bezierCurveTo(1168.88, 526.81, 1163.71, 527.28, 1160.03, 530.64);
		context.bezierCurveTo(1157.01, 532.88, 1155.17, 536.24, 1153.73, 539.63);
		context.bezierCurveTo(1147.24, 538.4, 1141.45, 534.21, 1134.61, 535.01);
		context.bezierCurveTo(1125.09, 534.4, 1116.49, 539.56, 1109.71, 545.73);
		context.bezierCurveTo(1106.04, 548.96, 1104.27, 553.63, 1102.19, 557.91);
		context.bezierCurveTo(1097.21, 567.53, 1097.64, 578.76, 1098.35, 589.27);
		context.bezierCurveTo(1099.31, 602.52, 1108.51, 613.72, 1119.25, 620.73);
		context.bezierCurveTo(1131.41, 628.53, 1147.59, 624.19, 1157.75, 615.09);
		context.bezierCurveTo(1163.35, 608.85, 1168.59, 601.73, 1170.35, 593.37);
		context.bezierCurveTo(1172.55, 583.87, 1172.28, 573.79, 1170.01, 564.32);
		context.bezierCurveTo(1176.61, 564.96, 1182.99, 561.93, 1187.23, 556.96);
		context.bezierCurveTo(1194.65, 568.65, 1189.49, 583.21, 1194.63, 595.6);
		context.bezierCurveTo(1193.91, 597.52, 1193.24, 599.47, 1192.51, 601.39);
		context.bezierCurveTo(1191.32, 604.75, 1187.76, 606.04, 1184.93, 607.64);
		context.bezierCurveTo(1175.15, 613.15, 1165.92, 619.55, 1157.12, 626.49);
		context.bezierCurveTo(1146.97, 634.95, 1137.33, 643.93, 1127.95, 653.2);
		context.bezierCurveTo(1125.11, 653.13, 1122.31, 652.97, 1119.49, 652.77);
		context.bezierCurveTo(1120.93, 651.11, 1122.37, 649.43, 1123.76, 647.72);
		context.bezierCurveTo(1117.51, 647.72, 1111.21, 647.64, 1105.08, 646.32);
		context.bezierCurveTo(1092.19, 643.8, 1081.03, 635.25, 1073.88, 624.4);
		context.bezierCurveTo(1074.56, 623.48, 1075.25, 622.56, 1075.96, 621.65);
		context.bezierCurveTo(1075.32, 622.29, 1074.01, 623.57, 1073.36, 624.21);
		context.bezierCurveTo(1063.8, 608.52, 1060.65, 589.63, 1062.55, 571.51);
		context.bezierCurveTo(1064.93, 556.61, 1070.96, 541.97, 1081.24, 530.79);
		context.closePath();
		context.fillStyle = fillColor100;
		context.fill();
	}
	function drawPath119() {
		//// Bezier 119 Drawing
		context.beginPath();
		context.moveTo(769.35, 586.4);
		context.bezierCurveTo(772.99, 595.71, 770.59, 605.81, 772.44, 615.4);
		context.bezierCurveTo(773.32, 619.31, 770.11, 622.43, 768.28, 625.53);
		context.bezierCurveTo(771.56, 612.73, 771.36, 599.37, 769.35, 586.4);
		context.closePath();
		context.fillStyle = fillColor100;
		context.fill();

	}

	function drawPath120() {
		//// #adeaf2ff
		//// Bezier 120 Drawing
		context.beginPath();
		context.moveTo(389.76, 526.39);
		context.bezierCurveTo(392.15, 522.13, 394.48, 517.84, 397.16, 513.77);
		context.bezierCurveTo(398.45, 514.52, 399.75, 515.27, 401.04, 516.03);
		context.bezierCurveTo(399.29, 522.91, 395.83, 529.16, 392.68, 535.47);
		context.bezierCurveTo(390.08, 540.76, 385.83, 545.23, 384.39, 551.07);
		context.bezierCurveTo(380.84, 562.69, 373.57, 572.67, 369.36, 584.01);
		context.bezierCurveTo(367.53, 588.99, 364.48, 593.33, 361.76, 597.83);
		context.bezierCurveTo(357.55, 605.89, 355.36, 614.79, 352.57, 623.39);
		context.bezierCurveTo(350.67, 628.72, 348.92, 634.11, 347.39, 639.56);
		context.bezierCurveTo(345.97, 644.76, 343.97, 649.77, 341.91, 654.75);
		context.bezierCurveTo(339.85, 655.19, 337.8, 655.64, 335.76, 656.09);
		context.bezierCurveTo(336.39, 650.97, 336.83, 645.84, 337.71, 640.76);
		context.bezierCurveTo(338.43, 640.4, 339.87, 639.68, 340.59, 639.32);
		context.bezierCurveTo(340.89, 633.84, 341.85, 628.35, 344.51, 623.48);
		context.bezierCurveTo(348.6, 615.64, 350.67, 606.96, 351.43, 598.19);
		context.bezierCurveTo(352.73, 597.68, 354.04, 597.2, 355.36, 596.71);
		context.bezierCurveTo(357.52, 585.57, 369.45, 578.32, 368, 566.16);
		context.bezierCurveTo(376.25, 553.45, 381.47, 539.07, 389.76, 526.39);
		context.closePath();
		context.fillStyle = fillColor101;
		context.fill();
	}

	function drawPath121() {
		//// #2f2f2fff
		//// Bezier 121 Drawing
		context.beginPath();
		context.moveTo(1333.33, 1022.47);
		context.bezierCurveTo(1331.19, 1021.93, 1331.19, 1021.15, 1333.33, 1020.12);
		context.lineTo(1333.33, 1022.47);
		context.closePath();
		context.fillStyle = fillColor102;
		context.fill();
	}

	function drawPath122() {
		//// #202737ff
		//// Bezier 122 Drawing
		context.beginPath();
		context.moveTo(630.01, 547.37);
		context.bezierCurveTo(643.81, 532.08, 663.57, 522.63, 683.91, 520.08);
		context.bezierCurveTo(704.11, 520.24, 723.32, 529.04, 738.67, 541.81);
		context.bezierCurveTo(733.85, 541.49, 728.71, 541.67, 724.6, 544.52);
		context.bezierCurveTo(719.84, 547.33, 717.13, 552.44, 715.53, 557.57);
		context.bezierCurveTo(714.99, 557.84, 713.89, 558.4, 713.35, 558.68);
		context.bezierCurveTo(704.47, 557.47, 695.24, 556.56, 686.44, 558.65);
		context.bezierCurveTo(675.43, 563.4, 664.97, 570.87, 658.81, 581.36);
		context.bezierCurveTo(652.93, 595.23, 652.23, 612.61, 661.41, 625.27);
		context.bezierCurveTo(668.05, 634.23, 676.35, 643.36, 687.87, 645.41);
		context.bezierCurveTo(697.15, 646.81, 707.07, 647.21, 715.93, 643.57);
		context.bezierCurveTo(720.2, 642.16, 724.55, 640.39, 727.52, 636.84);
		context.bezierCurveTo(733.39, 630.29, 739.53, 623.4, 742.03, 614.76);
		context.bezierCurveTo(743.43, 609.52, 743.56, 604.03, 743.32, 598.65);
		context.bezierCurveTo(743.09, 592.31, 740.19, 586.57, 738.79, 580.48);
		context.bezierCurveTo(739.39, 580.09, 740.6, 579.31, 741.2, 578.92);
		context.bezierCurveTo(743.69, 577.27, 746.39, 575.89, 748.61, 573.87);
		context.bezierCurveTo(750.95, 571.15, 752.09, 567.69, 753.75, 564.57);
		context.bezierCurveTo(762.48, 585.21, 764.59, 608.73, 758.32, 630.36);
		context.bezierCurveTo(755.43, 639.87, 752.31, 649.44, 747.29, 658.07);
		context.bezierCurveTo(739.21, 669.83, 726.27, 676.61, 714.35, 683.77);
		context.bezierCurveTo(698.84, 689.8, 681.24, 690.44, 665.36, 685.39);
		context.bezierCurveTo(653.44, 681.55, 641.13, 676.8, 632.49, 667.33);
		context.bezierCurveTo(628.71, 663.13, 624.17, 659.57, 621.16, 654.72);
		context.bezierCurveTo(615.68, 644.48, 609.83, 634.19, 607.44, 622.69);
		context.bezierCurveTo(605.24, 607.65, 607.35, 592.13, 612.71, 577.96);
		context.bezierCurveTo(616.11, 566.61, 622.89, 556.69, 630.01, 547.37);
		context.closePath();
		context.fillStyle = fillColor103;
		context.fill();
	}
	function drawPath123() {
		//// Bezier 123 Drawing
		context.beginPath();
		context.moveTo(443.85, 1000.71);
		context.bezierCurveTo(447.19, 1002.27, 449.84, 1004.88, 452.65, 1007.21);
		context.bezierCurveTo(457, 1010.96, 461.97, 1013.85, 466.37, 1017.53);
		context.bezierCurveTo(467.25, 1017.16, 468.13, 1016.8, 469.01, 1016.45);
		context.bezierCurveTo(468.84, 1017.05, 468.49, 1018.25, 468.32, 1018.84);
		context.bezierCurveTo(471.07, 1020.68, 473.87, 1022.47, 476.61, 1024.33);
		context.bezierCurveTo(488.21, 1031.45, 499.63, 1038.97, 511.8, 1045.12);
		context.bezierCurveTo(511.03, 1044.93, 509.48, 1044.53, 508.71, 1044.33);
		context.bezierCurveTo(500.68, 1039.33, 491.87, 1035.76, 483.89, 1030.68);
		context.bezierCurveTo(469.69, 1021.91, 455.76, 1012.48, 443.85, 1000.71);
		context.closePath();
		context.fillStyle = fillColor103;
		context.fill();

	}

	function drawPath124() {
		//// #d7f7baff
		//// Bezier 124 Drawing
		context.beginPath();
		context.moveTo(384.39, 551.07);
		context.bezierCurveTo(393.47, 542.55, 396.85, 529.83, 405.13, 520.75);
		context.lineTo(405.71, 523.19);
		context.bezierCurveTo(401.83, 531.55, 397.73, 539.81, 392.68, 547.52);
		context.bezierCurveTo(387.33, 558.53, 381.17, 569.12, 376.19, 580.29);
		context.bezierCurveTo(370.73, 587.56, 368.61, 596.49, 364.39, 604.43);
		context.bezierCurveTo(359.35, 616.16, 355.63, 628.37, 351.05, 640.28);
		context.bezierCurveTo(350.13, 640.11, 348.29, 639.73, 347.39, 639.56);
		context.bezierCurveTo(348.92, 634.11, 350.67, 628.72, 352.57, 623.39);
		context.bezierCurveTo(355.36, 614.79, 357.55, 605.89, 361.76, 597.83);
		context.bezierCurveTo(364.48, 593.33, 367.53, 588.99, 369.36, 584.01);
		context.bezierCurveTo(373.57, 572.67, 380.84, 562.69, 384.39, 551.07);
		context.closePath();
		context.fillStyle = fillColor104;
		context.fill();
	}


	function drawPath125() {
		//// #fcf695ff
		//// Bezier 125 Drawing
		context.beginPath();
		context.moveTo(405.71, 523.19);
		context.bezierCurveTo(407.91, 522.93, 410.09, 522.53, 412.28, 522.13);
		context.bezierCurveTo(411.53, 525.33, 409.21, 528.93, 411.48, 532.07);
		context.bezierCurveTo(410.41, 533.87, 409.4, 535.69, 408.45, 537.56);
		context.bezierCurveTo(408.75, 536.09, 409.01, 534.63, 409.27, 533.17);
		context.bezierCurveTo(408.63, 533.45, 407.33, 534.01, 406.69, 534.29);
		context.bezierCurveTo(405.43, 537.45, 403.73, 540.4, 401.92, 543.28);
		context.bezierCurveTo(397.6, 551.44, 395.19, 560.71, 389.28, 567.99);
		context.bezierCurveTo(387.53, 570.36, 387.41, 573.44, 386.83, 576.24);
		context.bezierCurveTo(385.97, 576.44, 385.11, 576.64, 384.25, 576.85);
		context.bezierCurveTo(384.15, 580.35, 384.11, 583.83, 383.99, 587.32);
		context.bezierCurveTo(383.88, 587.6, 383.65, 588.19, 383.53, 588.48);
		context.bezierCurveTo(382.63, 588.03, 380.83, 587.09, 379.93, 586.64);
		context.bezierCurveTo(374.8, 598.64, 371.27, 611.23, 365.83, 623.09);
		context.bezierCurveTo(363.47, 629.07, 362.29, 635.51, 358.8, 641);
		context.bezierCurveTo(355.52, 651.61, 353.05, 662.53, 349.04, 672.92);
		context.bezierCurveTo(347.6, 678.73, 347, 684.75, 345.2, 690.49);
		context.bezierCurveTo(343.13, 696.75, 344.75, 703.29, 344.52, 709.69);
		context.bezierCurveTo(344.4, 713.61, 341.85, 716.8, 340.51, 720.35);
		context.bezierCurveTo(339.93, 723.79, 340.8, 727.35, 340.04, 730.8);
		context.bezierCurveTo(339.23, 734.75, 337.79, 738.59, 337.55, 742.64);
		context.bezierCurveTo(337.19, 761.47, 335.36, 780.6, 339.45, 799.19);
		context.bezierCurveTo(341.56, 806.49, 340.52, 814.2, 341.99, 821.61);
		context.bezierCurveTo(343.39, 819.03, 344.4, 816.21, 344.13, 813.23);
		context.bezierCurveTo(344.44, 815.12, 344.76, 817.01, 345.12, 818.93);
		context.bezierCurveTo(342.69, 828.47, 346.27, 838.43, 349.59, 847.36);
		context.bezierCurveTo(350.95, 853.27, 352.16, 859.29, 355.32, 864.57);
		context.bezierCurveTo(358.08, 869.19, 358.64, 874.57, 358.47, 879.84);
		context.bezierCurveTo(356.61, 878.09, 354.76, 876.35, 353.01, 874.52);
		context.bezierCurveTo(349.72, 867.67, 346.93, 860.59, 343.43, 853.84);
		context.bezierCurveTo(341.93, 851.03, 341.48, 847.84, 341, 844.76);
		context.bezierCurveTo(339.31, 834.21, 337.15, 823.73, 334.48, 813.39);
		context.bezierCurveTo(332.37, 799.65, 331.59, 785.77, 330.31, 771.95);
		context.bezierCurveTo(329.43, 762.6, 331.73, 753.36, 331.6, 744.03);
		context.bezierCurveTo(331.35, 720.93, 333.43, 697.65, 339.36, 675.31);
		context.bezierCurveTo(340.93, 671.07, 341.6, 666.57, 342.07, 662.09);
		context.bezierCurveTo(343.33, 661.53, 344.61, 660.99, 345.89, 660.45);
		context.bezierCurveTo(347.25, 653.64, 349.04, 646.92, 351.05, 640.28);
		context.bezierCurveTo(355.63, 628.37, 359.35, 616.16, 364.39, 604.43);
		context.bezierCurveTo(368.61, 596.49, 370.73, 587.56, 376.19, 580.29);
		context.bezierCurveTo(381.17, 569.12, 387.33, 558.53, 392.68, 547.52);
		context.bezierCurveTo(397.73, 539.81, 401.83, 531.55, 405.71, 523.19);
		context.closePath();
		context.fillStyle = fillColor105;
		context.fill();

	}

	function drawPath126() {
		//// #f2f8cdff
		//// Bezier 126 Drawing
		context.beginPath();
		context.moveTo(1311.97, 520.85);
		context.bezierCurveTo(1314.41, 522.43, 1317.99, 523.32, 1318.93, 526.45);
		context.bezierCurveTo(1320.83, 531.89, 1323.21, 537.11, 1325.84, 542.23);
		context.bezierCurveTo(1328.36, 546.8, 1324.99, 551.67, 1322.43, 555.39);
		context.bezierCurveTo(1322.09, 553.76, 1321.75, 552.15, 1321.4, 550.55);
		context.bezierCurveTo(1319.13, 540.39, 1315.52, 530.61, 1311.97, 520.85);
		context.closePath();
		context.fillStyle = fillColor106;
		context.fill();
	}


	function drawPath127() {
		//// #c1c7edff
		//// Bezier 127 Drawing
		context.beginPath();
		context.moveTo(430.99, 532.17);
		context.bezierCurveTo(433.88, 528.64, 436.21, 524.03, 441.13, 523.12);
		context.bezierCurveTo(428.12, 545.73, 414.25, 568.03, 404.37, 592.27);
		context.bezierCurveTo(400.8, 600.87, 396.61, 609.21, 393.89, 618.13);
		context.bezierCurveTo(390.64, 622.05, 386.97, 625.59, 383.44, 629.25);
		context.bezierCurveTo(383.6, 624.81, 383.4, 620.28, 384.53, 615.95);
		context.bezierCurveTo(385.96, 611.88, 388.43, 608.27, 389.81, 604.17);
		context.bezierCurveTo(393.27, 594.33, 398.56, 585.29, 402.61, 575.71);
		context.bezierCurveTo(405.71, 568.23, 410.76, 561.85, 414.72, 554.87);
		context.bezierCurveTo(418.97, 548.05, 421.76, 540.28, 427.16, 534.21);
		context.bezierCurveTo(427.64, 533.96, 428.6, 533.44, 429.07, 533.19);
		context.bezierCurveTo(429.55, 532.93, 430.51, 532.43, 430.99, 532.17);
		context.closePath();
		context.fillStyle = fillColor107;
		context.fill();
	}


	function drawPath128() {
		//// #060a0eff
		//// Bezier 128 Drawing
		context.beginPath();
		context.moveTo(385.47, 524.44);
		context.bezierCurveTo(386.89, 525.08, 388.32, 525.73, 389.76, 526.39);
		context.bezierCurveTo(381.47, 539.07, 376.25, 553.45, 368, 566.16);
		context.bezierCurveTo(364.35, 571.48, 361.12, 577.07, 357.81, 582.61);
		context.bezierCurveTo(359.99, 576.2, 362.65, 569.97, 365.09, 563.65);
		context.bezierCurveTo(371.28, 550.28, 378.41, 537.36, 385.47, 524.44);
		context.closePath();
		context.fillStyle = fillColor108;
		context.fill();
	}

	function drawPath129() {
		//// #a3b4b9ff
		//// Bezier 129 Drawing
		context.beginPath();
		context.moveTo(40.89, 544.85);
		context.bezierCurveTo(48.08, 536.35, 56.4, 527.92, 67.69, 525.43);
		context.bezierCurveTo(67.57, 526.24, 67.36, 527.85, 67.25, 528.67);
		context.bezierCurveTo(63.51, 530.73, 59.24, 531.93, 55.99, 534.84);
		context.bezierCurveTo(45.48, 544.12, 37.32, 555.81, 31.24, 568.39);
		context.bezierCurveTo(28.81, 573.81, 23.99, 577.81, 22.04, 583.48);
		context.bezierCurveTo(19.2, 591.84, 17.03, 600.44, 16.11, 609.23);
		context.bezierCurveTo(9.12, 655.49, 14.51, 702.63, 24.16, 748.09);
		context.bezierCurveTo(25.28, 755.21, 30.15, 760.79, 32.73, 767.33);
		context.bezierCurveTo(30.71, 767.56, 28.69, 767.8, 26.68, 768.05);
		context.bezierCurveTo(14.16, 725.27, 8.57, 680.48, 9.99, 635.93);
		context.bezierCurveTo(10.8, 619.79, 12.04, 603.43, 17, 587.95);
		context.bezierCurveTo(18.88, 581.81, 20.87, 575.23, 26.07, 571.05);
		context.bezierCurveTo(28.72, 561.16, 35.05, 553.03, 40.89, 544.85);
		context.closePath();
		context.fillStyle = fillColor109;
		context.fill();
	}

	function drawPath130() {
		//// #faf3bdff
		//// Bezier 130 Drawing
		context.beginPath();
		context.moveTo(406.69, 534.29);
		context.bezierCurveTo(407.33, 534.01, 408.63, 533.45, 409.27, 533.17);
		context.bezierCurveTo(409.01, 534.63, 408.75, 536.09, 408.45, 537.56);
		context.bezierCurveTo(399.83, 553.91, 391.53, 570.43, 383.99, 587.32);
		context.bezierCurveTo(384.11, 583.83, 384.15, 580.35, 384.25, 576.85);
		context.bezierCurveTo(385.11, 576.64, 385.97, 576.44, 386.83, 576.24);
		context.bezierCurveTo(387.41, 573.44, 387.53, 570.36, 389.28, 567.99);
		context.bezierCurveTo(395.19, 560.71, 397.6, 551.44, 401.92, 543.28);
		context.bezierCurveTo(403.73, 540.4, 405.43, 537.45, 406.69, 534.29);
		context.closePath();
		context.fillStyle = fillColor110;
		context.fill();
	}

	function drawPath131() {
		//// #010101ff
		//// Bezier 131 Drawing
		context.beginPath();
		context.moveTo(1109.71, 545.73);
		context.bezierCurveTo(1116.49, 539.56, 1125.09, 534.4, 1134.61, 535.01);
		context.bezierCurveTo(1141.45, 534.21, 1147.24, 538.4, 1153.73, 539.63);
		context.bezierCurveTo(1150.2, 550.68, 1158.43, 563.32, 1170.01, 564.32);
		context.bezierCurveTo(1172.28, 573.79, 1172.55, 583.87, 1170.35, 593.37);
		context.bezierCurveTo(1168.59, 601.73, 1163.35, 608.85, 1157.75, 615.09);
		context.bezierCurveTo(1147.59, 624.19, 1131.41, 628.53, 1119.25, 620.73);
		context.bezierCurveTo(1108.51, 613.72, 1099.31, 602.52, 1098.35, 589.27);
		context.bezierCurveTo(1097.64, 578.76, 1097.21, 567.53, 1102.19, 557.91);
		context.bezierCurveTo(1104.27, 553.63, 1106.04, 548.96, 1109.71, 545.73);
		context.closePath();
		context.fillStyle = fillColor111;
		context.fill();
	}

	function drawPath132() {
		//// #c4c5ecff
		//// Bezier 132 Drawing
		context.beginPath();
		context.moveTo(1294.09, 538.29);
		context.bezierCurveTo(1296.08, 542.81, 1298.31, 547.23, 1300.65, 551.57);
		context.bezierCurveTo(1299.75, 551.91, 1297.92, 552.57, 1297, 552.91);
		context.bezierCurveTo(1294.85, 553.67, 1292.77, 554.63, 1290.77, 555.68);
		context.bezierCurveTo(1292.05, 551.32, 1291.95, 546.75, 1291.81, 542.25);
		context.bezierCurveTo(1292.59, 540.95, 1293.36, 539.63, 1294.09, 538.29);
		context.closePath();
		context.fillStyle = fillColor112;
		context.fill();

	}


		//// #555b67ff

	function drawPath133() {
		//// #030306ff
		//// Bezier 133 Drawing
		context.beginPath();
		context.moveTo(1187.23, 556.96);
		context.bezierCurveTo(1188.99, 554.17, 1190.01, 551.03, 1191.13, 547.96);
		context.bezierCurveTo(1193.4, 553.53, 1195.61, 559.2, 1196.59, 565.19);
		context.bezierCurveTo(1198.04, 575.29, 1199.37, 586.12, 1194.63, 595.6);
		context.bezierCurveTo(1189.49, 583.21, 1194.65, 568.65, 1187.23, 556.96);
		context.closePath();
		context.fillStyle = fillColor113;
		context.fill();
	}


	function drawPath134() {
		//// #04050bff
		//// Bezier 134 Drawing
		context.beginPath();
		context.moveTo(1315.08, 552.25);
		context.bezierCurveTo(1316.03, 551.44, 1317, 550.63, 1317.99, 549.84);
		context.bezierCurveTo(1319.03, 551.05, 1320.08, 552.29, 1321.15, 553.52);
		context.bezierCurveTo(1321.21, 552.77, 1321.33, 551.29, 1321.4, 550.55);
		context.bezierCurveTo(1321.75, 552.15, 1322.09, 553.76, 1322.43, 555.39);
		context.bezierCurveTo(1323.19, 562.63, 1323.55, 569.96, 1325.07, 577.11);
		context.bezierCurveTo(1329.01, 588.96, 1332.09, 601.25, 1333.33, 613.71);
		context.lineTo(1333.33, 749.08);
		context.bezierCurveTo(1333.17, 750.89, 1332.91, 752.69, 1332.67, 754.51);
		context.bezierCurveTo(1330.03, 755.11, 1327.4, 755.72, 1324.79, 756.37);
		context.bezierCurveTo(1323.97, 758.43, 1323.27, 760.57, 1321.83, 762.29);
		context.bezierCurveTo(1321.81, 755.93, 1322.91, 749.65, 1323.91, 743.4);
		context.bezierCurveTo(1324.73, 735.6, 1325.91, 727.84, 1326.71, 720.04);
		context.bezierCurveTo(1330.41, 683.67, 1330.81, 646.77, 1325.71, 610.52);
		context.bezierCurveTo(1325.48, 608.84, 1325.27, 607.19, 1325, 605.55);
		context.bezierCurveTo(1324.24, 601.53, 1323.44, 597.53, 1322.71, 593.53);
		context.bezierCurveTo(1323.72, 593.48, 1325.76, 593.37, 1326.77, 593.32);
		context.bezierCurveTo(1325.33, 593.25, 1323.87, 593.17, 1322.47, 593.12);
		context.bezierCurveTo(1320.29, 586.23, 1318.59, 579.12, 1315.16, 572.71);
		context.bezierCurveTo(1312.43, 566.79, 1308.16, 560.76, 1301.13, 559.99);
		context.lineTo(1299.89, 559.16);
		context.bezierCurveTo(1295.87, 560.79, 1292.01, 562.95, 1289.09, 566.2);
		context.bezierCurveTo(1285.44, 569.49, 1283.6, 575.61, 1278.12, 576.13);
		context.lineTo(1278.12, 574.77);
		context.bezierCurveTo(1278.29, 572.84, 1278.57, 570.93, 1278.95, 569.04);
		context.bezierCurveTo(1281.92, 563.81, 1286.24, 559.56, 1290.77, 555.68);
		context.bezierCurveTo(1292.77, 554.63, 1294.85, 553.67, 1297, 552.91);
		context.bezierCurveTo(1301.44, 552.44, 1305.99, 552.89, 1310.09, 554.75);
		context.bezierCurveTo(1312.4, 556.71, 1314.53, 558.89, 1316.69, 561.04);
		context.bezierCurveTo(1316.31, 558.08, 1315.8, 555.13, 1315.08, 552.25);
		context.closePath();
		context.fillStyle = fillColor114;
		context.fill();
	}



	function drawPath135() {
		//// #000101ff
		//// Bezier 135 Drawing
		context.beginPath();
		context.moveTo(686.44, 558.65);
		context.bezierCurveTo(695.24, 556.56, 704.47, 557.47, 713.35, 558.68);
		context.bezierCurveTo(713.89, 558.4, 714.99, 557.84, 715.53, 557.57);
		context.bezierCurveTo(714.81, 566.07, 719.29, 575.48, 727.77, 578.24);
		context.bezierCurveTo(731.99, 580.35, 736.75, 579.67, 741.2, 578.92);
		context.bezierCurveTo(740.6, 579.31, 739.39, 580.09, 738.79, 580.48);
		context.bezierCurveTo(740.19, 586.57, 743.09, 592.31, 743.32, 598.65);
		context.bezierCurveTo(743.56, 604.03, 743.43, 609.52, 742.03, 614.76);
		context.bezierCurveTo(739.53, 623.4, 733.39, 630.29, 727.52, 636.84);
		context.bezierCurveTo(724.55, 640.39, 720.2, 642.16, 715.93, 643.57);
		context.bezierCurveTo(707.07, 647.21, 697.15, 646.81, 687.87, 645.41);
		context.bezierCurveTo(676.35, 643.36, 668.05, 634.23, 661.41, 625.27);
		context.bezierCurveTo(652.23, 612.61, 652.93, 595.23, 658.81, 581.36);
		context.bezierCurveTo(664.97, 570.87, 675.43, 563.4, 686.44, 558.65);
		context.closePath();
		context.fillStyle = fillColor115;
		context.fill();
	}



	function drawPath136() {
		//// #5c5c67ff
		//// Bezier 136 Drawing
		context.beginPath();
		context.moveTo(184.75, 559.91);
		context.bezierCurveTo(203.01, 570, 218.03, 585.32, 229.6, 602.56);
		context.bezierCurveTo(236.48, 611.99, 241.68, 622.47, 247.61, 632.48);
		context.bezierCurveTo(260.65, 658.17, 271.4, 685.08, 279.09, 712.85);
		context.bezierCurveTo(280.75, 721.69, 284.24, 730.08, 289, 737.69);
		context.bezierCurveTo(288.69, 729.44, 286.29, 721.47, 284.51, 713.45);
		context.bezierCurveTo(281.56, 702.2, 278.36, 690.99, 274.16, 680.12);
		context.bezierCurveTo(271.32, 673.6, 273.89, 666.53, 274.48, 659.83);
		context.bezierCurveTo(273.19, 667.51, 275.05, 675.08, 277.29, 682.37);
		context.bezierCurveTo(279.28, 691.95, 284.17, 700.49, 287.43, 709.64);
		context.bezierCurveTo(292.25, 722.29, 296.88, 735.08, 299.91, 748.31);
		context.bezierCurveTo(299.69, 750.39, 299.43, 752.47, 299.17, 754.55);
		context.bezierCurveTo(296.67, 756.12, 294.21, 757.81, 291.87, 759.64);
		context.bezierCurveTo(281.21, 738.71, 274.27, 716.19, 265.43, 694.49);
		context.bezierCurveTo(253.8, 663.69, 239.48, 633.87, 221.83, 606.05);
		context.bezierCurveTo(211.37, 589.65, 199.21, 574.16, 184.33, 561.56);
		context.bezierCurveTo(184.44, 561.15, 184.64, 560.32, 184.75, 559.91);
		context.closePath();
		context.fillStyle = fillColor116;
		context.fill();
	}



	function drawPath137() {
		//// #e0d0e5ff
		//// Bezier 137 Drawing
		context.beginPath();
		context.moveTo(1289.09, 566.2);
		context.bezierCurveTo(1292.01, 562.95, 1295.87, 560.79, 1299.89, 559.16);
		context.lineTo(1301.13, 559.99);
		context.bezierCurveTo(1301.8, 560.67, 1303.13, 562.03, 1303.8, 562.71);
		context.bezierCurveTo(1300.33, 564.43, 1296.85, 566.11, 1293.36, 567.76);
		context.bezierCurveTo(1291.92, 567.23, 1290.49, 566.72, 1289.09, 566.2);
		context.closePath();
		context.fillStyle = fillColor117;
		context.fill();
	}


	function drawPath138() {
		//// #c2d1e6ff
		//// Bezier 138 Drawing
		context.beginPath();
		context.moveTo(360.68, 568.48);
		context.bezierCurveTo(361.87, 566.63, 363.6, 565.23, 365.09, 563.65);
		context.bezierCurveTo(362.65, 569.97, 359.99, 576.2, 357.81, 582.61);
		context.bezierCurveTo(361.12, 577.07, 364.35, 571.48, 368, 566.16);
		context.bezierCurveTo(369.45, 578.32, 357.52, 585.57, 355.36, 596.71);
		context.bezierCurveTo(354.04, 597.2, 352.73, 597.68, 351.43, 598.19);
		context.bezierCurveTo(350.67, 606.96, 348.6, 615.64, 344.51, 623.48);
		context.bezierCurveTo(341.85, 628.35, 340.89, 633.84, 340.59, 639.32);
		context.bezierCurveTo(339.87, 639.68, 338.43, 640.4, 337.71, 640.76);
		context.bezierCurveTo(336.83, 645.84, 336.39, 650.97, 335.76, 656.09);
		context.bezierCurveTo(333.23, 660.65, 330.65, 665.25, 329.99, 670.52);
		context.bezierCurveTo(329.85, 673.19, 327.71, 674.75, 325.72, 676.17);
		context.bezierCurveTo(327.59, 665.33, 329.47, 654.47, 332.97, 644.03);
		context.bezierCurveTo(338.49, 617.65, 349.27, 592.76, 360.68, 568.48);
		context.closePath();
		context.fillStyle = fillColor118;
		context.fill();
	}



	function drawPath139() {
		//// #faeeb4ff
		//// Bezier 139 Drawing
		context.beginPath();
		context.moveTo(365.83, 623.09);
		context.bezierCurveTo(371.27, 611.23, 374.8, 598.64, 379.93, 586.64);
		context.bezierCurveTo(380.83, 587.09, 382.63, 588.03, 383.53, 588.48);
		context.bezierCurveTo(373.88, 611.56, 364.2, 634.72, 357.24, 658.79);
		context.bezierCurveTo(352.73, 669.8, 353.25, 681.95, 351.37, 693.52);
		context.bezierCurveTo(350.36, 696.04, 350.27, 698.69, 351.64, 701.11);
		context.bezierCurveTo(347.31, 708.55, 346.03, 717.19, 344.13, 725.45);
		context.bezierCurveTo(338.4, 754.35, 338.67, 784.31, 344.13, 813.23);
		context.bezierCurveTo(344.4, 816.21, 343.39, 819.03, 341.99, 821.61);
		context.bezierCurveTo(340.52, 814.2, 341.56, 806.49, 339.45, 799.19);
		context.bezierCurveTo(335.36, 780.6, 337.19, 761.47, 337.55, 742.64);
		context.bezierCurveTo(337.79, 738.59, 339.23, 734.75, 340.04, 730.8);
		context.bezierCurveTo(340.8, 727.35, 339.93, 723.79, 340.51, 720.35);
		context.bezierCurveTo(341.85, 716.8, 344.4, 713.61, 344.52, 709.69);
		context.bezierCurveTo(344.75, 703.29, 343.13, 696.75, 345.2, 690.49);
		context.bezierCurveTo(347, 684.75, 347.6, 678.73, 349.04, 672.92);
		context.bezierCurveTo(353.05, 662.53, 355.52, 651.61, 358.8, 641);
		context.bezierCurveTo(362.29, 635.51, 363.47, 629.07, 365.83, 623.09);
		context.closePath();
		context.fillStyle = fillColor119;
		context.fill();
	}
		



	function drawPath140() {
		//// #250000ff
		//// Bezier 140 Drawing
		context.beginPath();
		context.moveTo(150.03, 603.17);
		context.bezierCurveTo(156.64, 601.85, 163.59, 600.24, 170.08, 603.04);
		context.bezierCurveTo(170.37, 603.76, 170.97, 605.2, 171.28, 605.92);
		context.bezierCurveTo(174.28, 607.2, 178.05, 608.03, 179.48, 611.35);
		context.bezierCurveTo(182.52, 617.44, 185.13, 623.73, 187.71, 630.04);
		context.bezierCurveTo(189.91, 634.44, 187.48, 639.48, 189.21, 644);
		context.bezierCurveTo(191.04, 649.47, 191.56, 655.32, 190.35, 661);
		context.bezierCurveTo(189.4, 665.53, 191.77, 670.05, 190.8, 674.56);
		context.bezierCurveTo(189.24, 677.65, 187.71, 680.79, 187.27, 684.28);
		context.bezierCurveTo(187.08, 687.91, 183.37, 689.45, 181.33, 691.96);
		context.bezierCurveTo(178.75, 694.61, 177.4, 698.8, 173.64, 700.08);
		context.bezierCurveTo(165.72, 702.96, 157.61, 705.51, 149.29, 706.87);
		context.bezierCurveTo(139.8, 706.71, 130.01, 708.07, 120.81, 705.07);
		context.bezierCurveTo(114.88, 703.21, 108.73, 702.04, 102.93, 699.79);
		context.bezierCurveTo(96.51, 697.33, 91.95, 691.96, 86.41, 688.09);
		context.bezierCurveTo(85.52, 685.53, 84.41, 683.07, 82.65, 681);
		context.bezierCurveTo(82.16, 674.64, 82.25, 668.25, 82.85, 661.92);
		context.bezierCurveTo(83.61, 661.65, 85.15, 661.13, 85.92, 660.87);
		context.bezierCurveTo(85.83, 660.32, 85.63, 659.21, 85.53, 658.67);
		context.bezierCurveTo(89.57, 651.56, 97.19, 647.92, 103.89, 643.87);
		context.bezierCurveTo(111.75, 641.52, 120.27, 641.97, 128.19, 640.27);
		context.bezierCurveTo(130.33, 637.03, 130.35, 632.85, 131.45, 629.2);
		context.bezierCurveTo(132.6, 622.75, 137.63, 618.11, 140.12, 612.23);
		context.bezierCurveTo(141.88, 608.15, 145.6, 605.39, 149.99, 604.76);
		context.bezierCurveTo(150, 604.36, 150.01, 603.56, 150.03, 603.17);
		context.closePath();
		context.moveTo(147.2, 609.75);
		context.bezierCurveTo(137.37, 618.79, 132.99, 632.23, 131.41, 645.16);
		context.bezierCurveTo(117.23, 643.55, 101.59, 646.09, 91.27, 656.71);
		context.bezierCurveTo(85.03, 663.41, 83.77, 673.73, 87.56, 681.95);
		context.bezierCurveTo(91.47, 689.53, 99.03, 694.61, 107, 697.13);
		context.lineTo(107.25, 697.68);
		context.bezierCurveTo(122.29, 703.61, 138.72, 704.69, 154.69, 703.15);
		context.bezierCurveTo(160.16, 702.41, 165.09, 699.77, 170.07, 697.56);
		context.lineTo(170.19, 697.15);
		context.bezierCurveTo(175.53, 694.73, 178.52, 689.47, 181.95, 685);
		context.bezierCurveTo(187.03, 678.24, 187.57, 669.4, 187.63, 661.27);
		context.bezierCurveTo(187.4, 648.67, 185.88, 635.93, 181.61, 624.03);
		context.bezierCurveTo(179.69, 618.09, 176.47, 612.33, 171.23, 608.73);
		context.bezierCurveTo(164.24, 603.47, 153.68, 603.77, 147.2, 609.75);
		context.closePath();
		context.fillStyle = fillColor120;
		context.fill();
	}



	function drawPath141() {
		//// #d46b68ff
		//// Bezier 141 Drawing
		context.beginPath();
		context.moveTo(147.2, 609.75);
		context.bezierCurveTo(153.68, 603.77, 164.24, 603.47, 171.23, 608.73);
		context.bezierCurveTo(176.47, 612.33, 179.69, 618.09, 181.61, 624.03);
		context.bezierCurveTo(185.88, 635.93, 187.4, 648.67, 187.63, 661.27);
		context.bezierCurveTo(187.57, 669.4, 187.03, 678.24, 181.95, 685);
		context.bezierCurveTo(178.52, 689.47, 175.53, 694.73, 170.19, 697.15);
		context.bezierCurveTo(171.43, 690.73, 176.81, 686.45, 180.57, 681.49);
		context.bezierCurveTo(189.44, 660.6, 183.81, 637.09, 174.6, 617.39);
		context.bezierCurveTo(171.45, 612.12, 165.37, 608.21, 159.13, 608.61);
		context.bezierCurveTo(151.97, 610.2, 144.92, 614.59, 141.77, 621.44);
		context.bezierCurveTo(139.15, 626.89, 136.28, 632.37, 135.55, 638.47);
		context.bezierCurveTo(134.69, 641.51, 134.96, 645.91, 131.53, 647.33);
		context.bezierCurveTo(123.71, 649.57, 115.12, 647.13, 107.51, 650.37);
		context.bezierCurveTo(103.01, 652.81, 98.65, 655.53, 94.49, 658.52);
		context.bezierCurveTo(89.11, 662.35, 89.83, 669.72, 89.87, 675.56);
		context.bezierCurveTo(89.72, 680.11, 92.25, 684.2, 95.88, 686.77);
		context.bezierCurveTo(99.76, 690.05, 105.71, 691.59, 107, 697.13);
		context.bezierCurveTo(99.03, 694.61, 91.47, 689.53, 87.56, 681.95);
		context.bezierCurveTo(83.77, 673.73, 85.03, 663.41, 91.27, 656.71);
		context.bezierCurveTo(101.59, 646.09, 117.23, 643.55, 131.41, 645.16);
		context.bezierCurveTo(132.99, 632.23, 137.37, 618.79, 147.2, 609.75);
		context.closePath();
		context.fillStyle = fillColor121;
		context.fill();
	}



	function drawPath142() {
		//// #cacee5ff
		//// Bezier 142 Drawing
		context.beginPath();
		context.moveTo(1325, 605.55);
		context.bezierCurveTo(1325.27, 607.19, 1325.48, 608.84, 1325.71, 610.52);
		context.bezierCurveTo(1325, 612.77, 1324.24, 615.03, 1323.47, 617.25);
		context.bezierCurveTo(1323.12, 616.29, 1322.44, 614.36, 1322.09, 613.4);
		context.bezierCurveTo(1311.93, 614.04, 1300.79, 613.61, 1292.29, 620.19);
		context.bezierCurveTo(1287.08, 625.07, 1279.77, 626.15, 1273.8, 629.75);
		context.bezierCurveTo(1267.71, 632.72, 1263.29, 638.23, 1257.05, 640.97);
		context.bezierCurveTo(1255.33, 644.31, 1252.33, 646.43, 1248.93, 647.8);
		context.bezierCurveTo(1244.56, 649.45, 1243.81, 654.91, 1239.87, 657.15);
		context.bezierCurveTo(1235.13, 659.96, 1232.85, 665.43, 1227.99, 668.05);
		context.bezierCurveTo(1223.64, 670.36, 1221.95, 675.31, 1218.32, 678.41);
		context.bezierCurveTo(1213.65, 682.49, 1212.16, 688.81, 1208.23, 693.45);
		context.bezierCurveTo(1204.59, 697.72, 1201.65, 702.57, 1200.12, 708);
		context.bezierCurveTo(1198.96, 712.6, 1195.41, 715.84, 1192.47, 719.32);
		context.bezierCurveTo(1190.32, 721.71, 1189.95, 725.03, 1189.17, 728.01);
		context.bezierCurveTo(1187.88, 734.25, 1184.47, 739.84, 1183.51, 746.17);
		context.bezierCurveTo(1182.24, 753.39, 1179.68, 760.28, 1178.08, 767.41);
		context.bezierCurveTo(1176.64, 767.84, 1175.21, 768.28, 1173.81, 768.73);
		context.bezierCurveTo(1173.73, 778.79, 1170.48, 788.44, 1170.12, 798.49);
		context.bezierCurveTo(1168.47, 807.48, 1171.69, 816.41, 1170.64, 825.41);
		context.bezierCurveTo(1170.44, 829.28, 1169.39, 833.13, 1169.84, 837.01);
		context.bezierCurveTo(1170.81, 839.4, 1172.44, 841.49, 1173.19, 844);
		context.bezierCurveTo(1174, 848.64, 1173.23, 853.44, 1174.24, 858.07);
		context.bezierCurveTo(1176, 862.11, 1179.31, 865.21, 1181.53, 869);
		context.bezierCurveTo(1184.13, 873.08, 1185.27, 877.84, 1187.2, 882.25);
		context.bezierCurveTo(1188.72, 885.84, 1191.92, 888.27, 1194.69, 890.87);
		context.bezierCurveTo(1194.76, 892.57, 1194.83, 894.31, 1194.92, 896.04);
		context.bezierCurveTo(1189.73, 891.76, 1184.79, 886.8, 1182.41, 880.39);
		context.bezierCurveTo(1180.49, 875.07, 1177.37, 870.36, 1174.67, 865.45);
		context.bezierCurveTo(1170.77, 858.29, 1171.39, 849.83, 1168.49, 842.35);
		context.bezierCurveTo(1165.51, 834.79, 1167.2, 826.53, 1166.08, 818.68);
		context.bezierCurveTo(1164.76, 809.71, 1167.05, 800.83, 1167.33, 791.89);
		context.bezierCurveTo(1167.4, 787.69, 1168.91, 783.76, 1170.23, 779.85);
		context.bezierCurveTo(1171.53, 776.04, 1171.13, 771.93, 1171.8, 768.01);
		context.bezierCurveTo(1176.81, 752.08, 1180.12, 735.29, 1188.88, 720.83);
		context.bezierCurveTo(1190.97, 716.99, 1191.72, 712.55, 1194.07, 708.85);
		context.bezierCurveTo(1198.77, 702.72, 1201.75, 695.49, 1206.73, 689.53);
		context.bezierCurveTo(1210.79, 681.72, 1217.33, 675.72, 1221.85, 668.23);
		context.bezierCurveTo(1224.23, 664.52, 1228.11, 662.21, 1231.24, 659.21);
		context.bezierCurveTo(1239.73, 651.24, 1248.89, 644.01, 1257.2, 635.83);
		context.bezierCurveTo(1267.24, 627.6, 1278.88, 621.75, 1290.37, 615.85);
		context.bezierCurveTo(1294.64, 614.11, 1299.11, 612.91, 1303.43, 611.25);
		context.bezierCurveTo(1310.39, 608.47, 1318.13, 608.67, 1325, 605.55);
		context.closePath();
		context.fillStyle = fillColor122;
		context.fill();
	}



	function drawPath143() {
		//// #fe5751ff
		//// Bezier 143 Drawing
		context.beginPath();
		context.moveTo(159.13, 608.61);
		context.bezierCurveTo(165.37, 608.21, 171.45, 612.12, 174.6, 617.39);
		context.bezierCurveTo(183.81, 637.09, 189.44, 660.6, 180.57, 681.49);
		context.bezierCurveTo(176.81, 686.45, 171.43, 690.73, 170.19, 697.15);
		context.lineTo(170.07, 697.56);
		context.bezierCurveTo(165.09, 699.77, 160.16, 702.41, 154.69, 703.15);
		context.bezierCurveTo(138.72, 704.69, 122.29, 703.61, 107.25, 697.68);
		context.lineTo(107, 697.13);
		context.bezierCurveTo(105.71, 691.59, 99.76, 690.05, 95.88, 686.77);
		context.bezierCurveTo(92.25, 684.2, 89.72, 680.11, 89.87, 675.56);
		context.bezierCurveTo(89.83, 669.72, 89.11, 662.35, 94.49, 658.52);
		context.bezierCurveTo(98.65, 655.53, 103.01, 652.81, 107.51, 650.37);
		context.bezierCurveTo(115.12, 647.13, 123.71, 649.57, 131.53, 647.33);
		context.bezierCurveTo(134.96, 645.91, 134.69, 641.51, 135.55, 638.47);
		context.bezierCurveTo(136.28, 632.37, 139.15, 626.89, 141.77, 621.44);
		context.bezierCurveTo(144.92, 614.59, 151.97, 610.2, 159.13, 608.61);
		context.closePath();
		context.fillStyle = fillColor123;
		context.fill();
	}



	function drawPath144() {
		//// #c5ccf8ff
		//// Bezier 144 Drawing
		context.beginPath();
		context.moveTo(1325.71, 610.52);
		context.bezierCurveTo(1330.81, 646.77, 1330.41, 683.67, 1326.71, 720.04);
		context.bezierCurveTo(1326.31, 716.68, 1325.55, 713.4, 1324.68, 710.15);
		context.bezierCurveTo(1320.8, 716.95, 1322.21, 724.92, 1320.12, 732.2);
		context.bezierCurveTo(1318.65, 736.32, 1322.4, 739.85, 1323.91, 743.4);
		context.bezierCurveTo(1322.91, 749.65, 1321.81, 755.93, 1321.83, 762.29);
		context.lineTo(1321.17, 763.24);
		context.bezierCurveTo(1313.56, 802.52, 1301.79, 841.24, 1283.23, 876.8);
		context.bezierCurveTo(1277.73, 886.83, 1272.43, 896.96, 1266.68, 906.84);
		context.bezierCurveTo(1263.17, 912.07, 1259.75, 917.35, 1256.92, 922.97);
		context.bezierCurveTo(1251.28, 925.85, 1248.72, 932.05, 1244.09, 936.11);
		context.bezierCurveTo(1229.67, 950.12, 1213.6, 962.56, 1196.07, 972.44);
		context.lineTo(1197.83, 974.2);
		context.bezierCurveTo(1196.89, 973.95, 1195.97, 973.67, 1195.08, 973.41);
		context.bezierCurveTo(1183.87, 979.92, 1172.32, 985.89, 1160.53, 991.29);
		context.bezierCurveTo(1155.53, 990, 1150.53, 988.76, 1145.64, 987.13);
		context.bezierCurveTo(1145.97, 985.32, 1146.32, 983.51, 1146.67, 981.69);
		context.bezierCurveTo(1149.76, 981.55, 1152.88, 981.56, 1155.95, 980.99);
		context.bezierCurveTo(1158.64, 978.32, 1159.75, 974.44, 1162.52, 971.84);
		context.bezierCurveTo(1165.84, 969.23, 1170.37, 968.49, 1173.25, 965.28);
		context.bezierCurveTo(1179.83, 958.12, 1186.24, 950.72, 1194.13, 944.95);
		context.bezierCurveTo(1194.47, 943.13, 1194.83, 941.35, 1195.21, 939.56);
		context.bezierCurveTo(1202.04, 939.35, 1203.84, 932.19, 1208.39, 928.48);
		context.bezierCurveTo(1210.67, 926.33, 1213.33, 924.57, 1215.29, 922.11);
		context.bezierCurveTo(1216.77, 917.99, 1215.91, 913.48, 1215.81, 909.21);
		context.bezierCurveTo(1212.41, 907.64, 1208.95, 905.81, 1205.09, 906.23);
		context.bezierCurveTo(1201.43, 903.09, 1198.6, 899.12, 1194.92, 896.04);
		context.bezierCurveTo(1194.83, 894.31, 1194.76, 892.57, 1194.69, 890.87);
		context.bezierCurveTo(1191.92, 888.27, 1188.72, 885.84, 1187.2, 882.25);
		context.bezierCurveTo(1185.27, 877.84, 1184.13, 873.08, 1181.53, 869);
		context.bezierCurveTo(1179.31, 865.21, 1176, 862.11, 1174.24, 858.07);
		context.bezierCurveTo(1173.23, 853.44, 1174, 848.64, 1173.19, 844);
		context.bezierCurveTo(1172.44, 841.49, 1170.81, 839.4, 1169.84, 837.01);
		context.bezierCurveTo(1169.39, 833.13, 1170.44, 829.28, 1170.64, 825.41);
		context.bezierCurveTo(1171.69, 816.41, 1168.47, 807.48, 1170.12, 798.49);
		context.bezierCurveTo(1170.48, 788.44, 1173.73, 778.79, 1173.81, 768.73);
		context.bezierCurveTo(1175.21, 768.28, 1176.64, 767.84, 1178.08, 767.41);
		context.bezierCurveTo(1179.68, 760.28, 1182.24, 753.39, 1183.51, 746.17);
		context.bezierCurveTo(1184.47, 739.84, 1187.88, 734.25, 1189.17, 728.01);
		context.bezierCurveTo(1189.95, 725.03, 1190.32, 721.71, 1192.47, 719.32);
		context.bezierCurveTo(1195.41, 715.84, 1198.96, 712.6, 1200.12, 708);
		context.bezierCurveTo(1201.65, 702.57, 1204.59, 697.72, 1208.23, 693.45);
		context.bezierCurveTo(1212.16, 688.81, 1213.65, 682.49, 1218.32, 678.41);
		context.bezierCurveTo(1221.95, 675.31, 1223.64, 670.36, 1227.99, 668.05);
		context.bezierCurveTo(1232.85, 665.43, 1235.13, 659.96, 1239.87, 657.15);
		context.bezierCurveTo(1243.81, 654.91, 1244.56, 649.45, 1248.93, 647.8);
		context.bezierCurveTo(1252.33, 646.43, 1255.33, 644.31, 1257.05, 640.97);
		context.bezierCurveTo(1263.29, 638.23, 1267.71, 632.72, 1273.8, 629.75);
		context.bezierCurveTo(1279.77, 626.15, 1287.08, 625.07, 1292.29, 620.19);
		context.bezierCurveTo(1300.79, 613.61, 1311.93, 614.04, 1322.09, 613.4);
		context.bezierCurveTo(1322.44, 614.36, 1323.12, 616.29, 1323.47, 617.25);
		context.bezierCurveTo(1324.24, 615.03, 1325, 612.77, 1325.71, 610.52);
		context.closePath();
		context.fillStyle = fillColor124;
		context.fill();
	}

	function drawPath145() {
		//// Bezier 145 Drawing
		context.beginPath();
		context.moveTo(265.13, 942.56);
		context.bezierCurveTo(273.55, 934.57, 279.67, 924.57, 285.53, 914.67);
		context.bezierCurveTo(286.89, 934.63, 286.16, 954.72, 288.05, 974.67);
		context.bezierCurveTo(288.36, 988.56, 289.8, 1002.41, 291.67, 1016.17);
		context.bezierCurveTo(291.47, 1028.68, 294.05, 1040.97, 295.19, 1053.37);
		context.bezierCurveTo(297.43, 1068.95, 299.08, 1084.61, 302.27, 1100.04);
		context.bezierCurveTo(303.39, 1112.93, 307.09, 1125.33, 310.27, 1137.83);
		context.bezierCurveTo(312.07, 1144.44, 312.43, 1151.37, 314.65, 1157.89);
		context.bezierCurveTo(314.72, 1163.53, 316.53, 1168.84, 318.84, 1173.92);
		context.bezierCurveTo(325.04, 1193.85, 333.23, 1213.08, 340.95, 1232.47);
		context.bezierCurveTo(343.91, 1240.27, 348.19, 1247.49, 351.21, 1255.28);
		context.bezierCurveTo(353.61, 1261.49, 358.21, 1266.55, 360.53, 1272.8);
		context.bezierCurveTo(362.6, 1278.96, 367.28, 1283.76, 369.21, 1290);
		context.bezierCurveTo(373.67, 1297.31, 378.21, 1304.57, 383.09, 1311.63);
		context.bezierCurveTo(387.01, 1319.08, 393.79, 1324.89, 395.8, 1333.33);
		context.lineTo(256.67, 1333.33);
		context.bezierCurveTo(256.2, 1329.55, 255.68, 1325.79, 255.25, 1322.01);
		context.bezierCurveTo(253.47, 1322.08, 251.68, 1322.17, 249.89, 1322.28);
		context.bezierCurveTo(244.08, 1272.51, 239.24, 1222.57, 237.39, 1172.48);
		context.bezierCurveTo(235.04, 1110.04, 236.28, 1047.45, 241.72, 985.21);
		context.bezierCurveTo(241.91, 983.43, 241.63, 981.71, 240.89, 980.08);
		context.bezierCurveTo(241.24, 980.35, 241.93, 980.87, 242.28, 981.13);
		context.bezierCurveTo(242.67, 974.37, 244.16, 967.28, 241.41, 960.81);
		context.bezierCurveTo(250.31, 956.13, 257.63, 949.11, 265.13, 942.56);
		context.closePath();
		context.fillStyle = fillColor124;
		context.fill();
	}




		//// #595959ff

	function drawPath146() {
		//// #000001ff
		//// Bezier 146 Drawing
		context.beginPath();
		context.moveTo(915.87, 633.29);
		context.bezierCurveTo(931.27, 629.99, 947.07, 629.49, 962.75, 630.55);
		context.bezierCurveTo(967.09, 631.92, 971.43, 633.43, 975.65, 635.15);
		context.bezierCurveTo(979.28, 639.72, 977.81, 646.33, 975, 650.99);
		context.bezierCurveTo(968.33, 661.29, 957.83, 668.64, 946.72, 673.49);
		context.bezierCurveTo(941.63, 674.81, 936.15, 675.47, 930.93, 674.6);
		context.bezierCurveTo(923.81, 672.55, 916.25, 671.97, 909.53, 668.67);
		context.bezierCurveTo(901.8, 665.25, 894.67, 659.72, 891.11, 651.87);
		context.bezierCurveTo(889.59, 648.29, 890.33, 643.81, 892.96, 640.96);
		context.bezierCurveTo(898.73, 634.57, 908.11, 635.13, 915.87, 633.29);
		context.closePath();
		context.fillStyle = fillColor125;
		context.fill();
	}



	function drawPath147() {
		//// #ccd0e6ff
		//// Bezier 147 Drawing
		context.beginPath();
		context.moveTo(403.33, 659.08);
		context.bezierCurveTo(405.92, 650.43, 408.91, 641.88, 412.49, 633.59);
		context.bezierCurveTo(413.57, 641.99, 411.93, 650.33, 411.37, 658.71);
		context.bezierCurveTo(409.08, 679.97, 410.59, 701.4, 411.43, 722.71);
		context.bezierCurveTo(413.97, 749.52, 419.15, 776.12, 427.12, 801.85);
		context.bezierCurveTo(421.08, 800.4, 420.69, 793.97, 419.57, 788.96);
		context.bezierCurveTo(419.15, 788.83, 418.29, 788.55, 417.87, 788.4);
		context.bezierCurveTo(417.83, 781.75, 416.69, 775.17, 415.53, 768.64);
		context.bezierCurveTo(414.77, 768.28, 413.25, 767.55, 412.49, 767.17);
		context.bezierCurveTo(411.79, 759.85, 410.24, 752.59, 410.27, 745.21);
		context.bezierCurveTo(409.93, 730.11, 407.45, 715.11, 407.89, 699.97);
		context.bezierCurveTo(407.99, 693.68, 407.87, 687.36, 407.11, 681.11);
		context.bezierCurveTo(406.21, 674.11, 407.4, 666.97, 405.69, 660.07);
		context.bezierCurveTo(404.93, 660.33, 403.41, 660.84, 402.65, 661.11);
		context.bezierCurveTo(402.81, 660.6, 403.16, 659.59, 403.33, 659.08);
		context.closePath();
		context.fillStyle = fillColor126;
		context.fill();
	}



	function drawPath148() {
		//// #dafcbaff
		//// Bezier 148 Drawing
		context.beginPath();
		context.moveTo(341.91, 654.75);
		context.bezierCurveTo(343.97, 649.77, 345.97, 644.76, 347.39, 639.56);
		context.bezierCurveTo(348.29, 639.73, 350.13, 640.11, 351.05, 640.28);
		context.bezierCurveTo(349.04, 646.92, 347.25, 653.64, 345.89, 660.45);
		context.bezierCurveTo(344.61, 660.99, 343.33, 661.53, 342.07, 662.09);
		context.bezierCurveTo(341.6, 666.57, 340.93, 671.07, 339.36, 675.31);
		context.bezierCurveTo(333.43, 697.65, 331.35, 720.93, 331.6, 744.03);
		context.bezierCurveTo(331.73, 753.36, 329.43, 762.6, 330.31, 771.95);
		context.bezierCurveTo(331.59, 785.77, 332.37, 799.65, 334.48, 813.39);
		context.bezierCurveTo(337.15, 823.73, 339.31, 834.21, 341, 844.76);
		context.bezierCurveTo(338.08, 840.63, 336.99, 835.64, 335.32, 830.96);
		context.bezierCurveTo(330.71, 818.96, 330.32, 806.01, 328.71, 793.41);
		context.bezierCurveTo(327.48, 782.33, 325.27, 771.2, 326.57, 760.03);
		context.bezierCurveTo(329.17, 734.72, 327.87, 708.96, 333.4, 684);
		context.bezierCurveTo(334.69, 677.16, 335.31, 670.01, 338.52, 663.72);
		context.bezierCurveTo(340, 660.87, 340.96, 657.8, 341.91, 654.75);
		context.closePath();
		context.fillStyle = fillColor127;
		context.fill();
	}


	function drawPath149() {
		//// #d0c1efff
		//// Bezier 149 Drawing
		context.beginPath();
		context.moveTo(375.39, 640.33);
		context.bezierCurveTo(376.84, 640.01, 378.31, 639.69, 379.77, 639.39);
		context.bezierCurveTo(379.65, 648.49, 376.28, 657.09, 371.72, 664.84);
		context.bezierCurveTo(369.03, 675.84, 366.61, 686.95, 363.09, 697.75);
		context.bezierCurveTo(362.8, 695.68, 362.52, 693.61, 362.24, 691.56);
		context.bezierCurveTo(361.68, 680.53, 365.09, 669.92, 368.95, 659.76);
		context.bezierCurveTo(372.08, 653.64, 374.16, 647.08, 375.39, 640.33);
		context.closePath();
		context.fillStyle = fillColor128;
		context.fill();
	}


	function drawPath150() {
		//// #d0d0ddff
		//// Bezier 150 Drawing
		context.beginPath();
		context.moveTo(891.11, 651.87);
		context.bezierCurveTo(894.67, 659.72, 901.8, 665.25, 909.53, 668.67);
		context.bezierCurveTo(916.25, 671.97, 923.81, 672.55, 930.93, 674.6);
		context.bezierCurveTo(920.03, 677.23, 907.99, 675.73, 898.88, 668.95);
		context.bezierCurveTo(894.44, 664.32, 889.44, 658.83, 891.11, 651.87);
		context.closePath();
		context.fillStyle = fillColor129;
		context.fill();
	}



	function drawPath151() {
		//// #a8f0eaff
		//// Bezier 151 Drawing
		context.beginPath();
		context.moveTo(335.76, 656.09);
		context.bezierCurveTo(337.8, 655.64, 339.85, 655.19, 341.91, 654.75);
		context.bezierCurveTo(340.96, 657.8, 340, 660.87, 338.52, 663.72);
		context.bezierCurveTo(335.31, 670.01, 334.69, 677.16, 333.4, 684);
		context.bezierCurveTo(327.87, 708.96, 329.17, 734.72, 326.57, 760.03);
		context.bezierCurveTo(325.27, 771.2, 327.48, 782.33, 328.71, 793.41);
		context.bezierCurveTo(330.32, 806.01, 330.71, 818.96, 335.32, 830.96);
		context.bezierCurveTo(334.48, 838.28, 336.21, 845.43, 338.21, 852.41);
		context.bezierCurveTo(338.89, 852.68, 340.24, 853.2, 340.92, 853.47);
		context.bezierCurveTo(340.77, 861.96, 346.39, 868.57, 349.36, 876.09);
		context.bezierCurveTo(352.21, 882.43, 356.12, 888.25, 358.44, 894.84);
		context.bezierCurveTo(359.68, 895.44, 360.91, 896.05, 362.15, 896.68);
		context.bezierCurveTo(362.87, 900.03, 362.57, 904.01, 365.17, 906.61);
		context.bezierCurveTo(367.45, 909.17, 369.6, 911.87, 371.08, 914.99);
		context.bezierCurveTo(368.16, 912.39, 365.04, 910.04, 362.03, 907.55);
		context.bezierCurveTo(356.96, 903.07, 355.17, 896.31, 351.51, 890.84);
		context.bezierCurveTo(347.89, 885.47, 344.81, 879.77, 342.11, 873.89);
		context.bezierCurveTo(339.69, 868.96, 337.23, 864.03, 335.79, 858.71);
		context.bezierCurveTo(334.76, 854.63, 331.81, 851.31, 331.23, 847.09);
		context.bezierCurveTo(330.72, 844.32, 330.41, 841.51, 329.79, 838.77);
		context.bezierCurveTo(329.09, 838.29, 327.72, 837.33, 327.03, 836.85);
		context.bezierCurveTo(324.97, 828.67, 323.59, 820.35, 322.55, 811.99);
		context.bezierCurveTo(319.73, 798.83, 320.31, 785.27, 318.64, 771.96);
		context.bezierCurveTo(317.39, 763.11, 319.32, 754.27, 319.24, 745.4);
		context.bezierCurveTo(319.17, 722.19, 321.71, 699.01, 325.72, 676.17);
		context.bezierCurveTo(327.71, 674.75, 329.85, 673.19, 329.99, 670.52);
		context.bezierCurveTo(330.65, 665.25, 333.23, 660.65, 335.76, 656.09);
		context.closePath();
		context.fillStyle = fillColor130;
		context.fill();
	}



	function drawPath152() {
		//// #00081eff
		//// Bezier 152 Drawing
		context.beginPath();
		context.moveTo(397.67, 655.79);
		context.bezierCurveTo(399.56, 656.88, 401.44, 657.97, 403.33, 659.08);
		context.bezierCurveTo(403.16, 659.59, 402.81, 660.6, 402.65, 661.11);
		context.bezierCurveTo(397.35, 675.88, 394.68, 691.4, 391.97, 706.81);
		context.bezierCurveTo(391.41, 721.87, 389.81, 736.89, 390.44, 751.97);
		context.bezierCurveTo(391.35, 766.32, 391.95, 780.97, 396.96, 794.61);
		context.bezierCurveTo(401.41, 813.32, 406.55, 831.97, 414.51, 849.55);
		context.bezierCurveTo(435.29, 895.99, 470.07, 935.65, 512.01, 964.19);
		context.bezierCurveTo(519.12, 968.97, 525.91, 974.23, 532.87, 979.23);
		context.bezierCurveTo(535.55, 981.12, 538.33, 982.88, 541.2, 984.49);
		context.bezierCurveTo(544.61, 986.4, 547.95, 988.41, 551.37, 990.29);
		context.bezierCurveTo(564.49, 997.41, 578.49, 1002.71, 592.24, 1008.48);
		context.lineTo(593.83, 1009.48);
		context.bezierCurveTo(576.31, 1004.39, 559.4, 997.39, 543.37, 988.67);
		context.bezierCurveTo(526.6, 980.76, 511.08, 970.56, 496.01, 959.85);
		context.bezierCurveTo(480.59, 947.55, 465.36, 934.73, 452.65, 919.56);
		context.bezierCurveTo(443.05, 908.72, 434.4, 897.04, 426.29, 885.05);
		context.bezierCurveTo(416.25, 867.59, 406.73, 849.67, 400.57, 830.43);
		context.bezierCurveTo(396.56, 817.64, 393.45, 804.6, 390.61, 791.52);
		context.bezierCurveTo(391.61, 790.41, 392.61, 789.31, 393.61, 788.21);
		context.bezierCurveTo(392.81, 788.89, 391.2, 790.25, 390.39, 790.93);
		context.bezierCurveTo(388.89, 783.37, 387.57, 775.6, 388.76, 767.91);
		context.bezierCurveTo(388.48, 768.76, 387.91, 770.47, 387.63, 771.32);
		context.bezierCurveTo(386.88, 762.67, 386.05, 754.01, 385.92, 745.33);
		context.bezierCurveTo(385.69, 727.93, 384.89, 710.29, 388.91, 693.23);
		context.bezierCurveTo(392.04, 680.79, 393.21, 667.89, 397.67, 655.79);
		context.closePath();
		context.fillStyle = fillColor131;
		context.fill();
	}


	function drawPath153() {
		//// #c8cef6ff
		//// Bezier 153 Drawing
		context.beginPath();
		context.moveTo(402.65, 661.11);
		context.bezierCurveTo(403.41, 660.84, 404.93, 660.33, 405.69, 660.07);
		context.bezierCurveTo(407.4, 666.97, 406.21, 674.11, 407.11, 681.11);
		context.bezierCurveTo(407.87, 687.36, 407.99, 693.68, 407.89, 699.97);
		context.bezierCurveTo(407.45, 715.11, 409.93, 730.11, 410.27, 745.21);
		context.bezierCurveTo(410.24, 752.59, 411.79, 759.85, 412.49, 767.17);
		context.bezierCurveTo(413.25, 767.55, 414.77, 768.28, 415.53, 768.64);
		context.bezierCurveTo(416.69, 775.17, 417.83, 781.75, 417.87, 788.4);
		context.bezierCurveTo(418.29, 788.55, 419.15, 788.83, 419.57, 788.96);
		context.bezierCurveTo(420.69, 793.97, 421.08, 800.4, 427.12, 801.85);
		context.bezierCurveTo(432.53, 820.8, 442.11, 838.16, 449.19, 856.48);
		context.bezierCurveTo(454.16, 868.04, 462.12, 877.89, 468.48, 888.68);
		context.bezierCurveTo(476.12, 900.32, 484.93, 911.28, 495.31, 920.61);
		context.bezierCurveTo(511.24, 936.35, 526.33, 953.55, 546.08, 964.64);
		context.bezierCurveTo(555.95, 969.2, 566.07, 973.23, 575.68, 978.32);
		context.bezierCurveTo(575.57, 982.4, 577.52, 985.72, 581.56, 986.81);
		context.bezierCurveTo(579.23, 988.61, 576.96, 990.49, 574.79, 992.48);
		context.bezierCurveTo(572.52, 992.27, 570.25, 992.07, 568.01, 991.8);
		context.bezierCurveTo(562.79, 991.39, 558.71, 987.63, 553.68, 986.48);
		context.bezierCurveTo(553.11, 987.43, 551.95, 989.33, 551.37, 990.29);
		context.bezierCurveTo(547.95, 988.41, 544.61, 986.4, 541.2, 984.49);
		context.bezierCurveTo(542.87, 984.23, 544.55, 983.99, 546.23, 983.75);
		context.bezierCurveTo(543.37, 982.08, 540.64, 980.23, 538.11, 978.12);
		context.bezierCurveTo(536.36, 978.48, 534.6, 978.83, 532.87, 979.23);
		context.bezierCurveTo(525.91, 974.23, 519.12, 968.97, 512.01, 964.19);
		context.bezierCurveTo(470.07, 935.65, 435.29, 895.99, 414.51, 849.55);
		context.bezierCurveTo(406.55, 831.97, 401.41, 813.32, 396.96, 794.61);
		context.bezierCurveTo(391.95, 780.97, 391.35, 766.32, 390.44, 751.97);
		context.bezierCurveTo(389.81, 736.89, 391.41, 721.87, 391.97, 706.81);
		context.bezierCurveTo(394.68, 691.4, 397.35, 675.88, 402.65, 661.11);
		context.closePath();
		context.fillStyle = fillColor132;
		context.fill();
	}



	function drawPath154() {
		//// #cacee3ff
		//// Bezier 154 Drawing
		context.beginPath();
		context.moveTo(1046.13, 681.09);
		context.bezierCurveTo(1049.92, 685.13, 1053.76, 689.12, 1057.77, 692.95);
		context.bezierCurveTo(1053.36, 695.68, 1050.24, 690.59, 1047.2, 688.27);
		context.bezierCurveTo(1044.25, 693.73, 1040.83, 699.37, 1040.95, 705.81);
		context.bezierCurveTo(1041.03, 710.96, 1040.77, 716.12, 1040.2, 721.24);
		context.bezierCurveTo(1039.33, 728.39, 1041.43, 735.44, 1041.04, 742.57);
		context.bezierCurveTo(1041.01, 745.27, 1040.51, 748.03, 1041.16, 750.69);
		context.bezierCurveTo(1042.49, 754.69, 1046.27, 757.16, 1048.21, 760.81);
		context.bezierCurveTo(1049.04, 762.96, 1049.45, 765.24, 1050, 767.49);
		context.bezierCurveTo(1052.67, 768.68, 1055.37, 769.83, 1057.97, 771.19);
		context.bezierCurveTo(1060.69, 773.36, 1057.75, 777.67, 1057.23, 780.53);
		context.bezierCurveTo(1045.6, 774.88, 1041.55, 761.67, 1038.33, 750.15);
		context.bezierCurveTo(1036.05, 727.75, 1036.84, 704.8, 1043.16, 683.11);
		context.bezierCurveTo(1043.91, 682.61, 1045.39, 681.6, 1046.13, 681.09);
		context.closePath();
		context.fillStyle = fillColor133;
		context.fill();
	}



	function drawPath155() {
		//// #050405ff
		//// Bezier 155 Drawing
		context.beginPath();
		context.moveTo(825.44, 687.36);
		context.bezierCurveTo(829.36, 687.31, 830.6, 691.53, 832.68, 694.08);
		context.bezierCurveTo(837.03, 700.25, 845.95, 700.31, 850.69, 705.95);
		context.bezierCurveTo(857.23, 705.76, 863.64, 707.4, 870.11, 708.24);
		context.bezierCurveTo(862.93, 710.68, 855.36, 708.13, 848.17, 710.53);
		context.bezierCurveTo(837.29, 708.21, 825.64, 703.07, 819.65, 693.16);
		context.bezierCurveTo(819.91, 692.44, 820.43, 690.99, 820.68, 690.27);
		context.bezierCurveTo(822.27, 689.32, 823.88, 688.39, 825.44, 687.36);
		context.closePath();
		context.fillStyle = fillColor134;
		context.fill();
	}



	function drawPath156() {
		//// #c6ccf5ff
		//// Bezier 156 Drawing
		context.beginPath();
		context.moveTo(1040.95, 705.81);
		context.bezierCurveTo(1040.83, 699.37, 1044.25, 693.73, 1047.2, 688.27);
		context.bezierCurveTo(1050.24, 690.59, 1053.36, 695.68, 1057.77, 692.95);
		context.bezierCurveTo(1064.28, 699.2, 1071.67, 704.4, 1079.47, 708.92);
		context.bezierCurveTo(1069.41, 726.69, 1061.8, 746.28, 1059.8, 766.72);
		context.bezierCurveTo(1059.24, 768.23, 1058.64, 769.72, 1057.97, 771.19);
		context.bezierCurveTo(1055.37, 769.83, 1052.67, 768.68, 1050, 767.49);
		context.bezierCurveTo(1049.45, 765.24, 1049.04, 762.96, 1048.21, 760.81);
		context.bezierCurveTo(1046.27, 757.16, 1042.49, 754.69, 1041.16, 750.69);
		context.bezierCurveTo(1040.51, 748.03, 1041.01, 745.27, 1041.04, 742.57);
		context.bezierCurveTo(1041.43, 735.44, 1039.33, 728.39, 1040.2, 721.24);
		context.bezierCurveTo(1040.77, 716.12, 1041.03, 710.96, 1040.95, 705.81);
		context.closePath();
		context.fillStyle = fillColor135;
		context.fill();
	}



	function drawPath157() {
		//// #040404ff
		//// Bezier 157 Drawing
		context.beginPath();
		context.moveTo(1007.53, 696.84);
		context.bezierCurveTo(1010.67, 694.04, 1012.89, 690.29, 1016.45, 687.96);
		context.bezierCurveTo(1019.35, 691.21, 1018.37, 695.61, 1015.48, 698.48);
		context.bezierCurveTo(1007.65, 706, 996.61, 709.2, 986.01, 709.77);
		context.bezierCurveTo(986.45, 708.91, 986.95, 708.08, 987.47, 707.27);
		context.bezierCurveTo(994.2, 703.93, 1002.13, 702.43, 1007.53, 696.84);
		context.closePath();
		context.fillStyle = fillColor136;
		context.fill();
	}



	function drawPath158() {
		//// #d9c0eeff
		//// Bezier 158 Drawing
		context.beginPath();
		context.moveTo(357.55, 704.04);
		context.bezierCurveTo(357.2, 699.33, 359.59, 695.21, 362.24, 691.56);
		context.bezierCurveTo(362.52, 693.61, 362.8, 695.68, 363.09, 697.75);
		context.bezierCurveTo(363.35, 705.24, 362.19, 712.67, 361.84, 720.13);
		context.bezierCurveTo(362.77, 735.73, 358.24, 751.07, 359.08, 766.69);
		context.bezierCurveTo(358.71, 775.32, 362.16, 783.44, 362.53, 792);
		context.bezierCurveTo(362.8, 795.52, 362.84, 799.07, 363.07, 802.61);
		context.bezierCurveTo(363.19, 809.61, 366.77, 815.85, 367.96, 822.67);
		context.bezierCurveTo(370.19, 834.68, 374.31, 846.23, 378.56, 857.65);
		context.bezierCurveTo(380.61, 863.36, 384.47, 868.45, 384.89, 874.69);
		context.bezierCurveTo(383.83, 874.55, 381.69, 874.24, 380.63, 874.08);
		context.bezierCurveTo(378.88, 867.08, 376.2, 860.35, 372.69, 854.04);
		context.bezierCurveTo(368.27, 846, 366.47, 836.92, 364.03, 828.17);
		context.bezierCurveTo(362.64, 823.12, 360.12, 818.4, 359.37, 813.19);
		context.bezierCurveTo(357.68, 794.57, 356, 775.95, 355.16, 757.28);
		context.bezierCurveTo(355.37, 751.49, 356.6, 745.77, 356.41, 739.97);
		context.bezierCurveTo(356.09, 727.97, 357.71, 716.04, 357.55, 704.04);
		context.closePath();
		context.fillStyle = fillColor137;
		context.fill();
	}



	function drawPath159() {
		//// #1d0101ff
		//// Bezier 159 Drawing
		context.beginPath();
		context.moveTo(891.76, 706.13);
		context.bezierCurveTo(905.84, 703.64, 919.16, 698, 933.13, 695.13);
		context.bezierCurveTo(931.73, 696.32, 930.31, 697.47, 928.97, 698.71);
		context.bezierCurveTo(946.59, 705.2, 965.36, 710.28, 984.29, 708.07);
		context.bezierCurveTo(984.37, 707.48, 984.56, 706.32, 984.65, 705.73);
		context.bezierCurveTo(984.79, 706.16, 985.03, 707, 985.16, 707.43);
		context.lineTo(987.47, 707.27);
		context.bezierCurveTo(986.95, 708.08, 986.45, 708.91, 986.01, 709.77);
		context.lineTo(985.71, 710.32);
		context.bezierCurveTo(979.04, 712.08, 972.11, 711.65, 965.31, 712.41);
		context.bezierCurveTo(963.13, 712.69, 960.97, 712.4, 958.87, 711.92);
		context.bezierCurveTo(958.13, 711.75, 956.67, 711.41, 955.93, 711.24);
		context.bezierCurveTo(947.33, 709.51, 938.6, 707.84, 930.68, 703.92);
		context.bezierCurveTo(928.31, 703.05, 925.89, 700.96, 923.27, 702.05);
		context.bezierCurveTo(917.44, 703.89, 912.03, 706.77, 906.19, 708.57);
		context.bezierCurveTo(888.81, 713.72, 870.23, 715.49, 852.37, 711.88);
		context.bezierCurveTo(850.87, 712.95, 849.36, 714.01, 847.91, 715.16);
		context.bezierCurveTo(847.97, 714, 848.11, 711.69, 848.17, 710.53);
		context.bezierCurveTo(855.36, 708.13, 862.93, 710.68, 870.11, 708.24);
		context.bezierCurveTo(877.29, 707.31, 884.65, 707.77, 891.76, 706.13);
		context.closePath();
		context.fillStyle = fillColor138;
		context.fill();
	}


	function drawPath160() {

		//// #1a0202ff
		//// Bezier 160 Drawing
		context.beginPath();
		context.moveTo(351.64, 701.11);
		context.bezierCurveTo(352.43, 701.08, 354, 701.01, 354.79, 700.97);
		context.bezierCurveTo(344.8, 733.11, 341.88, 767.44, 346.75, 800.76);
		context.bezierCurveTo(351.2, 831.95, 361.15, 862.28, 375.59, 890.25);
		context.bezierCurveTo(375.35, 890.85, 374.85, 892.05, 374.61, 892.65);
		context.bezierCurveTo(373.28, 892.31, 371.97, 891.95, 370.68, 891.55);
		context.lineTo(370.19, 891.23);
		context.bezierCurveTo(358.76, 868.36, 350.52, 843.91, 345.12, 818.93);
		context.bezierCurveTo(344.76, 817.01, 344.44, 815.12, 344.13, 813.23);
		context.bezierCurveTo(338.67, 784.31, 338.4, 754.35, 344.13, 725.45);
		context.bezierCurveTo(346.03, 717.19, 347.31, 708.55, 351.64, 701.11);
		context.closePath();
		context.fillStyle = fillColor139;
		context.fill();
	}



	function drawPath161() {
		//// #db817bff
		//// Bezier 161 Drawing
		context.beginPath();
		context.moveTo(923.27, 702.05);
		context.bezierCurveTo(925.89, 700.96, 928.31, 703.05, 930.68, 703.92);
		context.bezierCurveTo(938.6, 707.84, 947.33, 709.51, 955.93, 711.24);
		context.bezierCurveTo(958.67, 712.2, 961.33, 714.05, 964.39, 713.15);
		context.bezierCurveTo(970.75, 711.73, 977.25, 712.67, 983.71, 712.36);
		context.bezierCurveTo(983.35, 713.25, 982.65, 715.04, 982.29, 715.92);
		context.bezierCurveTo(971.75, 714.75, 961.17, 716.31, 950.63, 715.44);
		context.bezierCurveTo(948.15, 711.93, 944.24, 710.37, 940.03, 710.4);
		context.bezierCurveTo(933.65, 710.39, 928.81, 705.29, 922.63, 704.72);
		context.bezierCurveTo(918.64, 706.49, 915.32, 709.56, 911.16, 711.04);
		context.bezierCurveTo(897.76, 713.11, 884.57, 717.28, 870.87, 716.75);
		context.bezierCurveTo(865.12, 716.71, 859.31, 714.93, 853.61, 716.16);
		context.bezierCurveTo(850.45, 718.36, 848.12, 721.48, 845.56, 724.31);
		context.bezierCurveTo(845.16, 723.85, 844.37, 722.93, 843.97, 722.47);
		context.bezierCurveTo(843.61, 721.99, 842.88, 721.01, 842.52, 720.53);
		context.bezierCurveTo(844.29, 718.72, 846.09, 716.93, 847.91, 715.16);
		context.bezierCurveTo(849.36, 714.01, 850.87, 712.95, 852.37, 711.88);
		context.bezierCurveTo(870.23, 715.49, 888.81, 713.72, 906.19, 708.57);
		context.bezierCurveTo(912.03, 706.77, 917.44, 703.89, 923.27, 702.05);
		context.closePath();
		context.fillStyle = fillColor140;
		context.fill();
	}



	function drawPath162() {
		//// #f97477ff
		//// Bezier 162 Drawing
		context.beginPath();
		context.moveTo(911.16, 711.04);
		context.bezierCurveTo(915.32, 709.56, 918.64, 706.49, 922.63, 704.72);
		context.bezierCurveTo(928.81, 705.29, 933.65, 710.39, 940.03, 710.4);
		context.bezierCurveTo(944.24, 710.37, 948.15, 711.93, 950.63, 715.44);
		context.bezierCurveTo(961.17, 716.31, 971.75, 714.75, 982.29, 715.92);
		context.bezierCurveTo(982.55, 719.13, 982.49, 722.36, 982.05, 725.55);
		context.bezierCurveTo(981.15, 725.69, 979.33, 725.99, 978.43, 726.13);
		context.bezierCurveTo(976.48, 735.76, 973.68, 745.4, 968.8, 753.99);
		context.bezierCurveTo(966.43, 758.79, 964.49, 763.83, 961.47, 768.28);
		context.bezierCurveTo(959.85, 770.41, 960.25, 773.17, 959.99, 775.69);
		context.bezierCurveTo(958.41, 778.47, 956.61, 781.12, 954.81, 783.77);
		context.bezierCurveTo(952.24, 787.44, 949.73, 791.16, 946.79, 794.56);
		context.bezierCurveTo(948.07, 792.6, 949.05, 790.48, 950.05, 788.37);
		context.bezierCurveTo(945.64, 789.68, 942.45, 793.08, 938.83, 795.68);
		context.bezierCurveTo(939.04, 793.99, 939.28, 792.35, 939.48, 790.68);
		context.bezierCurveTo(942.55, 787.92, 944.43, 784.23, 945.87, 780.43);
		context.bezierCurveTo(950, 769.73, 956.43, 759.96, 959.24, 748.75);
		context.bezierCurveTo(960.4, 743.75, 959.77, 738.44, 961.6, 733.6);
		context.bezierCurveTo(963.59, 728.53, 964.24, 723.12, 964.96, 717.77);
		context.bezierCurveTo(954.64, 717.35, 943.96, 719.19, 933.96, 715.88);
		context.bezierCurveTo(928.6, 714.31, 922.73, 714.51, 917.57, 716.65);
		context.bezierCurveTo(917.13, 714.85, 916.73, 713.08, 916.32, 711.29);
		context.bezierCurveTo(914.59, 711.19, 912.87, 711.07, 911.16, 711.04);
		context.closePath();
		context.fillStyle = fillColor141;
		context.fill();
	}



	function drawPath163() {
		//// #3d3d3dff
		//// Bezier 163 Drawing
		context.beginPath();
		context.moveTo(60.49, 705.51);
		context.bezierCurveTo(62.65, 704.88, 63.33, 705.67, 62.51, 707.85);
		context.bezierCurveTo(60.33, 708.45, 59.67, 707.67, 60.49, 705.51);
		context.closePath();
		context.fillStyle = fillColor142;
		context.fill();
	}



	function drawPath164() {
		//// #03050eff
		//// Bezier 164 Drawing
		context.beginPath();
		context.moveTo(1079.47, 708.92);
		context.bezierCurveTo(1081.04, 710.03, 1082.6, 711.19, 1084.16, 712.37);
		context.lineTo(1084.8, 712.84);
		context.bezierCurveTo(1077.27, 725.48, 1072.37, 739.47, 1067.96, 753.44);
		context.bezierCurveTo(1064.44, 766.13, 1064.2, 779.39, 1062.69, 792.41);
		context.bezierCurveTo(1058.63, 784.53, 1059.07, 775.29, 1059.8, 766.72);
		context.bezierCurveTo(1061.8, 746.28, 1069.41, 726.69, 1079.47, 708.92);
		context.closePath();
		context.fillStyle = fillColor143;
		context.fill();
	}


	function drawPath165() {
		//// #fa7370ff
		//// Bezier 165 Drawing
		context.beginPath();
		context.moveTo(870.87, 716.75);
		context.bezierCurveTo(884.57, 717.28, 897.76, 713.11, 911.16, 711.04);
		context.bezierCurveTo(912.87, 711.07, 914.59, 711.19, 916.32, 711.29);
		context.bezierCurveTo(916.73, 713.08, 917.13, 714.85, 917.57, 716.65);
		context.bezierCurveTo(912.59, 718.93, 908.28, 722.47, 903.16, 724.45);
		context.bezierCurveTo(896.05, 726.92, 888.95, 729.91, 881.29, 729.85);
		context.bezierCurveTo(869.09, 731.37, 857.09, 727.85, 845.56, 724.31);
		context.bezierCurveTo(848.12, 721.48, 850.45, 718.36, 853.61, 716.16);
		context.bezierCurveTo(859.31, 714.93, 865.12, 716.71, 870.87, 716.75);
		context.closePath();
		context.fillStyle = fillColor144;
		context.fill();
	}



	function drawPath166() {
		//// #0e0302ff
		//// Bezier 166 Drawing
		context.beginPath();
		context.moveTo(986.96, 710.93);
		context.bezierCurveTo(987.75, 710.89, 989.29, 710.84, 990.08, 710.81);
		context.bezierCurveTo(991.37, 728.36, 985.97, 745.64, 979.04, 761.55);
		context.bezierCurveTo(977.91, 763.63, 976.89, 765.79, 976.35, 768.11);
		context.bezierCurveTo(975.29, 769.85, 974.21, 771.59, 973.09, 773.29);
		context.bezierCurveTo(968.23, 783.04, 961.91, 792.05, 954.64, 800.16);
		context.bezierCurveTo(935.13, 824.07, 908.84, 841.97, 880.21, 853.17);
		context.bezierCurveTo(876.79, 853.81, 873.36, 854.43, 869.89, 854.72);
		context.bezierCurveTo(867.51, 854.11, 865.16, 853.37, 862.83, 852.68);
		context.bezierCurveTo(863.8, 851.84, 864.8, 851.03, 865.81, 850.24);
		context.bezierCurveTo(892.57, 843.13, 915.6, 826.32, 934.99, 807.04);
		context.bezierCurveTo(939.09, 803.04, 942.84, 798.71, 946.79, 794.56);
		context.bezierCurveTo(949.73, 791.16, 952.24, 787.44, 954.81, 783.77);
		context.bezierCurveTo(956.85, 783.69, 958.89, 783.63, 960.95, 783.59);
		context.bezierCurveTo(960.39, 782.37, 959.84, 781.16, 959.31, 779.97);
		context.bezierCurveTo(959.68, 779.17, 960.4, 777.6, 960.77, 776.8);
		context.bezierCurveTo(962.45, 775.73, 964.15, 774.69, 965.85, 773.63);
		context.bezierCurveTo(967.96, 772.85, 969.35, 770.6, 968.47, 768.4);
		context.bezierCurveTo(968.13, 766.71, 967.76, 764.97, 967.48, 763.31);
		context.bezierCurveTo(973.4, 751.19, 978.4, 738.56, 982.05, 725.55);
		context.bezierCurveTo(983.24, 721.77, 983.43, 717.79, 983.56, 713.85);
		context.lineTo(984.93, 714.27);
		context.lineTo(984.49, 712.47);
		context.lineTo(985.6, 712.33);
		context.bezierCurveTo(985.93, 711.99, 986.63, 711.28, 986.96, 710.93);
		context.closePath();
		context.fillStyle = fillColor145;
		context.fill();
	}


	function drawPath167() {
		//// #b2cdebff
		//// Bezier 167 Drawing
		context.beginPath();
		context.moveTo(1320.12, 732.2);
		context.bezierCurveTo(1322.21, 724.92, 1320.8, 716.95, 1324.68, 710.15);
		context.bezierCurveTo(1325.55, 713.4, 1326.31, 716.68, 1326.71, 720.04);
		context.bezierCurveTo(1325.91, 727.84, 1324.73, 735.6, 1323.91, 743.4);
		context.bezierCurveTo(1322.4, 739.85, 1318.65, 736.32, 1320.12, 732.2);
		context.closePath();
		context.fillStyle = fillColor146;
		context.fill();
	}



	function drawPath168() {
		//// #0f0301ff
		//// Bezier 168 Drawing
		context.beginPath();
		context.moveTo(825.65, 732.32);
		context.bezierCurveTo(832.65, 724.61, 839.15, 716, 848.17, 710.53);
		context.bezierCurveTo(848.11, 711.69, 847.97, 714, 847.91, 715.16);
		context.bezierCurveTo(846.09, 716.93, 844.29, 718.72, 842.52, 720.53);
		context.bezierCurveTo(827.01, 735.95, 814.87, 755.53, 811.07, 777.29);
		context.bezierCurveTo(807.29, 793.75, 808.16, 811.35, 814.43, 827.09);
		context.bezierCurveTo(816.89, 831.61, 819.36, 836.19, 822.71, 840.15);
		context.bezierCurveTo(825.79, 844.17, 830.05, 847.48, 831.67, 852.47);
		context.bezierCurveTo(814.19, 847.27, 804.71, 828.79, 802.68, 811.79);
		context.bezierCurveTo(797.92, 783.44, 809.07, 754.92, 825.65, 732.32);
		context.closePath();
		context.fillStyle = fillColor147;
		context.fill();
	}



	function drawPath169() {
		//// #fe9494ff
		//// Bezier 169 Drawing
		context.beginPath();
		context.moveTo(917.57, 716.65);
		context.bezierCurveTo(922.73, 714.51, 928.6, 714.31, 933.96, 715.88);
		context.bezierCurveTo(943.96, 719.19, 954.64, 717.35, 964.96, 717.77);
		context.bezierCurveTo(964.24, 723.12, 963.59, 728.53, 961.6, 733.6);
		context.bezierCurveTo(959.77, 738.44, 960.4, 743.75, 959.24, 748.75);
		context.bezierCurveTo(956.43, 759.96, 950, 769.73, 945.87, 780.43);
		context.bezierCurveTo(944.43, 784.23, 942.55, 787.92, 939.48, 790.68);
		context.bezierCurveTo(939.28, 792.35, 939.04, 793.99, 938.83, 795.68);
		context.bezierCurveTo(937.53, 798.91, 935.16, 801.48, 932.71, 803.85);
		context.bezierCurveTo(926.08, 810.92, 918.89, 817.55, 910.63, 822.68);
		context.bezierCurveTo(905.97, 825.6, 902.33, 829.91, 897.47, 832.52);
		context.bezierCurveTo(889.99, 836.56, 882.95, 841.61, 874.76, 844.16);
		context.bezierCurveTo(869.19, 846.04, 863.44, 847.31, 857.72, 848.63);
		context.bezierCurveTo(855.89, 848.84, 854.76, 850.43, 853.51, 851.57);
		context.bezierCurveTo(852.51, 851.77, 851.52, 851.99, 850.55, 852.21);
		context.bezierCurveTo(851.49, 852.56, 853.39, 853.27, 854.33, 853.61);
		context.bezierCurveTo(850.96, 857.92, 845.4, 855.2, 841.31, 853.69);
		context.bezierCurveTo(834.84, 851.6, 832.16, 844.81, 827.61, 840.37);
		context.bezierCurveTo(819.84, 832.87, 815.89, 822.32, 813.8, 811.92);
		context.bezierCurveTo(812.95, 810.63, 811.37, 809.68, 811.27, 808.04);
		context.bezierCurveTo(810.69, 802.05, 811.19, 796.04, 811.17, 790.05);
		context.bezierCurveTo(811.88, 789.67, 813.29, 788.91, 814.01, 788.53);
		context.bezierCurveTo(814.77, 780.09, 815.88, 771.6, 818.27, 763.48);
		context.bezierCurveTo(820.99, 758.73, 823.23, 753.79, 824.75, 748.52);
		context.bezierCurveTo(827.84, 744.29, 831.73, 740.52, 833.08, 735.25);
		context.bezierCurveTo(838.6, 732.93, 841.48, 727.57, 843.97, 722.47);
		context.bezierCurveTo(844.37, 722.93, 845.16, 723.85, 845.56, 724.31);
		context.bezierCurveTo(857.09, 727.85, 869.09, 731.37, 881.29, 729.85);
		context.bezierCurveTo(888.95, 729.91, 896.05, 726.92, 903.16, 724.45);
		context.bezierCurveTo(908.28, 722.47, 912.59, 718.93, 917.57, 716.65);
		context.closePath();
		context.fillStyle = fillColor148;
		context.fill();
	}



	function drawPath170() {
		//// #e5a1a5ff
		//// Bezier 170 Drawing
		context.beginPath();
		context.moveTo(811.07, 777.29);
		context.bezierCurveTo(814.87, 755.53, 827.01, 735.95, 842.52, 720.53);
		context.bezierCurveTo(842.88, 721.01, 843.61, 721.99, 843.97, 722.47);
		context.bezierCurveTo(841.48, 727.57, 838.6, 732.93, 833.08, 735.25);
		context.bezierCurveTo(831.73, 740.52, 827.84, 744.29, 824.75, 748.52);
		context.bezierCurveTo(823.23, 753.79, 820.99, 758.73, 818.27, 763.48);
		context.bezierCurveTo(815.88, 771.6, 814.77, 780.09, 814.01, 788.53);
		context.bezierCurveTo(813.29, 788.91, 811.88, 789.67, 811.17, 790.05);
		context.bezierCurveTo(811.19, 796.04, 810.69, 802.05, 811.27, 808.04);
		context.bezierCurveTo(811.37, 809.68, 812.95, 810.63, 813.8, 811.92);
		context.bezierCurveTo(815.89, 822.32, 819.84, 832.87, 827.61, 840.37);
		context.bezierCurveTo(832.16, 844.81, 834.84, 851.6, 841.31, 853.69);
		context.bezierCurveTo(845.4, 855.2, 850.96, 857.92, 854.33, 853.61);
		context.bezierCurveTo(859.36, 855.19, 864.68, 855.28, 869.89, 854.72);
		context.bezierCurveTo(873.36, 854.43, 876.79, 853.81, 880.21, 853.17);
		context.bezierCurveTo(876.4, 857.21, 870.48, 858, 865.36, 859.36);
		context.bezierCurveTo(854.13, 861.95, 840.92, 861.23, 831.96, 853.23);
		context.lineTo(831.67, 852.47);
		context.bezierCurveTo(830.05, 847.48, 825.79, 844.17, 822.71, 840.15);
		context.bezierCurveTo(819.36, 836.19, 816.89, 831.61, 814.43, 827.09);
		context.bezierCurveTo(808.16, 811.35, 807.29, 793.75, 811.07, 777.29);
		context.closePath();
		context.fillStyle = fillColor149;
		context.fill();
	}



	function drawPath171() {
		//// #ed9390ff
		//// Bezier 171 Drawing
		context.beginPath();
		context.moveTo(978.43, 726.13);
		context.bezierCurveTo(979.33, 725.99, 981.15, 725.69, 982.05, 725.55);
		context.bezierCurveTo(978.4, 738.56, 973.4, 751.19, 967.48, 763.31);
		context.bezierCurveTo(965.03, 767.47, 962.37, 771.49, 959.99, 775.69);
		context.bezierCurveTo(960.25, 773.17, 959.85, 770.41, 961.47, 768.28);
		context.bezierCurveTo(964.49, 763.83, 966.43, 758.79, 968.8, 753.99);
		context.bezierCurveTo(973.68, 745.4, 976.48, 735.76, 978.43, 726.13);
		context.closePath();
		context.fillStyle = fillColor150;
		context.fill();
	}



	function drawPath172() {
		//// #b5d1e0ff
		//// Bezier 172 Drawing
		context.beginPath();
		context.moveTo(1332.67, 754.51);
		context.bezierCurveTo(1332.91, 752.69, 1333.17, 750.89, 1333.33, 749.08);
		context.lineTo(1333.33, 778.11);
		context.bezierCurveTo(1331.88, 780.87, 1329.55, 783, 1326.93, 784.64);
		context.bezierCurveTo(1329.69, 774.77, 1330.97, 764.59, 1332.67, 754.51);
		context.closePath();
		context.fillStyle = fillColor151;
		context.fill();
	}



	function drawPath173() {
		//// #020712ff
		//// Bezier 173 Drawing
		context.beginPath();
		context.moveTo(1324.79, 756.37);
		context.bezierCurveTo(1327.4, 755.72, 1330.03, 755.11, 1332.67, 754.51);
		context.bezierCurveTo(1330.97, 764.59, 1329.69, 774.77, 1326.93, 784.64);
		context.bezierCurveTo(1322.21, 798.85, 1320.45, 813.88, 1314.84, 827.81);
		context.bezierCurveTo(1302.21, 861.36, 1286.64, 894.16, 1264.92, 922.84);
		context.bezierCurveTo(1261.21, 927.28, 1257.99, 932.2, 1253.41, 935.83);
		context.bezierCurveTo(1248.15, 940.01, 1244.32, 945.63, 1239.41, 950.19);
		context.bezierCurveTo(1234.75, 954.53, 1229.76, 958.52, 1224.87, 962.6);
		context.bezierCurveTo(1217.91, 967.27, 1211.45, 973.15, 1203.49, 976.01);
		context.bezierCurveTo(1203.53, 976.31, 1203.61, 976.88, 1203.64, 977.17);
		context.bezierCurveTo(1187.87, 986.12, 1171.67, 994.63, 1154.21, 999.87);
		context.bezierCurveTo(1152.65, 1000.25, 1151.09, 1000.65, 1149.56, 1001.08);
		context.bezierCurveTo(1148.47, 999.67, 1147.37, 998.27, 1146.31, 996.87);
		context.bezierCurveTo(1151.08, 995.12, 1155.83, 993.25, 1160.53, 991.29);
		context.bezierCurveTo(1172.32, 985.89, 1183.87, 979.92, 1195.08, 973.41);
		context.bezierCurveTo(1195.97, 973.67, 1196.89, 973.95, 1197.83, 974.2);
		context.lineTo(1196.07, 972.44);
		context.bezierCurveTo(1213.6, 962.56, 1229.67, 950.12, 1244.09, 936.11);
		context.bezierCurveTo(1248.72, 932.05, 1251.28, 925.85, 1256.92, 922.97);
		context.bezierCurveTo(1259.75, 917.35, 1263.17, 912.07, 1266.68, 906.84);
		context.bezierCurveTo(1272.43, 896.96, 1277.73, 886.83, 1283.23, 876.8);
		context.bezierCurveTo(1301.79, 841.24, 1313.56, 802.52, 1321.17, 763.24);
		context.lineTo(1321.83, 762.29);
		context.bezierCurveTo(1323.27, 760.57, 1323.97, 758.43, 1324.79, 756.37);
		context.closePath();
		context.moveTo(1296.31, 853.45);
		context.bezierCurveTo(1295.57, 855.63, 1296.29, 856.36, 1298.47, 855.65);
		context.bezierCurveTo(1299.17, 853.45, 1298.45, 852.72, 1296.31, 853.45);
		context.closePath();
		context.fillStyle = fillColor152;
		context.fill();
	}



	function drawPath174() {
		//// #666769ff
		//// Bezier 174 Drawing
		context.beginPath();
		context.moveTo(297.55, 762.04);
		context.bezierCurveTo(298.01, 761.63, 298.95, 760.79, 299.41, 760.36);
		context.bezierCurveTo(299.45, 762.35, 299.51, 764.35, 299.57, 766.35);
		context.bezierCurveTo(298.19, 766.83, 296.81, 767.33, 295.44, 767.83);
		context.bezierCurveTo(294.72, 765.83, 294.01, 763.84, 293.31, 761.85);
		context.bezierCurveTo(294.37, 761.89, 296.48, 762, 297.55, 762.04);
		context.closePath();
		context.fillStyle = fillColor153;
		context.fill();
	}



	function drawPath175() {
		//// #541c1cff
		//// Bezier 175 Drawing
		context.beginPath();
		context.moveTo(959.99, 775.69);
		context.bezierCurveTo(962.37, 771.49, 965.03, 767.47, 967.48, 763.31);
		context.bezierCurveTo(967.76, 764.97, 968.13, 766.71, 968.47, 768.4);
		context.bezierCurveTo(965.68, 768.39, 965.31, 771.55, 965.85, 773.63);
		context.bezierCurveTo(964.15, 774.69, 962.45, 775.73, 960.77, 776.8);
		context.bezierCurveTo(960.4, 777.6, 959.68, 779.17, 959.31, 779.97);
		context.bezierCurveTo(959.84, 781.16, 960.39, 782.37, 960.95, 783.59);
		context.bezierCurveTo(958.89, 783.63, 956.85, 783.69, 954.81, 783.77);
		context.bezierCurveTo(956.61, 781.12, 958.41, 778.47, 959.99, 775.69);
		context.closePath();
		context.fillStyle = fillColor154;
		context.fill();
	}



	function drawPath176() {
		//// #a0bacaff
		//// Bezier 176 Drawing
		context.beginPath();
		context.moveTo(26.68, 768.05);
		context.bezierCurveTo(28.69, 767.8, 30.71, 767.56, 32.73, 767.33);
		context.bezierCurveTo(35.84, 775.07, 39.49, 782.57, 43.67, 789.79);
		context.bezierCurveTo(49.77, 801.36, 56.25, 812.75, 63.52, 823.64);
		context.bezierCurveTo(68.55, 832, 74.44, 839.8, 79.97, 847.83);
		context.bezierCurveTo(80.35, 849.91, 80.65, 852.01, 80.96, 854.12);
		context.bezierCurveTo(80.12, 854.33, 78.43, 854.75, 77.59, 854.95);
		context.bezierCurveTo(76.69, 853.93, 75.81, 852.91, 74.95, 851.88);
		context.bezierCurveTo(64.53, 835.95, 53.35, 820.45, 44.43, 803.59);
		context.bezierCurveTo(38.35, 791.84, 30.12, 780.99, 26.68, 768.05);
		context.closePath();
		context.fillStyle = fillColor155;
		context.fill();
	}


	function drawPath177() {
		//// #492528ff
		//// Bezier 177 Drawing
		context.beginPath();
		context.moveTo(965.85, 773.63);
		context.bezierCurveTo(965.31, 771.55, 965.68, 768.39, 968.47, 768.4);
		context.bezierCurveTo(969.35, 770.6, 967.96, 772.85, 965.85, 773.63);
		context.closePath();
		context.fillStyle = fillColor156;
		context.fill();
	}



	function drawPath178() {
		//// #e8f6fdff
		//// Bezier 178 Drawing
		context.beginPath();
		context.moveTo(76.47, 775.2);
		context.bezierCurveTo(77.8, 778.11, 79.17, 780.99, 80.43, 783.95);
		context.bezierCurveTo(80.96, 783.35, 82.05, 782.13, 82.59, 781.53);
		context.bezierCurveTo(81.97, 782.64, 81.35, 783.76, 80.73, 784.88);
		context.bezierCurveTo(82.21, 787.27, 83.57, 789.72, 84.8, 792.25);
		context.bezierCurveTo(104.71, 831.88, 132.4, 867.43, 165.23, 897.17);
		context.bezierCurveTo(165.45, 898.91, 165.63, 900.68, 165.8, 902.44);
		context.bezierCurveTo(163.07, 904.03, 160.44, 905.93, 157.33, 906.73);
		context.bezierCurveTo(154.35, 907.09, 152.15, 904.61, 149.81, 903.19);
		context.bezierCurveTo(149.36, 904.83, 148.91, 906.49, 148.45, 908.16);
		context.bezierCurveTo(144.28, 905.44, 140.41, 899.41, 134.79, 901.12);
		context.bezierCurveTo(136.27, 902.43, 137.75, 903.76, 139.23, 905.08);
		context.bezierCurveTo(136.68, 904.99, 134.15, 904.91, 131.6, 904.88);
		context.bezierCurveTo(134.61, 907.69, 138.09, 909.96, 142.03, 911.27);
		context.bezierCurveTo(140.65, 912.32, 139.29, 913.37, 137.93, 914.47);
		context.bezierCurveTo(133.41, 910.8, 129.52, 906.48, 125.79, 902.04);
		context.bezierCurveTo(116.87, 892.75, 108.4, 883.03, 99.99, 873.28);
		context.bezierCurveTo(93.61, 864.56, 86.01, 856.8, 79.97, 847.83);
		context.bezierCurveTo(74.44, 839.8, 68.55, 832, 63.52, 823.64);
		context.bezierCurveTo(65.27, 824.92, 67.07, 826.15, 68.85, 827.37);
		context.bezierCurveTo(69.33, 826.28, 69.8, 825.19, 70.27, 824.11);
		context.bezierCurveTo(70.55, 826.67, 70.84, 829.25, 71.12, 831.84);
		context.bezierCurveTo(71.92, 831.8, 73.52, 831.72, 74.32, 831.68);
		context.bezierCurveTo(77.57, 820, 74.56, 807.84, 76.27, 796);
		context.bezierCurveTo(76.93, 792.36, 75.92, 788.81, 75.11, 785.32);
		context.bezierCurveTo(74.13, 781.87, 75.65, 778.48, 76.47, 775.2);
		context.closePath();
		context.fillStyle = fillColor157;
		context.fill();
	}


	function drawPath179() {
		//// #a4cff6ff
		//// Bezier 179 Drawing
		context.beginPath();
		context.moveTo(1326.93, 784.64);
		context.bezierCurveTo(1329.55, 783, 1331.88, 780.87, 1333.33, 778.11);
		context.lineTo(1333.33, 816.41);
		context.bezierCurveTo(1331.27, 819.25, 1329.35, 822.24, 1328.37, 825.65);
		context.bezierCurveTo(1323.25, 835.93, 1323.77, 847.69, 1319.68, 858.29);
		context.bezierCurveTo(1317.72, 864.51, 1314.99, 870.44, 1312.49, 876.45);
		context.bezierCurveTo(1301.49, 897.72, 1286.91, 917.07, 1270.6, 934.56);
		context.bezierCurveTo(1268.21, 934.28, 1265.84, 934.08, 1263.53, 933.49);
		context.bezierCurveTo(1263.25, 929.93, 1264.84, 926.41, 1264.92, 922.84);
		context.bezierCurveTo(1286.64, 894.16, 1302.21, 861.36, 1314.84, 827.81);
		context.bezierCurveTo(1320.45, 813.88, 1322.21, 798.85, 1326.93, 784.64);
		context.closePath();
		context.fillStyle = fillColor158;
		context.fill();
	}


	function drawPath180() {
		//// #3a3a3aff
		//// Bezier 180 Drawing
		context.beginPath();
		context.moveTo(689.52, 781.45);
		context.bezierCurveTo(691.71, 780.8, 692.44, 781.56, 691.71, 783.72);
		context.bezierCurveTo(689.52, 784.35, 688.79, 783.59, 689.52, 781.45);
		context.closePath();
		context.fillStyle = fillColor159;
		context.fill();
	}




		//// #67444aff

	function drawPath181() {
		//// #d57f87ff
		//// Bezier 181 Drawing
		context.beginPath();
		context.moveTo(938.83, 795.68);
		context.bezierCurveTo(942.45, 793.08, 945.64, 789.68, 950.05, 788.37);
		context.bezierCurveTo(949.05, 790.48, 948.07, 792.6, 946.79, 794.56);
		context.bezierCurveTo(942.84, 798.71, 939.09, 803.04, 934.99, 807.04);
		context.bezierCurveTo(934.43, 806.25, 933.28, 804.65, 932.71, 803.85);
		context.bezierCurveTo(935.16, 801.48, 937.53, 798.91, 938.83, 795.68);
		context.closePath();
		context.fillStyle = fillColor160;
		context.fill();
	}


	function drawPath182() {
		//// #eda8a8ff
		//// Bezier 182 Drawing
		context.beginPath();
		context.moveTo(910.63, 822.68);
		context.bezierCurveTo(918.89, 817.55, 926.08, 810.92, 932.71, 803.85);
		context.bezierCurveTo(933.28, 804.65, 934.43, 806.25, 934.99, 807.04);
		context.bezierCurveTo(915.6, 826.32, 892.57, 843.13, 865.81, 850.24);
		context.bezierCurveTo(861.73, 850.91, 857.61, 851.29, 853.51, 851.57);
		context.bezierCurveTo(854.76, 850.43, 855.89, 848.84, 857.72, 848.63);
		context.bezierCurveTo(863.44, 847.31, 869.19, 846.04, 874.76, 844.16);
		context.bezierCurveTo(882.95, 841.61, 889.99, 836.56, 897.47, 832.52);
		context.bezierCurveTo(902.33, 829.91, 905.97, 825.6, 910.63, 822.68);
		context.closePath();
		context.fillStyle = fillColor161;
		context.fill();
	}


	function drawPath183() {
		//// #ffd8d9ff
		//// Bezier 183 Drawing
		context.beginPath();
		context.moveTo(482.2, 815.56);
		context.bezierCurveTo(486, 814.52, 491.09, 814.21, 493.16, 818.32);
		context.bezierCurveTo(490.65, 827.73, 482.32, 833.52, 477.75, 841.79);
		context.bezierCurveTo(474.52, 846.76, 471.63, 854.41, 464.28, 853.24);
		context.bezierCurveTo(463.33, 845.81, 463.72, 837.55, 468.85, 831.61);
		context.bezierCurveTo(473.39, 826.33, 476.89, 820.12, 482.2, 815.56);
		context.closePath();
		context.moveTo(485.77, 817.85);
		context.bezierCurveTo(477.85, 823.36, 470.97, 830.91, 468.08, 840.28);
		context.bezierCurveTo(466.93, 843.96, 462.53, 849.41, 466.67, 852.36);
		context.bezierCurveTo(473.59, 844.35, 477.07, 833.63, 485.12, 826.48);
		context.bezierCurveTo(487.2, 824.15, 490.43, 822.07, 490.67, 818.69);
		context.bezierCurveTo(491, 815.57, 487.23, 817.05, 485.77, 817.85);
		context.closePath();
		context.fillStyle = fillColor162;
		context.fill();
	}


	function drawPath184() {
		//// #e4a1a9ff
		//// Bezier 184 Drawing
		context.beginPath();
		context.moveTo(485.77, 817.85);
		context.bezierCurveTo(487.23, 817.05, 491, 815.57, 490.67, 818.69);
		context.bezierCurveTo(490.43, 822.07, 487.2, 824.15, 485.12, 826.48);
		context.bezierCurveTo(477.07, 833.63, 473.59, 844.35, 466.67, 852.36);
		context.bezierCurveTo(462.53, 849.41, 466.93, 843.96, 468.08, 840.28);
		context.bezierCurveTo(470.97, 830.91, 477.85, 823.36, 485.77, 817.85);
		context.closePath();
		context.fillStyle = fillColor163;
		context.fill();
	}


	function drawPath185() {

		//// #d9bff3ff
		//// Bezier 185 Drawing
		context.beginPath();
		context.moveTo(1328.37, 825.65);
		context.bezierCurveTo(1329.35, 822.24, 1331.27, 819.25, 1333.33, 816.41);
		context.lineTo(1333.33, 831.03);
		context.bezierCurveTo(1331.92, 835.83, 1330.44, 840.79, 1326.99, 844.57);
		context.bezierCurveTo(1327.89, 838.31, 1329.43, 832, 1328.37, 825.65);
		context.closePath();
		context.fillStyle = fillColor164;
		context.fill();
	}



	function drawPath186() {
		//// #f3f4b0ff
		//// Bezier 186 Drawing
		context.beginPath();
		context.moveTo(349.59, 847.36);
		context.bezierCurveTo(346.27, 838.43, 342.69, 828.47, 345.12, 818.93);
		context.bezierCurveTo(350.52, 843.91, 358.76, 868.36, 370.19, 891.23);
		context.lineTo(370.68, 891.55);
		context.bezierCurveTo(380.33, 912.81, 393.93, 932.09, 408.81, 950.01);
		context.bezierCurveTo(407.85, 950.53, 405.93, 951.56, 404.96, 952.08);
		context.bezierCurveTo(402.2, 947.47, 397.12, 944.72, 394.79, 939.73);
		context.bezierCurveTo(393.65, 939.11, 392.55, 938.48, 391.43, 937.88);
		context.bezierCurveTo(385.17, 929.32, 378.87, 920.73, 373.95, 911.32);
		context.bezierCurveTo(365.65, 899.87, 359.07, 887.27, 353.01, 874.52);
		context.bezierCurveTo(354.76, 876.35, 356.61, 878.09, 358.47, 879.84);
		context.bezierCurveTo(358.64, 874.57, 358.08, 869.19, 355.32, 864.57);
		context.bezierCurveTo(352.16, 859.29, 350.95, 853.27, 349.59, 847.36);
		context.closePath();
		context.fillStyle = fillColor165;
		context.fill();
	}



	function drawPath187() {
		//// #3b2b4cff
		//// Bezier 187 Drawing
		context.beginPath();
		context.moveTo(1319.68, 858.29);
		context.bezierCurveTo(1323.77, 847.69, 1323.25, 835.93, 1328.37, 825.65);
		context.bezierCurveTo(1329.43, 832, 1327.89, 838.31, 1326.99, 844.57);
		context.bezierCurveTo(1324.6, 853.4, 1322.36, 862.31, 1318.81, 870.76);
		context.bezierCurveTo(1316.51, 875.79, 1316.83, 881.75, 1313.43, 886.31);
		context.bezierCurveTo(1312.57, 883.08, 1312.4, 879.76, 1312.49, 876.45);
		context.bezierCurveTo(1314.99, 870.44, 1317.72, 864.51, 1319.68, 858.29);
		context.closePath();
		context.fillStyle = fillColor166;
		context.fill();
	}



	function drawPath188() {
		//// #c4f8c8ff
		//// Bezier 188 Drawing
		context.beginPath();
		context.moveTo(335.32, 830.96);
		context.bezierCurveTo(336.99, 835.64, 338.08, 840.63, 341, 844.76);
		context.bezierCurveTo(341.48, 847.84, 341.93, 851.03, 343.43, 853.84);
		context.bezierCurveTo(346.93, 860.59, 349.72, 867.67, 353.01, 874.52);
		context.bezierCurveTo(359.07, 887.27, 365.65, 899.87, 373.95, 911.32);
		context.bezierCurveTo(378.87, 920.73, 385.17, 929.32, 391.43, 937.88);
		context.bezierCurveTo(392.55, 938.48, 393.65, 939.11, 394.79, 939.73);
		context.bezierCurveTo(397.12, 944.72, 402.2, 947.47, 404.96, 952.08);
		context.bezierCurveTo(407.76, 958.81, 413.61, 963.36, 419.27, 967.61);
		context.bezierCurveTo(424.52, 972.99, 429.44, 978.69, 434.16, 984.55);
		context.bezierCurveTo(438.55, 988.39, 443.96, 990.97, 448.01, 995.27);
		context.bezierCurveTo(434.39, 991.01, 426.57, 978.16, 416.11, 969.39);
		context.bezierCurveTo(409.93, 964.85, 405.89, 958.21, 400.29, 953.08);
		context.bezierCurveTo(394.08, 947.57, 390.75, 939.64, 384.36, 934.31);
		context.bezierCurveTo(378.01, 929.36, 374.75, 921.91, 371.08, 914.99);
		context.bezierCurveTo(369.6, 911.87, 367.45, 909.17, 365.17, 906.61);
		context.bezierCurveTo(362.57, 904.01, 362.87, 900.03, 362.15, 896.68);
		context.bezierCurveTo(360.91, 896.05, 359.68, 895.44, 358.44, 894.84);
		context.bezierCurveTo(356.12, 888.25, 352.21, 882.43, 349.36, 876.09);
		context.bezierCurveTo(346.39, 868.57, 340.77, 861.96, 340.92, 853.47);
		context.bezierCurveTo(340.24, 853.2, 338.89, 852.68, 338.21, 852.41);
		context.bezierCurveTo(336.21, 845.43, 334.48, 838.28, 335.32, 830.96);
		context.closePath();
		context.fillStyle = fillColor167;
		context.fill();
	}



	function drawPath189() {
		//// #e3a2aaff
		//// Bezier 189 Drawing
		context.beginPath();
		context.moveTo(510.79, 838.81);
		context.bezierCurveTo(511.93, 836.43, 512.59, 833.59, 514.71, 831.85);
		context.bezierCurveTo(517.28, 830.88, 520.12, 831.35, 522.81, 831.11);
		context.bezierCurveTo(520.24, 838.93, 515.49, 845.69, 511.19, 852.61);
		context.bezierCurveTo(509.53, 854.55, 508.65, 857.81, 505.85, 858.27);
		context.bezierCurveTo(502.15, 851.56, 507.04, 844.33, 510.79, 838.81);
		context.closePath();
		context.fillStyle = fillColor168;
		context.fill();
	}



	function drawPath190() {
		//// #f8d9daff
		//// Bezier 190 Drawing
		context.beginPath();
		context.moveTo(522.81, 831.11);
		context.bezierCurveTo(526.07, 837.45, 521.07, 843.32, 517.49, 848.16);
		context.bezierCurveTo(515.76, 850.05, 514.39, 853.77, 511.19, 852.61);
		context.bezierCurveTo(515.49, 845.69, 520.24, 838.93, 522.81, 831.11);
		context.closePath();
		context.fillStyle = fillColor169;
		context.fill();
	}



	function drawPath191() {
		//// #f2b8e0ff
		//// Bezier 191 Drawing
		context.beginPath();
		context.moveTo(1326.99, 844.57);
		context.bezierCurveTo(1330.44, 840.79, 1331.92, 835.83, 1333.33, 831.03);
		context.lineTo(1333.33, 865.84);
		context.bezierCurveTo(1329.84, 869.75, 1327.79, 874.59, 1326.01, 879.45);
		context.bezierCurveTo(1325.09, 879.43, 1324.2, 879.4, 1323.31, 879.4);
		context.bezierCurveTo(1323.68, 886.95, 1320.45, 893.79, 1317.69, 900.59);
		context.bezierCurveTo(1316.63, 900.75, 1315.6, 900.92, 1314.59, 901.11);
		context.bezierCurveTo(1313.27, 905.08, 1312.17, 909.48, 1308.67, 912.15);
		context.bezierCurveTo(1300.21, 920.01, 1294.16, 930.08, 1286.03, 938.28);
		context.bezierCurveTo(1280.05, 941.91, 1276.61, 948.19, 1271.45, 952.71);
		context.bezierCurveTo(1256.32, 966.45, 1242.59, 981.89, 1225.55, 993.39);
		context.bezierCurveTo(1209.2, 1002.37, 1192, 1009.63, 1174.96, 1017.13);
		context.bezierCurveTo(1169.24, 1015.6, 1162.64, 1016.73, 1158.65, 1021.36);
		context.bezierCurveTo(1155.23, 1025.32, 1148.92, 1022.89, 1145.27, 1026.6);
		context.bezierCurveTo(1139.81, 1031.89, 1131.8, 1031.24, 1124.95, 1033.03);
		context.bezierCurveTo(1119.45, 1034.16, 1114.71, 1037.4, 1109.29, 1038.73);
		context.bezierCurveTo(1102.65, 1040.41, 1095.96, 1041.83, 1089.36, 1043.63);
		context.bezierCurveTo(1086.84, 1047.13, 1082.51, 1047.53, 1078.64, 1048.44);
		context.bezierCurveTo(1073.15, 1049.6, 1068.32, 1053.12, 1062.59, 1053.27);
		context.bezierCurveTo(1059.07, 1053.71, 1055.25, 1053.12, 1052.01, 1054.8);
		context.bezierCurveTo(1041.85, 1061.21, 1029.15, 1059.81, 1018.13, 1063.83);
		context.bezierCurveTo(1006.65, 1069.36, 993.64, 1069.69, 981.31, 1071.96);
		context.bezierCurveTo(972.83, 1072.47, 965.15, 1076.31, 956.93, 1077.92);
		context.bezierCurveTo(939.6, 1079.6, 922.64, 1073.6, 905.33, 1074.43);
		context.bezierCurveTo(899.41, 1074.49, 893.52, 1075.56, 887.6, 1075.16);
		context.bezierCurveTo(880.8, 1074.52, 873.76, 1075.75, 867.28, 1073.03);
		context.bezierCurveTo(877.24, 1073.09, 887.17, 1072.55, 897.13, 1072.52);
		context.bezierCurveTo(929.03, 1071.45, 960.79, 1067.75, 992.21, 1062.39);
		context.bezierCurveTo(1003.67, 1061.96, 1014.33, 1057.43, 1025.51, 1055.36);
		context.bezierCurveTo(1032.4, 1054.04, 1038.79, 1050.71, 1045.87, 1050.19);
		context.bezierCurveTo(1050.29, 1049.89, 1054.79, 1048.92, 1057.92, 1045.51);
		context.lineTo(1058.07, 1045.51);
		context.bezierCurveTo(1062.45, 1045.87, 1066.71, 1044.64, 1070.63, 1042.76);
		context.bezierCurveTo(1076.69, 1039.84, 1083.65, 1039.81, 1089.77, 1037.04);
		context.bezierCurveTo(1095.57, 1034.33, 1101.72, 1032.48, 1107.89, 1030.87);
		context.bezierCurveTo(1118.72, 1028.48, 1128.44, 1022.91, 1138.84, 1019.29);
		context.bezierCurveTo(1142.96, 1018.12, 1147.21, 1017.45, 1151.27, 1016.01);
		context.bezierCurveTo(1151.55, 1015.16, 1152.09, 1013.45, 1152.37, 1012.6);
		context.bezierCurveTo(1156.27, 1011.45, 1160.23, 1010.47, 1164.23, 1009.72);
		context.bezierCurveTo(1166.32, 1009.57, 1168.56, 1009.84, 1170.57, 1009.03);
		context.bezierCurveTo(1181.76, 1003.79, 1193.48, 999.68, 1204.17, 993.4);
		context.bezierCurveTo(1205.2, 992.21, 1206.12, 990.93, 1206.93, 989.6);
		context.bezierCurveTo(1251.93, 967.01, 1288.12, 929.45, 1313.43, 886.31);
		context.bezierCurveTo(1316.83, 881.75, 1316.51, 875.79, 1318.81, 870.76);
		context.bezierCurveTo(1322.36, 862.31, 1324.6, 853.4, 1326.99, 844.57);
		context.closePath();
		context.fillStyle = fillColor170;
		context.fill();
	}



	function drawPath192() {
		//// #b0d7ddff
		//// Bezier 192 Drawing
		context.beginPath();
		context.moveTo(327.03, 836.85);
		context.bezierCurveTo(327.72, 837.33, 329.09, 838.29, 329.79, 838.77);
		context.bezierCurveTo(330.41, 841.51, 330.72, 844.32, 331.23, 847.09);
		context.bezierCurveTo(331.81, 851.31, 334.76, 854.63, 335.79, 858.71);
		context.bezierCurveTo(337.23, 864.03, 339.69, 868.96, 342.11, 873.89);
		context.bezierCurveTo(340.81, 874.16, 338.24, 874.69, 336.95, 874.97);
		context.bezierCurveTo(332.29, 862.64, 329.84, 849.68, 327.03, 836.85);
		context.closePath();
		context.fillStyle = fillColor171;
		context.fill();
	}



	function drawPath193() {
		//// #ed9da4ff
		//// Bezier 193 Drawing
		context.beginPath();
		context.moveTo(553.55, 852.05);
		context.bezierCurveTo(553.64, 845.57, 559.63, 842.09, 563.79, 838.11);
		context.bezierCurveTo(566.36, 837.64, 568.99, 837.71, 571.6, 837.64);
		context.bezierCurveTo(571.57, 840.28, 571.56, 842.93, 571.52, 845.6);
		context.bezierCurveTo(568.44, 848.65, 565.61, 851.99, 562.16, 854.65);
		context.bezierCurveTo(562.19, 855.43, 562.24, 856.97, 562.25, 857.73);
		context.bezierCurveTo(560.37, 859.64, 558.21, 861.21, 556.09, 862.84);
		context.bezierCurveTo(553.41, 865.32, 551.25, 868.96, 547.16, 869.13);
		context.bezierCurveTo(547.17, 865.57, 547.03, 862, 547.59, 858.49);
		context.bezierCurveTo(548.99, 855.87, 551.43, 854.05, 553.55, 852.05);
		context.closePath();
		context.fillStyle = fillColor172;
		context.fill();
	}



	function drawPath194() {
		//// #95bcd9ff
		//// Bezier 194 Drawing
		context.beginPath();
		context.moveTo(79.97, 847.83);
		context.bezierCurveTo(86.01, 856.8, 93.61, 864.56, 99.99, 873.28);
		context.bezierCurveTo(98.09, 877.65, 100.99, 881.72, 102.89, 885.48);
		context.bezierCurveTo(93.08, 876.48, 86.2, 864.97, 77.59, 854.95);
		context.bezierCurveTo(78.43, 854.75, 80.12, 854.33, 80.96, 854.12);
		context.bezierCurveTo(80.65, 852.01, 80.35, 849.91, 79.97, 847.83);
		context.closePath();
		context.fillStyle = fillColor173;
		context.fill();
	}



	function drawPath195() {
		//// #490303ff
		//// Bezier 195 Drawing
		context.beginPath();
		context.moveTo(850.55, 852.21);
		context.bezierCurveTo(851.52, 851.99, 852.51, 851.77, 853.51, 851.57);
		context.bezierCurveTo(857.61, 851.29, 861.73, 850.91, 865.81, 850.24);
		context.bezierCurveTo(864.8, 851.03, 863.8, 851.84, 862.83, 852.68);
		context.bezierCurveTo(865.16, 853.37, 867.51, 854.11, 869.89, 854.72);
		context.bezierCurveTo(864.68, 855.28, 859.36, 855.19, 854.33, 853.61);
		context.bezierCurveTo(853.39, 853.27, 851.49, 852.56, 850.55, 852.21);
		context.closePath();
		context.fillStyle = fillColor174;
		context.fill();
	}



	function drawPath196() {
		//// #212e3cff
		//// Bezier 196 Drawing
		context.beginPath();
		context.moveTo(1296.31, 853.45);
		context.bezierCurveTo(1298.45, 852.72, 1299.17, 853.45, 1298.47, 855.65);
		context.bezierCurveTo(1296.29, 856.36, 1295.57, 855.63, 1296.31, 853.45);
		context.closePath();
		context.fillStyle = fillColor175;
		context.fill();
	}



	function drawPath197() {
		//// #ffe4c6ff
		//// Bezier 197 Drawing
		context.beginPath();
		context.moveTo(1326.01, 879.45);
		context.bezierCurveTo(1327.79, 874.59, 1329.84, 869.75, 1333.33, 865.84);
		context.lineTo(1333.33, 873.79);
		context.bezierCurveTo(1332.37, 876.83, 1330.76, 879.6, 1328.97, 882.23);
		context.bezierCurveTo(1328.48, 885.52, 1328.05, 888.89, 1326.55, 891.92);
		context.bezierCurveTo(1322.71, 899.71, 1318.76, 907.43, 1314.37, 914.92);
		context.bezierCurveTo(1312.47, 914, 1310.53, 913.05, 1308.67, 912.15);
		context.bezierCurveTo(1312.17, 909.48, 1313.27, 905.08, 1314.59, 901.11);
		context.bezierCurveTo(1315.6, 900.92, 1316.63, 900.75, 1317.69, 900.59);
		context.bezierCurveTo(1320.45, 893.79, 1323.68, 886.95, 1323.31, 879.4);
		context.bezierCurveTo(1324.2, 879.4, 1325.09, 879.43, 1326.01, 879.45);
		context.closePath();
		context.fillStyle = fillColor176;
		context.fill();
	}



	function drawPath198() {
		//// #3e4346ff
		//// Bezier 198 Drawing
		context.beginPath();
		context.moveTo(143.04, 870.93);
		context.bezierCurveTo(145.19, 870.2, 145.89, 870.93, 145.16, 873.16);
		context.bezierCurveTo(143, 873.88, 142.31, 873.13, 143.04, 870.93);
		context.closePath();
		context.fillStyle = fillColor177;
		context.fill();
	}



	function drawPath199() {
		//// #f3f7ffff
		//// Bezier 199 Drawing
		context.beginPath();
		context.moveTo(302.72, 874.13);
		context.bezierCurveTo(304.31, 873.55, 305.92, 873.04, 307.53, 872.52);
		context.bezierCurveTo(308.07, 875.19, 308.6, 877.87, 309.12, 880.55);
		context.bezierCurveTo(312.47, 879, 316.13, 878.64, 319.79, 878.72);
		context.bezierCurveTo(319.77, 884.41, 319.88, 890.11, 320.11, 895.81);
		context.bezierCurveTo(323.57, 896.01, 327.03, 896.23, 330.49, 896.44);
		context.bezierCurveTo(330.48, 899.47, 330.44, 902.51, 330.37, 905.55);
		context.bezierCurveTo(325.01, 907.27, 326.55, 912.92, 326.63, 917.27);
		context.bezierCurveTo(331.8, 917.52, 336.99, 917.53, 342.17, 917.29);
		context.bezierCurveTo(341.91, 914.24, 341.65, 911.19, 341.43, 908.15);
		context.bezierCurveTo(342.53, 909.89, 343.64, 911.68, 344.73, 913.45);
		context.bezierCurveTo(345.48, 909.25, 346.27, 905.07, 347.2, 900.92);
		context.bezierCurveTo(353.8, 915.27, 362.91, 928.36, 373.48, 940.07);
		context.bezierCurveTo(376.92, 943.85, 380.64, 947.4, 384.87, 950.33);
		context.bezierCurveTo(384.01, 947.89, 383.16, 945.51, 382.29, 943.11);
		context.bezierCurveTo(382.48, 942.6, 382.88, 941.59, 383.07, 941.08);
		context.bezierCurveTo(387.28, 947.72, 393.19, 953.05, 398.35, 958.93);
		context.bezierCurveTo(406.92, 965.49, 412.49, 975, 420.93, 981.71);
		context.bezierCurveTo(427.87, 988.88, 436.36, 994.19, 443.85, 1000.71);
		context.bezierCurveTo(455.76, 1012.48, 469.69, 1021.91, 483.89, 1030.68);
		context.bezierCurveTo(491.87, 1035.76, 500.68, 1039.33, 508.71, 1044.33);
		context.bezierCurveTo(513.03, 1048.84, 518.79, 1051.4, 524.28, 1054.13);
		context.bezierCurveTo(540.16, 1061.69, 555.81, 1069.81, 572.28, 1076.09);
		context.bezierCurveTo(581.8, 1080.63, 591.45, 1084.97, 601.75, 1087.52);
		context.bezierCurveTo(628.27, 1096.25, 655.05, 1104.23, 682.35, 1110.19);
		context.bezierCurveTo(692.51, 1112.99, 703.21, 1113.08, 713.25, 1116.4);
		context.bezierCurveTo(725.51, 1119.01, 737.92, 1120.87, 750.27, 1122.99);
		context.bezierCurveTo(759.08, 1125.17, 768.31, 1123.84, 777.11, 1126.09);
		context.bezierCurveTo(786.36, 1128.39, 795.95, 1128.39, 805.35, 1129.68);
		context.bezierCurveTo(819.45, 1131.77, 833.75, 1132.04, 847.97, 1132.65);
		context.bezierCurveTo(868.41, 1134.01, 888.95, 1133.75, 909.4, 1132.71);
		context.bezierCurveTo(931.64, 1132.01, 953.81, 1129.96, 975.83, 1126.83);
		context.bezierCurveTo(979.36, 1129.71, 984.03, 1129.55, 988.31, 1130.07);
		context.bezierCurveTo(982.48, 1130.57, 976.64, 1130.8, 970.8, 1130.89);
		context.bezierCurveTo(970.44, 1137.8, 970.45, 1144.73, 970.8, 1151.67);
		context.bezierCurveTo(974.2, 1151.87, 977.61, 1152.08, 981.04, 1152.31);
		context.bezierCurveTo(981.2, 1155.68, 981.39, 1159.05, 981.57, 1162.44);
		context.bezierCurveTo(988.49, 1162.81, 995.43, 1162.81, 1002.35, 1162.41);
		context.bezierCurveTo(1002.56, 1159, 1002.79, 1155.59, 1003.01, 1152.2);
		context.bezierCurveTo(1017.11, 1151.96, 1031.23, 1151.97, 1045.32, 1152.21);
		context.bezierCurveTo(1045.31, 1159.2, 1043.84, 1166.09, 1043.87, 1173.11);
		context.bezierCurveTo(1058.52, 1173.8, 1073.19, 1173.15, 1087.84, 1173.51);
		context.bezierCurveTo(1087.88, 1179.16, 1087.99, 1184.83, 1088.17, 1190.49);
		context.bezierCurveTo(1094.81, 1190.75, 1101.48, 1190.52, 1108.13, 1191.07);
		context.bezierCurveTo(1109, 1192.2, 1109.93, 1193.29, 1110.95, 1194.36);
		context.bezierCurveTo(1117.16, 1195.49, 1123.69, 1193.52, 1129.76, 1195.72);
		context.bezierCurveTo(1136.76, 1198.64, 1144.45, 1196.93, 1151.8, 1197.53);
		context.bezierCurveTo(1151.95, 1203.64, 1152.01, 1209.76, 1152.11, 1215.88);
		context.bezierCurveTo(1180.45, 1216.56, 1208.83, 1215.61, 1237.17, 1216.31);
		context.bezierCurveTo(1237.17, 1221.96, 1237.28, 1227.63, 1237.47, 1233.29);
		context.bezierCurveTo(1242.63, 1233.76, 1247.97, 1233.55, 1252.53, 1230.79);
		context.bezierCurveTo(1256.84, 1235.09, 1259.32, 1240.67, 1259.21, 1246.81);
		context.bezierCurveTo(1263.53, 1249.13, 1262.32, 1254.27, 1263.2, 1258.29);
		context.bezierCurveTo(1264.76, 1258.61, 1266.36, 1258.77, 1267.99, 1258.79);
		context.bezierCurveTo(1269.72, 1256.27, 1270.68, 1253.35, 1271.79, 1250.55);
		context.bezierCurveTo(1272.87, 1251.55, 1273.96, 1252.56, 1275.08, 1253.59);
		context.bezierCurveTo(1276.89, 1251.52, 1279.79, 1249.8, 1279.85, 1246.75);
		context.bezierCurveTo(1280.45, 1240.92, 1280.19, 1235.05, 1280.48, 1229.21);
		context.bezierCurveTo(1280.91, 1230.83, 1281.33, 1232.48, 1281.79, 1234.13);
		context.bezierCurveTo(1283.05, 1233.89, 1284.33, 1233.67, 1285.64, 1233.45);
		context.bezierCurveTo(1282.56, 1247.07, 1279.4, 1260.71, 1275.27, 1274.05);
		context.bezierCurveTo(1275.71, 1274.23, 1276.59, 1274.59, 1277.03, 1274.76);
		context.bezierCurveTo(1276.61, 1274.85, 1275.76, 1275.04, 1275.33, 1275.12);
		context.bezierCurveTo(1271.25, 1289.71, 1266.95, 1304.21, 1262.36, 1318.64);
		context.bezierCurveTo(1262.15, 1320.63, 1260.37, 1321.45, 1258.91, 1322.44);
		context.bezierCurveTo(1257.55, 1326.15, 1256.13, 1329.84, 1254.29, 1333.33);
		context.lineTo(1243.91, 1333.33);
		context.bezierCurveTo(1243.85, 1329.96, 1243.8, 1326.6, 1243.75, 1323.24);
		context.bezierCurveTo(1241.69, 1322.89, 1239.65, 1322.56, 1237.64, 1322.25);
		context.bezierCurveTo(1237.37, 1320.21, 1237.12, 1318.19, 1236.88, 1316.19);
		context.bezierCurveTo(1230.81, 1316.01, 1224.73, 1316.44, 1218.68, 1316.11);
		context.bezierCurveTo(1214.75, 1315.93, 1212.04, 1312.12, 1208.07, 1312.19);
		context.bezierCurveTo(1203.67, 1311.92, 1199.25, 1312.01, 1194.87, 1311.88);
		context.bezierCurveTo(1194.65, 1308.44, 1194.44, 1305.01, 1194.24, 1301.6);
		context.bezierCurveTo(1187.47, 1301.45, 1180.69, 1301.48, 1173.93, 1301.23);
		context.bezierCurveTo(1173.61, 1300.37, 1172.97, 1298.68, 1172.65, 1297.84);
		context.bezierCurveTo(1169.88, 1297.59, 1167.08, 1297.41, 1164.43, 1296.63);
		context.bezierCurveTo(1154.09, 1292.71, 1142.88, 1296, 1132.21, 1294.41);
		context.bezierCurveTo(1128.16, 1293.2, 1124.4, 1291.2, 1120.4, 1289.87);
		context.bezierCurveTo(1120.08, 1288.01, 1119.79, 1286.17, 1119.52, 1284.36);
		context.bezierCurveTo(1115.31, 1284.15, 1110.13, 1285.01, 1108.04, 1280.37);
		context.bezierCurveTo(1102.24, 1279.95, 1096.41, 1280.48, 1090.64, 1279.96);
		context.bezierCurveTo(1088.77, 1279.88, 1088.08, 1277.71, 1086.83, 1276.68);
		context.bezierCurveTo(1080.03, 1276.03, 1073.67, 1273.04, 1066.79, 1273.03);
		context.bezierCurveTo(1066.59, 1268.31, 1066.45, 1263.6, 1066.4, 1258.89);
		context.bezierCurveTo(1053.59, 1258.51, 1040.77, 1259.08, 1027.97, 1258.73);
		context.bezierCurveTo(1024.64, 1258.93, 1023.32, 1254.65, 1020.05, 1254.81);
		context.bezierCurveTo(1014.4, 1254.55, 1008.75, 1254.91, 1003.11, 1254.64);
		context.bezierCurveTo(1002.79, 1252.55, 1002.48, 1250.48, 1002.19, 1248.41);
		context.bezierCurveTo(998.83, 1248.19, 995.47, 1247.97, 992.13, 1247.77);
		context.bezierCurveTo(991.93, 1244.33, 991.76, 1240.92, 991.59, 1237.51);
		context.bezierCurveTo(988.39, 1237.53, 985.2, 1237.56, 982.01, 1237.61);
		context.bezierCurveTo(981.71, 1238.45, 981.11, 1240.11, 980.8, 1240.93);
		context.bezierCurveTo(973.71, 1240.79, 967.4, 1245.13, 960.25, 1244.12);
		context.bezierCurveTo(960.03, 1240.65, 959.8, 1237.19, 959.57, 1233.75);
		context.bezierCurveTo(953.15, 1233.08, 946.57, 1233.05, 940.31, 1231.4);
		context.bezierCurveTo(936.41, 1229.44, 932.75, 1226.97, 928.45, 1225.92);
		context.bezierCurveTo(928.08, 1224.05, 927.73, 1222.19, 927.39, 1220.35);
		context.bezierCurveTo(924.59, 1220.21, 921.79, 1220.08, 919, 1219.93);
		context.bezierCurveTo(913.48, 1210.87, 899.64, 1221.48, 894.29, 1212.24);
		context.bezierCurveTo(890.37, 1211.97, 886.36, 1211.04, 882.47, 1211.91);
		context.bezierCurveTo(879.95, 1213.29, 877.72, 1215.19, 875.04, 1216.28);
		context.bezierCurveTo(874.55, 1212.73, 874.47, 1209.15, 874.36, 1205.6);
		context.bezierCurveTo(860.39, 1204.87, 846.32, 1206.29, 832.41, 1204.89);
		context.bezierCurveTo(832.32, 1204.08, 832.13, 1202.45, 832.05, 1201.64);
		context.bezierCurveTo(839.04, 1200.75, 846.12, 1201.33, 853.15, 1201.09);
		context.bezierCurveTo(853.13, 1199.01, 853.13, 1196.93, 853.13, 1194.88);
		context.bezierCurveTo(846.96, 1194.67, 840.76, 1195.16, 834.61, 1194.59);
		context.bezierCurveTo(832.72, 1194.48, 832.03, 1192.27, 830.76, 1191.23);
		context.bezierCurveTo(827.29, 1190.75, 823.8, 1190.15, 820.29, 1190.29);
		context.bezierCurveTo(816.63, 1190.29, 814.64, 1194.36, 811.08, 1194.68);
		context.bezierCurveTo(810.52, 1191.23, 810.39, 1187.72, 810.21, 1184.24);
		context.bezierCurveTo(803.31, 1184.12, 796.39, 1184.2, 789.49, 1183.89);
		context.bezierCurveTo(789.32, 1180.43, 789.16, 1176.95, 789, 1173.49);
		context.bezierCurveTo(785.09, 1173.52, 780.89, 1172.76, 777.33, 1174.79);
		context.bezierCurveTo(774.51, 1176.25, 771.52, 1177.37, 768.32, 1177.68);
		context.bezierCurveTo(768.04, 1174.99, 767.76, 1172.31, 767.49, 1169.64);
		context.bezierCurveTo(753.6, 1169.16, 739.68, 1169.8, 725.79, 1169.25);
		context.bezierCurveTo(725.41, 1167.44, 725.04, 1165.65, 724.65, 1163.88);
		context.bezierCurveTo(720.28, 1161.49, 721.27, 1156.25, 720.84, 1152.11);
		context.bezierCurveTo(715.4, 1152.87, 709.93, 1153.35, 704.44, 1153.44);
		context.bezierCurveTo(704.05, 1151.69, 703.68, 1149.95, 703.32, 1148.23);
		context.bezierCurveTo(692.76, 1147.93, 682.2, 1148.4, 671.67, 1147.68);
		context.bezierCurveTo(667.72, 1147.13, 665.43, 1151.77, 661.77, 1151.83);
		context.bezierCurveTo(661.2, 1148.43, 661.12, 1144.99, 660.95, 1141.56);
		context.bezierCurveTo(654.49, 1141.27, 647.99, 1142.01, 641.57, 1141.16);
		context.bezierCurveTo(640.57, 1140.04, 639.64, 1138.91, 638.75, 1137.76);
		context.bezierCurveTo(632.11, 1137.31, 625.47, 1137.48, 618.84, 1137.17);
		context.bezierCurveTo(618.64, 1132.83, 618.47, 1128.49, 618.33, 1124.16);
		context.bezierCurveTo(611.35, 1124.13, 604.36, 1124.23, 597.39, 1123.87);
		context.bezierCurveTo(597.28, 1119.09, 597.2, 1114.33, 597.12, 1109.57);
		context.bezierCurveTo(583.15, 1109.05, 569.16, 1109.95, 555.2, 1109.19);
		context.bezierCurveTo(554.88, 1108.29, 554.25, 1106.53, 553.95, 1105.65);
		context.bezierCurveTo(547.08, 1105.51, 540.21, 1105.49, 533.36, 1105.16);
		context.bezierCurveTo(533.23, 1099.49, 533.12, 1093.83, 533.04, 1088.17);
		context.bezierCurveTo(530, 1088.21, 526.96, 1088.28, 523.93, 1088.41);
		context.bezierCurveTo(522.65, 1089.48, 521.93, 1091.59, 520.04, 1091.69);
		context.bezierCurveTo(515.52, 1092.45, 511.15, 1093.84, 506.67, 1094.69);
		context.bezierCurveTo(501.4, 1095.2, 496.12, 1094.61, 490.85, 1094.43);
		context.bezierCurveTo(490.64, 1091.01, 490.43, 1087.61, 490.21, 1084.23);
		context.bezierCurveTo(483.37, 1084.05, 476.53, 1084.13, 469.69, 1083.99);
		context.bezierCurveTo(469.45, 1078.07, 468.44, 1072.19, 466.11, 1066.72);
		context.bezierCurveTo(460.25, 1067.2, 454.36, 1068.48, 448.49, 1067.51);
		context.bezierCurveTo(443.89, 1066.79, 439.23, 1066.59, 434.59, 1067.01);
		context.bezierCurveTo(433.13, 1070.15, 430.27, 1071.15, 426.99, 1070.99);
		context.bezierCurveTo(426.72, 1068.35, 426.47, 1065.72, 426.2, 1063.11);
		context.bezierCurveTo(419.52, 1063.43, 413.57, 1059.69, 406.92, 1059.81);
		context.bezierCurveTo(405.28, 1058.27, 404.04, 1055.65, 401.4, 1056.09);
		context.bezierCurveTo(395.67, 1055.93, 389.93, 1056.27, 384.2, 1055.95);
		context.bezierCurveTo(384, 1052.48, 383.8, 1049.03, 383.61, 1045.59);
		context.bezierCurveTo(377.17, 1045.27, 370.68, 1045.96, 364.29, 1045.08);
		context.bezierCurveTo(363.25, 1043.99, 362.27, 1042.85, 361.33, 1041.71);
		context.bezierCurveTo(354.55, 1041.52, 347.75, 1041.23, 340.96, 1040.96);
		context.bezierCurveTo(337.61, 1040.63, 335.27, 1043.39, 332.93, 1045.33);
		context.bezierCurveTo(328.68, 1045.48, 324.41, 1045.41, 320.16, 1045.23);
		context.bezierCurveTo(319.93, 1039.6, 319.83, 1033.99, 319.81, 1028.36);
		context.bezierCurveTo(315.6, 1028.04, 310.27, 1029.15, 308.08, 1024.51);
		context.bezierCurveTo(305.08, 1024.13, 302.09, 1023.85, 299.09, 1023.57);
		context.bezierCurveTo(298.77, 1021.05, 298.47, 1018.56, 298.16, 1016.07);
		context.bezierCurveTo(297.55, 1018.97, 296.93, 1021.87, 296.37, 1024.8);
		context.bezierCurveTo(295.24, 1021.69, 293.84, 1018.68, 291.67, 1016.17);
		context.bezierCurveTo(289.8, 1002.41, 288.36, 988.56, 288.05, 974.67);
		context.bezierCurveTo(286.16, 954.72, 286.89, 934.63, 285.53, 914.67);
		context.bezierCurveTo(292.51, 901.71, 298.4, 888.2, 302.72, 874.13);
		context.closePath();
		context.fillStyle = fillColor178;
		context.fill();
	}

	function drawPath200() {
		//// Bezier 200 Drawing
		context.beginPath();
		context.moveTo(1176.89, 1003.05);
		context.bezierCurveTo(1187.12, 999.04, 1197.16, 994.63, 1206.93, 989.6);
		context.bezierCurveTo(1206.12, 990.93, 1205.2, 992.21, 1204.17, 993.4);
		context.bezierCurveTo(1193.48, 999.68, 1181.76, 1003.79, 1170.57, 1009.03);
		context.bezierCurveTo(1168.56, 1009.84, 1166.32, 1009.57, 1164.23, 1009.72);
		context.bezierCurveTo(1165.91, 1008.55, 1167.59, 1007.33, 1169.35, 1006.28);
		context.bezierCurveTo(1171.83, 1005.15, 1174.39, 1004.16, 1176.89, 1003.05);
		context.closePath();
		context.fillStyle = fillColor178;
		context.fill();
	}



	function drawPath201() {
		//// #9cbaccff
		//// Bezier 201 Drawing
		context.beginPath();
		context.moveTo(102.89, 885.48);
		context.bezierCurveTo(100.99, 881.72, 98.09, 877.65, 99.99, 873.28);
		context.bezierCurveTo(108.4, 883.03, 116.87, 892.75, 125.79, 902.04);
		context.bezierCurveTo(129.52, 906.48, 133.41, 910.8, 137.93, 914.47);
		context.bezierCurveTo(144.11, 919.72, 149.48, 925.85, 156.01, 930.69);
		context.bezierCurveTo(163.88, 936.45, 170.88, 943.52, 176.21, 951.68);
		context.bezierCurveTo(179.12, 958.69, 180.49, 966.25, 181.99, 973.67);
		context.bezierCurveTo(180.17, 972.32, 178.35, 971, 176.53, 969.68);
		context.bezierCurveTo(176.35, 970.07, 175.97, 970.83, 175.79, 971.21);
		context.lineTo(174.55, 972.43);
		context.bezierCurveTo(174.21, 965.49, 172.09, 958.84, 170.28, 952.19);
		context.bezierCurveTo(169.23, 948.11, 166.75, 944.48, 163.32, 942.04);
		context.bezierCurveTo(152.67, 934.52, 142.48, 926.32, 132.96, 917.41);
		context.bezierCurveTo(129.45, 913.47, 125.49, 909.96, 121.97, 906.04);
		context.bezierCurveTo(115.81, 898.99, 108.29, 893.2, 102.89, 885.48);
		context.closePath();
		context.fillStyle = fillColor179;
		context.fill();
	}



	function drawPath202() {
		//// #c1d2eeff
		//// Bezier 202 Drawing
		context.beginPath();
		context.moveTo(336.95, 874.97);
		context.bezierCurveTo(338.24, 874.69, 340.81, 874.16, 342.11, 873.89);
		context.bezierCurveTo(344.81, 879.77, 347.89, 885.47, 351.51, 890.84);
		context.bezierCurveTo(355.17, 896.31, 356.96, 903.07, 362.03, 907.55);
		context.bezierCurveTo(362.55, 914.44, 367.8, 919.27, 371.43, 924.68);
		context.bezierCurveTo(375.67, 929.59, 378.68, 935.56, 383.45, 939.96);
		context.bezierCurveTo(383.36, 940.24, 383.17, 940.8, 383.07, 941.08);
		context.bezierCurveTo(382.88, 941.59, 382.48, 942.6, 382.29, 943.11);
		context.bezierCurveTo(383.16, 945.51, 384.01, 947.89, 384.87, 950.33);
		context.bezierCurveTo(380.64, 947.4, 376.92, 943.85, 373.48, 940.07);
		context.bezierCurveTo(362.91, 928.36, 353.8, 915.27, 347.2, 900.92);
		context.bezierCurveTo(343.72, 892.29, 339.85, 883.81, 336.95, 874.97);
		context.closePath();
		context.fillStyle = fillColor180;
		context.fill();
	}



	function drawPath203() {
		//// #0a0702ff
		//// Bezier 203 Drawing
		context.beginPath();
		context.moveTo(1328.97, 882.23);
		context.bezierCurveTo(1330.76, 879.6, 1332.37, 876.83, 1333.33, 873.79);
		context.lineTo(1333.33, 890.84);
		context.bezierCurveTo(1332.17, 892.91, 1330.85, 895.15, 1331.32, 897.65);
		context.bezierCurveTo(1331.83, 898.25, 1332.83, 899.47, 1333.33, 900.08);
		context.lineTo(1333.33, 920.24);
		context.bezierCurveTo(1332.65, 920.47, 1331.28, 920.91, 1330.6, 921.12);
		context.bezierCurveTo(1329.59, 919.72, 1328.57, 918.32, 1327.61, 916.95);
		context.bezierCurveTo(1327.49, 911.72, 1327.48, 906.49, 1327.2, 901.28);
		context.bezierCurveTo(1324.97, 907.61, 1322.03, 913.64, 1319, 919.63);
		context.lineTo(1318.88, 919.55);
		context.bezierCurveTo(1317.16, 918.36, 1315.52, 917.03, 1313.91, 915.75);
		context.lineTo(1314.37, 914.92);
		context.bezierCurveTo(1318.76, 907.43, 1322.71, 899.71, 1326.55, 891.92);
		context.bezierCurveTo(1328.05, 888.89, 1328.48, 885.52, 1328.97, 882.23);
		context.closePath();
		context.fillStyle = fillColor181;
		context.fill();
	}



	function drawPath204() {
		//// #0a0218ff
		//// Bezier 204 Drawing
		context.beginPath();
		context.moveTo(1312.49, 876.45);
		context.bezierCurveTo(1312.4, 879.76, 1312.57, 883.08, 1313.43, 886.31);
		context.bezierCurveTo(1288.12, 929.45, 1251.93, 967.01, 1206.93, 989.6);
		context.bezierCurveTo(1197.16, 994.63, 1187.12, 999.04, 1176.89, 1003.05);
		context.bezierCurveTo(1182.37, 998.57, 1188.87, 995.65, 1195.15, 992.48);
		context.bezierCurveTo(1223.27, 977.51, 1248.56, 957.49, 1270.6, 934.56);
		context.bezierCurveTo(1286.91, 917.07, 1301.49, 897.72, 1312.49, 876.45);
		context.closePath();
		context.fillStyle = fillColor182;
		context.fill();
	}



	function drawPath205() {
		//// #bcd6f2ff
		//// Bezier 205 Drawing
		context.beginPath();
		context.moveTo(426.29, 885.05);
		context.bezierCurveTo(434.4, 897.04, 443.05, 908.72, 452.65, 919.56);
		context.bezierCurveTo(465.36, 934.73, 480.59, 947.55, 496.01, 959.85);
		context.bezierCurveTo(493.17, 959.63, 490.36, 959.09, 488.09, 957.29);
		context.bezierCurveTo(480.84, 952.24, 472.55, 947.59, 468.32, 939.47);
		context.bezierCurveTo(460.63, 935.33, 457.12, 926.51, 449.15, 922.79);
		context.bezierCurveTo(448.53, 921.15, 447.93, 919.52, 447.35, 917.92);
		context.bezierCurveTo(445.72, 917.36, 444.11, 916.83, 442.49, 916.31);
		context.bezierCurveTo(441.81, 913.56, 441.59, 910.53, 439.83, 908.23);
		context.bezierCurveTo(434.08, 901.41, 428.19, 893.95, 426.29, 885.05);
		context.closePath();
		context.fillStyle = fillColor183;
		context.fill();
	}



	function drawPath206() {
		//// #0b0800ff
		//// Bezier 206 Drawing
		context.beginPath();
		context.moveTo(370.68, 891.55);
		context.bezierCurveTo(371.97, 891.95, 373.28, 892.31, 374.61, 892.65);
		context.bezierCurveTo(374.85, 892.05, 375.35, 890.85, 375.59, 890.25);
		context.bezierCurveTo(375.75, 890.56, 376.05, 891.16, 376.21, 891.47);
		context.bezierCurveTo(388.75, 915.08, 403.88, 937.37, 421.83, 957.23);
		context.bezierCurveTo(433.07, 969.93, 446.05, 980.95, 459.11, 991.71);
		context.bezierCurveTo(464.21, 994.77, 468.33, 999.73, 474.17, 1001.39);
		context.bezierCurveTo(473.64, 1001.49, 472.56, 1001.73, 472.03, 1001.85);
		context.bezierCurveTo(470.96, 1001.33, 469.88, 1000.84, 468.81, 1000.36);
		context.bezierCurveTo(445.43, 988.16, 426.07, 969.69, 408.81, 950.01);
		context.bezierCurveTo(393.93, 932.09, 380.33, 912.81, 370.68, 891.55);
		context.closePath();
		context.fillStyle = fillColor184;
		context.fill();
	}



	function drawPath207() {
		//// #ffeecfff
		//// Bezier 207 Drawing
		context.beginPath();
		context.moveTo(376.21, 891.47);
		context.bezierCurveTo(376.79, 891.36, 377.93, 891.16, 378.51, 891.05);
		context.bezierCurveTo(389.17, 907.99, 399.11, 925.55, 412.76, 940.35);
		context.bezierCurveTo(413.59, 940.36, 414.43, 940.39, 415.27, 940.41);
		context.bezierCurveTo(415.24, 941.4, 415.21, 942.39, 415.2, 943.39);
		context.bezierCurveTo(418.19, 946.12, 421.16, 948.88, 424.2, 951.56);
		context.lineTo(425.05, 952.87);
		context.bezierCurveTo(424.59, 953.36, 423.67, 954.35, 423.2, 954.83);
		context.bezierCurveTo(423.77, 955.59, 424.36, 956.35, 424.95, 957.13);
		context.bezierCurveTo(424.17, 957.15, 422.61, 957.2, 421.83, 957.23);
		context.bezierCurveTo(403.88, 937.37, 388.75, 915.08, 376.21, 891.47);
		context.closePath();
		context.fillStyle = fillColor185;
		context.fill();
	}



	function drawPath208() {
		//// #e9f2fdff
		//// Bezier 208 Drawing
		context.beginPath();
		context.moveTo(1331.32, 897.65);
		context.bezierCurveTo(1330.85, 895.15, 1332.17, 892.91, 1333.33, 890.84);
		context.lineTo(1333.33, 900.08);
		context.bezierCurveTo(1332.83, 899.47, 1331.83, 898.25, 1331.32, 897.65);
		context.closePath();
		context.fillStyle = fillColor186;
		context.fill();
	}

	function drawPath209() {
		//// Bezier 209 Drawing
		context.beginPath();
		context.moveTo(296.37, 1024.8);
		context.bezierCurveTo(296.93, 1021.87, 297.55, 1018.97, 298.16, 1016.07);
		context.bezierCurveTo(298.47, 1018.56, 298.77, 1021.05, 299.09, 1023.57);
		context.bezierCurveTo(302.09, 1023.85, 305.08, 1024.13, 308.08, 1024.51);
		context.bezierCurveTo(310.27, 1029.15, 315.6, 1028.04, 319.81, 1028.36);
		context.bezierCurveTo(319.83, 1033.99, 319.93, 1039.6, 320.16, 1045.23);
		context.bezierCurveTo(324.41, 1045.41, 328.68, 1045.48, 332.93, 1045.33);
		context.bezierCurveTo(335.27, 1043.39, 337.61, 1040.63, 340.96, 1040.96);
		context.bezierCurveTo(347.75, 1041.23, 354.55, 1041.52, 361.33, 1041.71);
		context.bezierCurveTo(362.27, 1042.85, 363.25, 1043.99, 364.29, 1045.08);
		context.bezierCurveTo(370.68, 1045.96, 377.17, 1045.27, 383.61, 1045.59);
		context.bezierCurveTo(383.8, 1049.03, 384, 1052.48, 384.2, 1055.95);
		context.bezierCurveTo(389.93, 1056.27, 395.67, 1055.93, 401.4, 1056.09);
		context.bezierCurveTo(404.04, 1055.65, 405.28, 1058.27, 406.92, 1059.81);
		context.bezierCurveTo(413.57, 1059.69, 419.52, 1063.43, 426.2, 1063.11);
		context.bezierCurveTo(426.47, 1065.72, 426.72, 1068.35, 426.99, 1070.99);
		context.bezierCurveTo(430.27, 1071.15, 433.13, 1070.15, 434.59, 1067.01);
		context.bezierCurveTo(439.23, 1066.59, 443.89, 1066.79, 448.49, 1067.51);
		context.bezierCurveTo(454.36, 1068.48, 460.25, 1067.2, 466.11, 1066.72);
		context.bezierCurveTo(468.44, 1072.19, 469.45, 1078.07, 469.69, 1083.99);
		context.bezierCurveTo(476.53, 1084.13, 483.37, 1084.05, 490.21, 1084.23);
		context.bezierCurveTo(490.43, 1087.61, 490.64, 1091.01, 490.85, 1094.43);
		context.bezierCurveTo(496.12, 1094.61, 501.4, 1095.2, 506.67, 1094.69);
		context.bezierCurveTo(511.15, 1093.84, 515.52, 1092.45, 520.04, 1091.69);
		context.bezierCurveTo(521.93, 1091.59, 522.65, 1089.48, 523.93, 1088.41);
		context.bezierCurveTo(526.96, 1088.28, 530, 1088.21, 533.04, 1088.17);
		context.bezierCurveTo(533.12, 1093.83, 533.23, 1099.49, 533.36, 1105.16);
		context.bezierCurveTo(540.21, 1105.49, 547.08, 1105.51, 553.95, 1105.65);
		context.bezierCurveTo(554.25, 1106.53, 554.88, 1108.29, 555.2, 1109.19);
		context.bezierCurveTo(569.16, 1109.95, 583.15, 1109.05, 597.12, 1109.57);
		context.bezierCurveTo(597.2, 1114.33, 597.28, 1119.09, 597.39, 1123.87);
		context.bezierCurveTo(604.36, 1124.23, 611.35, 1124.13, 618.33, 1124.16);
		context.bezierCurveTo(618.47, 1128.49, 618.64, 1132.83, 618.84, 1137.17);
		context.bezierCurveTo(625.47, 1137.48, 632.11, 1137.31, 638.75, 1137.76);
		context.bezierCurveTo(639.64, 1138.91, 640.57, 1140.04, 641.57, 1141.16);
		context.bezierCurveTo(647.99, 1142.01, 654.49, 1141.27, 660.95, 1141.56);
		context.bezierCurveTo(661.12, 1144.99, 661.2, 1148.43, 661.77, 1151.83);
		context.bezierCurveTo(665.43, 1151.77, 667.72, 1147.13, 671.67, 1147.68);
		context.bezierCurveTo(682.2, 1148.4, 692.76, 1147.93, 703.32, 1148.23);
		context.bezierCurveTo(703.68, 1149.95, 704.05, 1151.69, 704.44, 1153.44);
		context.bezierCurveTo(709.93, 1153.35, 715.4, 1152.87, 720.84, 1152.11);
		context.bezierCurveTo(721.27, 1156.25, 720.28, 1161.49, 724.65, 1163.88);
		context.bezierCurveTo(725.04, 1165.65, 725.41, 1167.44, 725.79, 1169.25);
		context.bezierCurveTo(739.68, 1169.8, 753.6, 1169.16, 767.49, 1169.64);
		context.bezierCurveTo(767.76, 1172.31, 768.04, 1174.99, 768.32, 1177.68);
		context.bezierCurveTo(771.52, 1177.37, 774.51, 1176.25, 777.33, 1174.79);
		context.bezierCurveTo(780.89, 1172.76, 785.09, 1173.52, 789, 1173.49);
		context.bezierCurveTo(789.16, 1176.95, 789.32, 1180.43, 789.49, 1183.89);
		context.bezierCurveTo(796.39, 1184.2, 803.31, 1184.12, 810.21, 1184.24);
		context.bezierCurveTo(810.39, 1187.72, 810.52, 1191.23, 811.08, 1194.68);
		context.bezierCurveTo(814.64, 1194.36, 816.63, 1190.29, 820.29, 1190.29);
		context.bezierCurveTo(823.8, 1190.15, 827.29, 1190.75, 830.76, 1191.23);
		context.bezierCurveTo(832.03, 1192.27, 832.72, 1194.48, 834.61, 1194.59);
		context.bezierCurveTo(840.76, 1195.16, 846.96, 1194.67, 853.13, 1194.88);
		context.bezierCurveTo(853.13, 1196.93, 853.13, 1199.01, 853.15, 1201.09);
		context.bezierCurveTo(846.12, 1201.33, 839.04, 1200.75, 832.05, 1201.64);
		context.bezierCurveTo(832.13, 1202.45, 832.32, 1204.08, 832.41, 1204.89);
		context.bezierCurveTo(846.32, 1206.29, 860.39, 1204.87, 874.36, 1205.6);
		context.bezierCurveTo(874.47, 1209.15, 874.55, 1212.73, 875.04, 1216.28);
		context.bezierCurveTo(877.72, 1215.19, 879.95, 1213.29, 882.47, 1211.91);
		context.bezierCurveTo(886.36, 1211.04, 890.37, 1211.97, 894.29, 1212.24);
		context.bezierCurveTo(899.64, 1221.48, 913.48, 1210.87, 919, 1219.93);
		context.bezierCurveTo(921.79, 1220.08, 924.59, 1220.21, 927.39, 1220.35);
		context.bezierCurveTo(927.73, 1222.19, 928.08, 1224.05, 928.45, 1225.92);
		context.bezierCurveTo(932.75, 1226.97, 936.41, 1229.44, 940.31, 1231.4);
		context.bezierCurveTo(946.57, 1233.05, 953.15, 1233.08, 959.57, 1233.75);
		context.bezierCurveTo(959.8, 1237.19, 960.03, 1240.65, 960.25, 1244.12);
		context.bezierCurveTo(967.4, 1245.13, 973.71, 1240.79, 980.8, 1240.93);
		context.bezierCurveTo(981.11, 1240.11, 981.71, 1238.45, 982.01, 1237.61);
		context.bezierCurveTo(985.2, 1237.56, 988.39, 1237.53, 991.59, 1237.51);
		context.bezierCurveTo(991.76, 1240.92, 991.93, 1244.33, 992.13, 1247.77);
		context.bezierCurveTo(995.47, 1247.97, 998.83, 1248.19, 1002.19, 1248.41);
		context.bezierCurveTo(1002.48, 1250.48, 1002.79, 1252.55, 1003.11, 1254.64);
		context.bezierCurveTo(1008.75, 1254.91, 1014.4, 1254.55, 1020.05, 1254.81);
		context.bezierCurveTo(1023.32, 1254.65, 1024.64, 1258.93, 1027.97, 1258.73);
		context.bezierCurveTo(1040.77, 1259.08, 1053.59, 1258.51, 1066.4, 1258.89);
		context.bezierCurveTo(1066.45, 1263.6, 1066.59, 1268.31, 1066.79, 1273.03);
		context.bezierCurveTo(1073.67, 1273.04, 1080.03, 1276.03, 1086.83, 1276.68);
		context.bezierCurveTo(1088.08, 1277.71, 1088.77, 1279.88, 1090.64, 1279.96);
		context.bezierCurveTo(1096.41, 1280.48, 1102.24, 1279.95, 1108.04, 1280.37);
		context.bezierCurveTo(1110.13, 1285.01, 1115.31, 1284.15, 1119.52, 1284.36);
		context.bezierCurveTo(1119.79, 1286.17, 1120.08, 1288.01, 1120.4, 1289.87);
		context.bezierCurveTo(1124.4, 1291.2, 1128.16, 1293.2, 1132.21, 1294.41);
		context.bezierCurveTo(1142.88, 1296, 1154.09, 1292.71, 1164.43, 1296.63);
		context.bezierCurveTo(1167.08, 1297.41, 1169.88, 1297.59, 1172.65, 1297.84);
		context.bezierCurveTo(1172.97, 1298.68, 1173.61, 1300.37, 1173.93, 1301.23);
		context.bezierCurveTo(1180.69, 1301.48, 1187.47, 1301.45, 1194.24, 1301.6);
		context.bezierCurveTo(1194.44, 1305.01, 1194.65, 1308.44, 1194.87, 1311.88);
		context.bezierCurveTo(1199.25, 1312.01, 1203.67, 1311.92, 1208.07, 1312.19);
		context.bezierCurveTo(1212.04, 1312.12, 1214.75, 1315.93, 1218.68, 1316.11);
		context.bezierCurveTo(1224.73, 1316.44, 1230.81, 1316.01, 1236.88, 1316.19);
		context.bezierCurveTo(1237.12, 1318.19, 1237.37, 1320.21, 1237.64, 1322.25);
		context.bezierCurveTo(1239.65, 1322.56, 1241.69, 1322.89, 1243.75, 1323.24);
		context.bezierCurveTo(1243.8, 1326.6, 1243.85, 1329.96, 1243.91, 1333.33);
		context.lineTo(853.49, 1333.33);
		context.bezierCurveTo(853.55, 1330.04, 854.12, 1326.8, 855.12, 1323.68);
		context.bezierCurveTo(847.49, 1321.97, 839.65, 1322.72, 831.92, 1322.64);
		context.bezierCurveTo(810.71, 1322.55, 789.51, 1322.63, 768.29, 1322.39);
		context.bezierCurveTo(768.12, 1315.41, 768.11, 1308.43, 767.88, 1301.47);
		context.bezierCurveTo(746.65, 1300.95, 725.43, 1301.39, 704.21, 1301.15);
		context.bezierCurveTo(704.11, 1294.15, 704.12, 1287.16, 703.81, 1280.17);
		context.bezierCurveTo(682.65, 1279.49, 661.48, 1280.23, 640.32, 1279.72);
		context.bezierCurveTo(640.19, 1275, 640.03, 1270.29, 639.87, 1265.6);
		context.bezierCurveTo(636.51, 1265.4, 633.16, 1265.23, 629.81, 1265.05);
		context.bezierCurveTo(629.49, 1262.97, 629.17, 1260.91, 628.88, 1258.85);
		context.bezierCurveTo(611.37, 1258.2, 593.85, 1258.81, 576.35, 1258.45);
		context.bezierCurveTo(576.16, 1255, 575.99, 1251.57, 575.8, 1248.15);
		context.bezierCurveTo(568.88, 1247.87, 561.95, 1247.87, 555.01, 1247.76);
		context.bezierCurveTo(554.81, 1244.33, 554.61, 1240.91, 554.41, 1237.49);
		context.bezierCurveTo(540.4, 1236.89, 526.37, 1237.57, 512.37, 1237.05);
		context.bezierCurveTo(512.21, 1232.27, 512.03, 1227.49, 511.81, 1222.73);
		context.bezierCurveTo(504.92, 1222.55, 498.03, 1222.59, 491.13, 1222.45);
		context.bezierCurveTo(490.85, 1220.32, 490.59, 1218.21, 490.32, 1216.12);
		context.bezierCurveTo(476.65, 1215.48, 462.97, 1216.33, 449.32, 1215.6);
		context.bezierCurveTo(448.44, 1214.39, 447.51, 1213.24, 446.52, 1212.16);
		context.bezierCurveTo(440.04, 1211.31, 433.48, 1212.08, 426.97, 1211.8);
		context.bezierCurveTo(426.83, 1206.12, 426.64, 1200.47, 426.41, 1194.81);
		context.bezierCurveTo(405.24, 1194.25, 384.07, 1194.81, 362.89, 1194.4);
		context.bezierCurveTo(362.84, 1187.43, 362.83, 1180.44, 362.53, 1173.48);
		context.bezierCurveTo(355.59, 1173.2, 348.63, 1173.24, 341.68, 1173.16);
		context.bezierCurveTo(341.48, 1169.71, 341.28, 1166.25, 341.08, 1162.81);
		context.bezierCurveTo(336.63, 1162.96, 331.04, 1161.17, 327.65, 1165);
		context.bezierCurveTo(325.17, 1167.27, 322.85, 1169.71, 320.4, 1172.01);
		context.bezierCurveTo(318.13, 1167.43, 317.76, 1162.05, 314.65, 1157.89);
		context.bezierCurveTo(312.43, 1151.37, 312.07, 1144.44, 310.27, 1137.83);
		context.bezierCurveTo(307.09, 1125.33, 303.39, 1112.93, 302.27, 1100.04);
		context.bezierCurveTo(299.08, 1084.61, 297.43, 1068.95, 295.19, 1053.37);
		context.bezierCurveTo(294.05, 1040.97, 291.47, 1028.68, 291.67, 1016.17);
		context.bezierCurveTo(293.84, 1018.68, 295.24, 1021.69, 296.37, 1024.8);
		context.closePath();
		context.fillStyle = fillColor186;
		context.fill();
	}


	function drawPath210() {
		//// #f2fcfdff
		//// Bezier 210 Drawing
		context.beginPath();
		context.moveTo(165.8, 902.44);
		context.bezierCurveTo(165.63, 900.68, 165.45, 898.91, 165.23, 897.17);
		context.bezierCurveTo(170.47, 901.32, 175.77, 905.4, 181.11, 909.43);
		context.bezierCurveTo(193.47, 918.83, 207.2, 926.6, 218, 937.89);
		context.bezierCurveTo(225.49, 945.03, 229.97, 954.56, 233.89, 963.97);
		context.bezierCurveTo(235.03, 971.99, 233.15, 980.03, 232.88, 988.05);
		context.bezierCurveTo(231.36, 988.27, 229.84, 988.51, 228.32, 988.76);
		context.bezierCurveTo(227.51, 986.8, 226.69, 984.85, 225.88, 982.93);
		context.bezierCurveTo(225.64, 983.67, 225.13, 985.15, 224.88, 985.89);
		context.bezierCurveTo(220.64, 985.55, 216.33, 984.84, 212.09, 985.52);
		context.bezierCurveTo(209.01, 987.08, 207.24, 990.52, 203.89, 991.69);
		context.bezierCurveTo(199.35, 993.41, 194.93, 995.44, 190.83, 998.07);
		context.bezierCurveTo(190.63, 996.05, 190.41, 994.07, 190.21, 992.09);
		context.bezierCurveTo(189.63, 993.81, 189.04, 995.55, 188.47, 997.29);
		context.bezierCurveTo(187.43, 993.91, 186.07, 990.63, 184.55, 987.45);
		context.bezierCurveTo(183.43, 982.91, 182.76, 978.27, 181.99, 973.67);
		context.bezierCurveTo(180.49, 966.25, 179.12, 958.69, 176.21, 951.68);
		context.bezierCurveTo(170.88, 943.52, 163.88, 936.45, 156.01, 930.69);
		context.bezierCurveTo(149.48, 925.85, 144.11, 919.72, 137.93, 914.47);
		context.bezierCurveTo(139.29, 913.37, 140.65, 912.32, 142.03, 911.27);
		context.bezierCurveTo(138.09, 909.96, 134.61, 907.69, 131.6, 904.88);
		context.bezierCurveTo(134.15, 904.91, 136.68, 904.99, 139.23, 905.08);
		context.bezierCurveTo(137.75, 903.76, 136.27, 902.43, 134.79, 901.12);
		context.bezierCurveTo(140.41, 899.41, 144.28, 905.44, 148.45, 908.16);
		context.bezierCurveTo(148.91, 906.49, 149.36, 904.83, 149.81, 903.19);
		context.bezierCurveTo(152.15, 904.61, 154.35, 907.09, 157.33, 906.73);
		context.bezierCurveTo(160.44, 905.93, 163.07, 904.03, 165.8, 902.44);
		context.closePath();
		context.fillStyle = fillColor187;
		context.fill();
	}

	function drawPath211() {
		//// Bezier 211 Drawing
		context.beginPath();
		context.moveTo(190.05, 1013.28);
		context.bezierCurveTo(190.37, 1016.81, 190.76, 1020.35, 191.11, 1023.89);
		context.bezierCurveTo(198.37, 1023.96, 205.64, 1023.87, 212.89, 1024.16);
		context.bezierCurveTo(213.23, 1026.4, 213.57, 1028.64, 213.92, 1030.91);
		context.bezierCurveTo(217, 1030.07, 220.05, 1029.15, 223.09, 1028.15);
		context.bezierCurveTo(223.97, 1031.16, 225.17, 1034.13, 227.25, 1036.55);
		context.bezierCurveTo(226.85, 1034.63, 226.43, 1032.73, 225.97, 1030.85);
		context.bezierCurveTo(226.39, 1029.95, 226.81, 1029.07, 227.24, 1028.19);
		context.bezierCurveTo(228.32, 1031.08, 229.41, 1033.97, 230.39, 1036.91);
		context.bezierCurveTo(229.57, 1050.23, 229.93, 1063.57, 229.08, 1076.88);
		context.bezierCurveTo(227.51, 1083.51, 227.83, 1090.35, 227.79, 1097.11);
		context.bezierCurveTo(222.73, 1100.47, 216.69, 1100.24, 211, 1098.97);
		context.bezierCurveTo(207.4, 1103.51, 201.59, 1102.33, 196.56, 1103.2);
		context.bezierCurveTo(194.03, 1105.09, 192.09, 1107.63, 189.96, 1109.93);
		context.bezierCurveTo(189.24, 1103.68, 189.19, 1097.37, 188.67, 1091.12);
		context.bezierCurveTo(188.17, 1086.05, 189.79, 1080.75, 187.44, 1075.96);
		context.bezierCurveTo(187.48, 1058.91, 187.15, 1041.84, 187.6, 1024.81);
		context.bezierCurveTo(189.04, 1021.11, 189.77, 1017.21, 190.05, 1013.28);
		context.closePath();
		context.fillStyle = fillColor187;
		context.fill();
	}


	function drawPath212() {
		//// #f1f3d8ff
		//// Bezier 212 Drawing
		context.beginPath();
		context.moveTo(1319, 919.63);
		context.bezierCurveTo(1322.03, 913.64, 1324.97, 907.61, 1327.2, 901.28);
		context.bezierCurveTo(1327.48, 906.49, 1327.49, 911.72, 1327.61, 916.95);
		context.bezierCurveTo(1326.17, 917.28, 1324.76, 917.63, 1323.37, 917.97);
		context.bezierCurveTo(1323.01, 918.75, 1322.28, 920.31, 1321.92, 921.08);
		context.bezierCurveTo(1321.2, 920.72, 1319.73, 919.99, 1319, 919.63);
		context.closePath();
		context.fillStyle = fillColor188;
		context.fill();
	}



	function drawPath213() {
		//// #c9cce6ff
		//// Bezier 213 Drawing
		context.beginPath();
		context.moveTo(1205.09, 906.23);
		context.bezierCurveTo(1208.95, 905.81, 1212.41, 907.64, 1215.81, 909.21);
		context.bezierCurveTo(1215.91, 913.48, 1216.77, 917.99, 1215.29, 922.11);
		context.bezierCurveTo(1213.33, 924.57, 1210.67, 926.33, 1208.39, 928.48);
		context.bezierCurveTo(1203.84, 932.19, 1202.04, 939.35, 1195.21, 939.56);
		context.bezierCurveTo(1194.83, 941.35, 1194.47, 943.13, 1194.13, 944.95);
		context.bezierCurveTo(1186.24, 950.72, 1179.83, 958.12, 1173.25, 965.28);
		context.bezierCurveTo(1170.37, 968.49, 1165.84, 969.23, 1162.52, 971.84);
		context.bezierCurveTo(1159.75, 974.44, 1158.64, 978.32, 1155.95, 980.99);
		context.bezierCurveTo(1152.88, 981.56, 1149.76, 981.55, 1146.67, 981.69);
		context.bezierCurveTo(1146.32, 983.51, 1145.97, 985.32, 1145.64, 987.13);
		context.bezierCurveTo(1150.53, 988.76, 1155.53, 990, 1160.53, 991.29);
		context.bezierCurveTo(1155.83, 993.25, 1151.08, 995.12, 1146.31, 996.87);
		context.bezierCurveTo(1133.21, 1001.88, 1119.71, 1005.81, 1105.97, 1008.63);
		context.bezierCurveTo(1111.11, 1004.36, 1116.87, 1000.92, 1122.29, 997.05);
		context.bezierCurveTo(1128.48, 993.63, 1133.2, 988.25, 1139.15, 984.48);
		context.bezierCurveTo(1155.28, 972.33, 1170.97, 959.52, 1185.11, 945.04);
		context.bezierCurveTo(1196.33, 935.89, 1204.65, 923.95, 1214.77, 913.71);
		context.bezierCurveTo(1211.45, 911.32, 1208.17, 908.88, 1205.09, 906.23);
		context.closePath();
		context.fillStyle = fillColor189;
		context.fill();
	}

	function drawPath214() {

		//// #9ef0f7ff
		//// Bezier 214 Drawing
		context.beginPath();
		context.moveTo(362.03, 907.55);
		context.bezierCurveTo(365.04, 910.04, 368.16, 912.39, 371.08, 914.99);
		context.bezierCurveTo(374.75, 921.91, 378.01, 929.36, 384.36, 934.31);
		context.bezierCurveTo(384.13, 935.72, 383.68, 938.55, 383.45, 939.96);
		context.bezierCurveTo(378.68, 935.56, 375.67, 929.59, 371.43, 924.68);
		context.bezierCurveTo(367.8, 919.27, 362.55, 914.44, 362.03, 907.55);
		context.closePath();
		context.fillStyle = fillColor190;
		context.fill();
	}


	function drawPath215() {
		//// #d6bfedff
		//// Bezier 215 Drawing
		context.beginPath();
		context.moveTo(405.12, 907.13);
		context.bezierCurveTo(408.43, 908.29, 411.87, 909.91, 413.29, 913.37);
		context.bezierCurveTo(416.41, 919.84, 419.91, 926.76, 426.85, 929.85);
		context.bezierCurveTo(426.83, 932.71, 426.83, 935.57, 426.84, 938.44);
		context.bezierCurveTo(426.03, 938.25, 424.41, 937.88, 423.6, 937.69);
		context.bezierCurveTo(420.41, 932.2, 414.68, 928.73, 411.93, 922.97);
		context.bezierCurveTo(409.36, 917.76, 404.59, 913.44, 405.12, 907.13);
		context.closePath();
		context.fillStyle = fillColor191;
		context.fill();
	}


	function drawPath216() {
		//// #f9f3a8ff
		//// Bezier 216 Drawing
		context.beginPath();
		context.moveTo(1286.03, 938.28);
		context.bezierCurveTo(1294.16, 930.08, 1300.21, 920.01, 1308.67, 912.15);
		context.bezierCurveTo(1310.53, 913.05, 1312.47, 914, 1314.37, 914.92);
		context.lineTo(1313.91, 915.75);
		context.bezierCurveTo(1303.69, 932.96, 1291.04, 948.63, 1276.56, 962.41);
		context.bezierCurveTo(1276.23, 961.84, 1275.53, 960.69, 1275.19, 960.12);
		context.bezierCurveTo(1272.55, 962.61, 1269.88, 965.63, 1265.99, 965.81);
		context.bezierCurveTo(1266.55, 964.4, 1267.12, 963, 1267.73, 961.61);
		context.bezierCurveTo(1271.32, 958.83, 1274.65, 955.68, 1277.29, 951.96);
		context.bezierCurveTo(1280.39, 947.52, 1284.37, 943.56, 1286.03, 938.28);
		context.closePath();
		context.fillStyle = fillColor192;
		context.fill();
	}

		
	function drawPath217() {
		//// #030b05ff
		//// Bezier 217 Drawing
		context.beginPath();
		context.moveTo(1276.56, 962.41);
		context.bezierCurveTo(1291.04, 948.63, 1303.69, 932.96, 1313.91, 915.75);
		context.bezierCurveTo(1315.52, 917.03, 1317.16, 918.36, 1318.88, 919.55);
		context.bezierCurveTo(1305.68, 942.48, 1288.28, 963.01, 1267.91, 979.88);
		context.bezierCurveTo(1249.27, 996.31, 1227.93, 1009.29, 1206.21, 1021.19);
		context.bezierCurveTo(1205.88, 1021.35, 1205.2, 1021.65, 1204.87, 1021.8);
		context.bezierCurveTo(1196.21, 1026.09, 1187.25, 1029.77, 1178.79, 1034.44);
		context.lineTo(1178.76, 1034.45);
		context.bezierCurveTo(1167.41, 1038.05, 1156.72, 1043.41, 1145.27, 1046.69);
		context.bezierCurveTo(1134.8, 1050.6, 1124.03, 1053.67, 1113.25, 1056.6);
		context.bezierCurveTo(1101.43, 1060.15, 1089.24, 1062.17, 1077.17, 1064.65);
		context.bezierCurveTo(1076.35, 1063.44, 1075.59, 1062.25, 1074.83, 1061.05);
		context.bezierCurveTo(1089.31, 1056.45, 1104.01, 1052.57, 1118.59, 1048.28);
		context.bezierCurveTo(1141.63, 1041.33, 1164.27, 1033.09, 1186.17, 1023.16);
		context.bezierCurveTo(1195.05, 1018.97, 1203.83, 1014.52, 1212.35, 1009.63);
		context.lineTo(1212.73, 1009.39);
		context.bezierCurveTo(1219.35, 1005.99, 1225.75, 1002.19, 1231.85, 997.92);
		context.lineTo(1232.47, 997.55);
		context.bezierCurveTo(1248.32, 987.37, 1263.2, 975.69, 1276.56, 962.41);
		context.closePath();
		context.fillStyle = fillColor193;
		context.fill();
	}



	function drawPath218() {
		//// #b5eee6ff
		//// Bezier 218 Drawing
		context.beginPath();
		context.moveTo(1323.37, 917.97);
		context.bezierCurveTo(1324.76, 917.63, 1326.17, 917.28, 1327.61, 916.95);
		context.bezierCurveTo(1327.88, 919.57, 1328.16, 922.23, 1328.25, 924.89);
		context.bezierCurveTo(1323.89, 926.99, 1322.21, 931.75, 1318.87, 934.92);
		context.bezierCurveTo(1313.31, 940.03, 1308.88, 946.21, 1302.89, 950.88);
		context.bezierCurveTo(1296.23, 957.97, 1289.81, 965.31, 1282.89, 972.17);
		context.bezierCurveTo(1273.69, 979.89, 1265.97, 989.39, 1255.68, 995.76);
		context.bezierCurveTo(1255.63, 996.19, 1255.51, 997.07, 1255.45, 997.49);
		context.bezierCurveTo(1254.96, 997.61, 1253.95, 997.84, 1253.45, 997.96);
		context.bezierCurveTo(1252.39, 1000.09, 1250.81, 1001.91, 1248.52, 1002.75);
		context.bezierCurveTo(1242.56, 1005.16, 1237.92, 1010.96, 1230.97, 1010.41);
		context.bezierCurveTo(1231.03, 1011.23, 1231.11, 1012.05, 1231.2, 1012.89);
		context.bezierCurveTo(1224.89, 1016.55, 1216.45, 1015.13, 1211.35, 1020.85);
		context.bezierCurveTo(1209.61, 1020.93, 1207.91, 1021.05, 1206.21, 1021.19);
		context.bezierCurveTo(1227.93, 1009.29, 1249.27, 996.31, 1267.91, 979.88);
		context.bezierCurveTo(1288.28, 963.01, 1305.68, 942.48, 1318.88, 919.55);
		context.lineTo(1319, 919.63);
		context.bezierCurveTo(1319.73, 919.99, 1321.2, 920.72, 1321.92, 921.08);
		context.bezierCurveTo(1322.28, 920.31, 1323.01, 918.75, 1323.37, 917.97);
		context.closePath();
		context.fillStyle = fillColor194;
		context.fill();
	}


	function drawPath219() {
		//// #030406ff
		//// Bezier 219 Drawing
		context.beginPath();
		context.moveTo(1327.61, 916.95);
		context.bezierCurveTo(1328.57, 918.32, 1329.59, 919.72, 1330.6, 921.12);
		context.bezierCurveTo(1331.28, 920.91, 1332.65, 920.47, 1333.33, 920.24);
		context.lineTo(1333.33, 1020.12);
		context.bezierCurveTo(1331.19, 1021.15, 1331.19, 1021.93, 1333.33, 1022.47);
		context.lineTo(1333.33, 1030.28);
		context.bezierCurveTo(1330.8, 1035.83, 1330.92, 1042.05, 1329.87, 1047.97);
		context.bezierCurveTo(1327.59, 1061.99, 1326.83, 1076.28, 1323.48, 1090.12);
		context.bezierCurveTo(1322.16, 1091.31, 1320.85, 1092.51, 1319.59, 1093.73);
		context.bezierCurveTo(1320.8, 1094.04, 1322.07, 1093.67, 1323.29, 1094.03);
		context.bezierCurveTo(1319.97, 1115.55, 1315.71, 1136.91, 1312.07, 1158.37);
		context.bezierCurveTo(1311.51, 1158.19, 1310.36, 1157.81, 1309.8, 1157.63);
		context.bezierCurveTo(1312.75, 1158.65, 1311.2, 1161.76, 1311.13, 1163.91);
		context.bezierCurveTo(1309.33, 1172.33, 1307.07, 1180.65, 1305.77, 1189.19);
		context.bezierCurveTo(1300.87, 1209.17, 1297.29, 1229.49, 1292.04, 1249.41);
		context.bezierCurveTo(1285.48, 1275.41, 1278.25, 1301.24, 1269.23, 1326.49);
		context.bezierCurveTo(1270.21, 1328.67, 1270.87, 1330.96, 1271.32, 1333.33);
		context.lineTo(1254.29, 1333.33);
		context.bezierCurveTo(1256.13, 1329.84, 1257.55, 1326.15, 1258.91, 1322.44);
		context.bezierCurveTo(1260.37, 1321.45, 1262.15, 1320.63, 1262.36, 1318.64);
		context.bezierCurveTo(1266.95, 1304.21, 1271.25, 1289.71, 1275.33, 1275.12);
		context.bezierCurveTo(1275.76, 1275.04, 1276.61, 1274.85, 1277.03, 1274.76);
		context.bezierCurveTo(1276.59, 1274.59, 1275.71, 1274.23, 1275.27, 1274.05);
		context.bezierCurveTo(1279.4, 1260.71, 1282.56, 1247.07, 1285.64, 1233.45);
		context.bezierCurveTo(1289.99, 1217.19, 1292.48, 1200.41, 1297.45, 1184.35);
		context.bezierCurveTo(1298.21, 1172.83, 1301.43, 1161.65, 1303.39, 1150.31);
		context.bezierCurveTo(1309.68, 1115.87, 1315.69, 1081.36, 1320.23, 1046.64);
		context.bezierCurveTo(1320.75, 1042.97, 1319.71, 1039.36, 1319.45, 1035.73);
		context.bezierCurveTo(1324.19, 1031.27, 1322.81, 1024.35, 1323.56, 1018.53);
		context.bezierCurveTo(1327.97, 987.55, 1328.63, 956.16, 1328.25, 924.89);
		context.bezierCurveTo(1328.16, 922.23, 1327.88, 919.57, 1327.61, 916.95);
		context.closePath();
		context.fillStyle = fillColor195;
		context.fill();
	}



	function drawPath220() {
		//// #dff2ffff
		//// Bezier 220 Drawing
		context.beginPath();
		context.moveTo(138.48, 928.13);
		context.bezierCurveTo(137.52, 924, 131.39, 922.29, 132.96, 917.41);
		context.bezierCurveTo(142.48, 926.32, 152.67, 934.52, 163.32, 942.04);
		context.bezierCurveTo(166.75, 944.48, 169.23, 948.11, 170.28, 952.19);
		context.bezierCurveTo(172.09, 958.84, 174.21, 965.49, 174.55, 972.43);
		context.bezierCurveTo(174.56, 973.35, 174.56, 975.2, 174.57, 976.12);
		context.bezierCurveTo(167.89, 972.41, 161.01, 968.36, 153.25, 967.59);
		context.bezierCurveTo(150.33, 967.12, 146.77, 967.27, 144.85, 964.56);
		context.bezierCurveTo(140.52, 960.12, 141.77, 953.55, 141.77, 947.96);
		context.bezierCurveTo(142.25, 941.16, 139.85, 934.68, 138.48, 928.13);
		context.closePath();
		context.fillStyle = fillColor196;
		context.fill();
	}



	function drawPath221() {
		//// #aacfecff
		//// Bezier 221 Drawing
		context.beginPath();
		context.moveTo(1253.41, 935.83);
		context.bezierCurveTo(1257.99, 932.2, 1261.21, 927.28, 1264.92, 922.84);
		context.bezierCurveTo(1264.84, 926.41, 1263.25, 929.93, 1263.53, 933.49);
		context.bezierCurveTo(1265.84, 934.08, 1268.21, 934.28, 1270.6, 934.56);
		context.bezierCurveTo(1248.56, 957.49, 1223.27, 977.51, 1195.15, 992.48);
		context.bezierCurveTo(1188.87, 995.65, 1182.37, 998.57, 1176.89, 1003.05);
		context.bezierCurveTo(1174.39, 1004.16, 1171.83, 1005.15, 1169.35, 1006.28);
		context.bezierCurveTo(1168.49, 1005.65, 1166.77, 1004.43, 1165.91, 1003.81);
		context.bezierCurveTo(1168.51, 1003.16, 1171.09, 1002.48, 1173.71, 1001.81);
		context.bezierCurveTo(1173.01, 1000.97, 1172.29, 1000.16, 1171.57, 999.4);
		context.bezierCurveTo(1166.49, 1000.39, 1161.13, 1004.35, 1156.2, 1000.72);
		context.bezierCurveTo(1163.08, 999.93, 1169.01, 996.15, 1175.61, 994.41);
		context.bezierCurveTo(1181.13, 993.28, 1185.12, 988.85, 1190.47, 987.24);
		context.bezierCurveTo(1192.81, 986.67, 1194.73, 983.16, 1197.21, 984.76);
		context.bezierCurveTo(1199.97, 979.29, 1207.19, 978.12, 1211.53, 973.99);
		context.bezierCurveTo(1212.4, 973.8, 1213.29, 973.64, 1214.19, 973.49);
		context.bezierCurveTo(1216.27, 971.05, 1218.64, 968.75, 1221.81, 967.88);
		context.bezierCurveTo(1223.52, 966.04, 1225.4, 964.36, 1227.47, 962.92);
		context.bezierCurveTo(1226.81, 962.84, 1225.52, 962.68, 1224.87, 962.6);
		context.bezierCurveTo(1229.76, 958.52, 1234.75, 954.53, 1239.41, 950.19);
		context.bezierCurveTo(1244.32, 945.63, 1248.15, 940.01, 1253.41, 935.83);
		context.closePath();
		context.fillStyle = fillColor197;
		context.fill();
	}



	function drawPath222() {
		//// #fdfeffff
		//// Bezier 222 Drawing
		context.beginPath();
		context.moveTo(1318.87, 934.92);
		context.bezierCurveTo(1322.21, 931.75, 1323.89, 926.99, 1328.25, 924.89);
		context.bezierCurveTo(1328.63, 956.16, 1327.97, 987.55, 1323.56, 1018.53);
		context.bezierCurveTo(1322.81, 1024.35, 1324.19, 1031.27, 1319.45, 1035.73);
		context.bezierCurveTo(1319.71, 1039.36, 1320.75, 1042.97, 1320.23, 1046.64);
		context.bezierCurveTo(1315.69, 1081.36, 1309.68, 1115.87, 1303.39, 1150.31);
		context.bezierCurveTo(1301.43, 1161.65, 1298.21, 1172.83, 1297.45, 1184.35);
		context.bezierCurveTo(1292.48, 1200.41, 1289.99, 1217.19, 1285.64, 1233.45);
		context.bezierCurveTo(1284.33, 1233.67, 1283.05, 1233.89, 1281.79, 1234.13);
		context.bezierCurveTo(1281.33, 1232.48, 1280.91, 1230.83, 1280.48, 1229.21);
		context.bezierCurveTo(1280.19, 1235.05, 1280.45, 1240.92, 1279.85, 1246.75);
		context.bezierCurveTo(1279.79, 1249.8, 1276.89, 1251.52, 1275.08, 1253.59);
		context.bezierCurveTo(1273.96, 1252.56, 1272.87, 1251.55, 1271.79, 1250.55);
		context.bezierCurveTo(1270.68, 1253.35, 1269.72, 1256.27, 1267.99, 1258.79);
		context.bezierCurveTo(1266.36, 1258.77, 1264.76, 1258.61, 1263.2, 1258.29);
		context.bezierCurveTo(1262.32, 1254.27, 1263.53, 1249.13, 1259.21, 1246.81);
		context.bezierCurveTo(1259.32, 1240.67, 1256.84, 1235.09, 1252.53, 1230.79);
		context.bezierCurveTo(1247.97, 1233.55, 1242.63, 1233.76, 1237.47, 1233.29);
		context.bezierCurveTo(1237.28, 1227.63, 1237.17, 1221.96, 1237.17, 1216.31);
		context.bezierCurveTo(1208.83, 1215.61, 1180.45, 1216.56, 1152.11, 1215.88);
		context.bezierCurveTo(1152.01, 1209.76, 1151.95, 1203.64, 1151.8, 1197.53);
		context.bezierCurveTo(1144.45, 1196.93, 1136.76, 1198.64, 1129.76, 1195.72);
		context.bezierCurveTo(1123.69, 1193.52, 1117.16, 1195.49, 1110.95, 1194.36);
		context.bezierCurveTo(1109.93, 1193.29, 1109, 1192.2, 1108.13, 1191.07);
		context.bezierCurveTo(1101.48, 1190.52, 1094.81, 1190.75, 1088.17, 1190.49);
		context.bezierCurveTo(1087.99, 1184.83, 1087.88, 1179.16, 1087.84, 1173.51);
		context.bezierCurveTo(1073.19, 1173.15, 1058.52, 1173.8, 1043.87, 1173.11);
		context.bezierCurveTo(1043.84, 1166.09, 1045.31, 1159.2, 1045.32, 1152.21);
		context.bezierCurveTo(1031.23, 1151.97, 1017.11, 1151.96, 1003.01, 1152.2);
		context.bezierCurveTo(1002.79, 1155.59, 1002.56, 1159, 1002.35, 1162.41);
		context.bezierCurveTo(995.43, 1162.81, 988.49, 1162.81, 981.57, 1162.44);
		context.bezierCurveTo(981.39, 1159.05, 981.2, 1155.68, 981.04, 1152.31);
		context.bezierCurveTo(977.61, 1152.08, 974.2, 1151.87, 970.8, 1151.67);
		context.bezierCurveTo(970.45, 1144.73, 970.44, 1137.8, 970.8, 1130.89);
		context.bezierCurveTo(976.64, 1130.8, 982.48, 1130.57, 988.31, 1130.07);
		context.bezierCurveTo(984.03, 1129.55, 979.36, 1129.71, 975.83, 1126.83);
		context.bezierCurveTo(999.43, 1124.17, 1022.77, 1119.6, 1045.76, 1113.68);
		context.bezierCurveTo(1052.64, 1112.23, 1059.45, 1110.51, 1066.31, 1108.97);
		context.bezierCurveTo(1068.63, 1108.52, 1070.71, 1107.36, 1072.68, 1106.09);
		context.bezierCurveTo(1059.37, 1105.79, 1046.12, 1107.52, 1032.84, 1107.88);
		context.bezierCurveTo(1032.2, 1107.68, 1030.95, 1107.31, 1030.32, 1107.12);
		context.bezierCurveTo(1044.27, 1103.63, 1058.09, 1099, 1070.75, 1092.07);
		context.bezierCurveTo(1073.01, 1090.92, 1074.77, 1089.04, 1076.48, 1087.2);
		context.bezierCurveTo(1091.16, 1083.01, 1105.81, 1078.68, 1120.17, 1073.48);
		context.bezierCurveTo(1137.87, 1068.09, 1154.43, 1059.6, 1170.23, 1050.09);
		context.bezierCurveTo(1170.31, 1049.12, 1170.45, 1047.19, 1170.53, 1046.23);
		context.bezierCurveTo(1143.8, 1058.04, 1116.63, 1069, 1088.6, 1077.44);
		context.bezierCurveTo(1073.09, 1082.52, 1057.39, 1086.96, 1041.48, 1090.6);
		context.bezierCurveTo(1035.11, 1091.11, 1028.77, 1093.64, 1022.36, 1092.27);
		context.bezierCurveTo(1015.89, 1091.07, 1009.36, 1090.13, 1002.79, 1089.95);
		context.bezierCurveTo(1004.79, 1089.61, 1006.8, 1089.29, 1008.83, 1089);
		context.bezierCurveTo(1019.33, 1087.2, 1029.33, 1083, 1040.04, 1082.17);
		context.bezierCurveTo(1045.27, 1082.05, 1049.53, 1078.53, 1054.65, 1077.92);
		context.bezierCurveTo(1063.36, 1076.59, 1071.51, 1073.07, 1080.07, 1071.09);
		context.bezierCurveTo(1090.96, 1068.61, 1101.51, 1064.84, 1112.17, 1061.57);
		context.bezierCurveTo(1122.43, 1057.13, 1133.35, 1054.48, 1143.63, 1050.13);
		context.bezierCurveTo(1148.37, 1047.32, 1154.24, 1047.6, 1158.85, 1044.48);
		context.bezierCurveTo(1162.75, 1041.84, 1167.52, 1041.43, 1171.88, 1040);
		context.bezierCurveTo(1174.83, 1039.15, 1176.61, 1036.45, 1178.76, 1034.45);
		context.lineTo(1178.79, 1034.44);
		context.bezierCurveTo(1181.97, 1034.63, 1185.2, 1034.47, 1188.35, 1033.8);
		context.bezierCurveTo(1188.08, 1033.08, 1187.52, 1031.64, 1187.24, 1030.92);
		context.bezierCurveTo(1188.17, 1031.04, 1189.12, 1031.17, 1190.09, 1031.32);
		context.bezierCurveTo(1195.12, 1027.97, 1202.45, 1029.83, 1206.03, 1024.11);
		context.bezierCurveTo(1216.09, 1024.51, 1223.88, 1017.49, 1232.84, 1014.11);
		context.bezierCurveTo(1238.33, 1010.8, 1246.11, 1009.48, 1248.52, 1002.75);
		context.bezierCurveTo(1250.81, 1001.91, 1252.39, 1000.09, 1253.45, 997.96);
		context.bezierCurveTo(1253.95, 997.84, 1254.96, 997.61, 1255.45, 997.49);
		context.bezierCurveTo(1255.51, 997.07, 1255.63, 996.19, 1255.68, 995.76);
		context.bezierCurveTo(1265.97, 989.39, 1273.69, 979.89, 1282.89, 972.17);
		context.bezierCurveTo(1289.81, 965.31, 1296.23, 957.97, 1302.89, 950.88);
		context.bezierCurveTo(1308.88, 946.21, 1313.31, 940.03, 1318.87, 934.92);
		context.closePath();
		context.fillStyle = fillColor198;
		context.fill();
	}



	function drawPath223() {
		//// #bec7f5ff
		//// Bezier 223 Drawing
		context.beginPath();
		context.moveTo(426.85, 929.85);
		context.bezierCurveTo(429.17, 931.12, 431.88, 932.12, 433.29, 934.55);
		context.bezierCurveTo(436.48, 939.76, 441.37, 943.6, 444.6, 948.79);
		context.bezierCurveTo(446.72, 952.19, 451.36, 952.36, 453.96, 955.23);
		context.bezierCurveTo(459.85, 962.76, 466.43, 970.83, 475.96, 973.64);
		context.bezierCurveTo(479.53, 974.68, 479.2, 979.19, 480.32, 982.01);
		context.bezierCurveTo(479.59, 981.89, 478.13, 981.63, 477.41, 981.49);
		context.bezierCurveTo(469.88, 974.15, 460.28, 969.2, 453.51, 961.01);
		context.bezierCurveTo(451.88, 960.52, 450.27, 960.04, 448.65, 959.57);
		context.bezierCurveTo(448.28, 958.84, 447.52, 957.39, 447.13, 956.65);
		context.bezierCurveTo(444.37, 955.27, 441.03, 954.32, 439.49, 951.4);
		context.bezierCurveTo(436.13, 946.43, 432.92, 940.4, 426.84, 938.44);
		context.bezierCurveTo(426.83, 935.57, 426.83, 932.71, 426.85, 929.85);
		context.closePath();
		context.fillStyle = fillColor199;
		context.fill();
	}



	function drawPath224() {
		//// #abf1e5ff
		//// Bezier 224 Drawing
		context.beginPath();
		context.moveTo(384.36, 934.31);
		context.bezierCurveTo(390.75, 939.64, 394.08, 947.57, 400.29, 953.08);
		context.bezierCurveTo(405.89, 958.21, 409.93, 964.85, 416.11, 969.39);
		context.bezierCurveTo(426.57, 978.16, 434.39, 991.01, 448.01, 995.27);
		context.bezierCurveTo(450.19, 997.31, 452.24, 999.45, 454.32, 1001.59);
		context.bezierCurveTo(463.17, 1001.77, 467.81, 1010.08, 475.23, 1013.44);
		context.bezierCurveTo(473.88, 1014.15, 472.53, 1014.85, 471.17, 1015.55);
		context.bezierCurveTo(470.63, 1015.77, 469.55, 1016.23, 469.01, 1016.45);
		context.bezierCurveTo(468.13, 1016.8, 467.25, 1017.16, 466.37, 1017.53);
		context.bezierCurveTo(461.97, 1013.85, 457, 1010.96, 452.65, 1007.21);
		context.bezierCurveTo(449.84, 1004.88, 447.19, 1002.27, 443.85, 1000.71);
		context.bezierCurveTo(436.36, 994.19, 427.87, 988.88, 420.93, 981.71);
		context.bezierCurveTo(412.49, 975, 406.92, 965.49, 398.35, 958.93);
		context.bezierCurveTo(393.19, 953.05, 387.28, 947.72, 383.07, 941.08);
		context.bezierCurveTo(383.17, 940.8, 383.36, 940.24, 383.45, 939.96);
		context.bezierCurveTo(383.68, 938.55, 384.13, 935.72, 384.36, 934.31);
		context.closePath();
		context.fillStyle = fillColor200;
		context.fill();
	}



	function drawPath225() {
		//// #fff5deff
		//// Bezier 225 Drawing
		context.beginPath();
		context.moveTo(1271.45, 952.71);
		context.bezierCurveTo(1276.61, 948.19, 1280.05, 941.91, 1286.03, 938.28);
		context.bezierCurveTo(1284.37, 943.56, 1280.39, 947.52, 1277.29, 951.96);
		context.bezierCurveTo(1274.65, 955.68, 1271.32, 958.83, 1267.73, 961.61);
		context.bezierCurveTo(1267.12, 963, 1266.55, 964.4, 1265.99, 965.81);
		context.bezierCurveTo(1261.95, 965.99, 1258.71, 968.43, 1257.41, 972.31);
		context.bezierCurveTo(1253.93, 974.39, 1250.48, 976.6, 1247.75, 979.63);
		context.bezierCurveTo(1242.39, 985.64, 1235.05, 989.27, 1229.25, 994.79);
		context.bezierCurveTo(1230.31, 995.69, 1231.37, 996.61, 1232.47, 997.55);
		context.lineTo(1231.85, 997.92);
		context.bezierCurveTo(1229, 997.33, 1226.13, 997.07, 1223.29, 997.63);
		context.bezierCurveTo(1223.33, 998.81, 1223.39, 1000.03, 1223.47, 1001.24);
		context.bezierCurveTo(1220.67, 1001.88, 1217.88, 1002.55, 1215.11, 1003.2);
		context.bezierCurveTo(1215.59, 1003.51, 1216.55, 1004.12, 1217.03, 1004.43);
		context.bezierCurveTo(1215.6, 1006.09, 1214.2, 1007.76, 1212.73, 1009.39);
		context.lineTo(1212.35, 1009.63);
		context.bezierCurveTo(1210.93, 1008.97, 1209.55, 1008.33, 1208.16, 1007.71);
		context.bezierCurveTo(1206.12, 1010.85, 1203.53, 1013.65, 1199.96, 1015.01);
		context.bezierCurveTo(1201.16, 1013.49, 1202.4, 1011.99, 1203.65, 1010.51);
		context.bezierCurveTo(1193.19, 1011.03, 1184.79, 1018.59, 1174.41, 1019.44);
		context.lineTo(1172.57, 1019.61);
		context.bezierCurveTo(1173.17, 1018.99, 1174.36, 1017.76, 1174.96, 1017.13);
		context.bezierCurveTo(1192, 1009.63, 1209.2, 1002.37, 1225.55, 993.39);
		context.bezierCurveTo(1242.59, 981.89, 1256.32, 966.45, 1271.45, 952.71);
		context.closePath();
		context.fillStyle = fillColor201;
		context.fill();
	}



	function drawPath226() {
		//// #e3fabaff
		//// Bezier 226 Drawing
		context.beginPath();
		context.moveTo(404.96, 952.08);
		context.bezierCurveTo(405.93, 951.56, 407.85, 950.53, 408.81, 950.01);
		context.bezierCurveTo(426.07, 969.69, 445.43, 988.16, 468.81, 1000.36);
		context.bezierCurveTo(467.88, 1000.76, 466, 1001.55, 465.07, 1001.95);
		context.bezierCurveTo(469.81, 1005.91, 476.41, 1006.61, 480.92, 1010.95);
		context.bezierCurveTo(486.73, 1016.52, 495.69, 1017.09, 500.88, 1023.47);
		context.bezierCurveTo(497.55, 1023.61, 494.21, 1023.73, 490.89, 1023.84);
		context.lineTo(490.37, 1022.96);
		context.bezierCurveTo(486.47, 1018.28, 480.32, 1016.48, 475.23, 1013.44);
		context.bezierCurveTo(467.81, 1010.08, 463.17, 1001.77, 454.32, 1001.59);
		context.bezierCurveTo(452.24, 999.45, 450.19, 997.31, 448.01, 995.27);
		context.bezierCurveTo(443.96, 990.97, 438.55, 988.39, 434.16, 984.55);
		context.bezierCurveTo(429.44, 978.69, 424.52, 972.99, 419.27, 967.61);
		context.bezierCurveTo(413.61, 963.36, 407.76, 958.81, 404.96, 952.08);
		context.closePath();
		context.fillStyle = fillColor202;
		context.fill();
	}



	function drawPath227() {
		//// #f4c7c0ff
		//// Bezier 227 Drawing
		context.beginPath();
		context.moveTo(424.2, 951.56);
		context.bezierCurveTo(429.92, 950.95, 431.73, 956.35, 434.6, 960);
		context.bezierCurveTo(437.84, 963.08, 441.85, 965.27, 444.91, 968.6);
		context.bezierCurveTo(447.91, 971.85, 452.61, 972.93, 455.24, 976.61);
		context.bezierCurveTo(459.72, 981.47, 464.97, 986.77, 472, 987.12);
		context.bezierCurveTo(476.48, 987.61, 476.03, 994.4, 480.24, 995.64);
		context.bezierCurveTo(484.29, 997.17, 489.19, 997.57, 491.59, 1001.73);
		context.bezierCurveTo(497.08, 1003.41, 501.69, 1006.97, 507.12, 1008.83);
		context.bezierCurveTo(511.49, 1010.35, 514.79, 1013.92, 519.19, 1015.41);
		context.bezierCurveTo(522.49, 1016.47, 525.44, 1018.31, 528.05, 1020.57);
		context.bezierCurveTo(535, 1019.2, 540.28, 1025.03, 547.12, 1024.72);
		context.bezierCurveTo(547.21, 1025.21, 547.4, 1026.19, 547.49, 1026.68);
		context.bezierCurveTo(552.03, 1027.44, 556.61, 1027.83, 561.16, 1028.55);
		context.bezierCurveTo(565.91, 1029.29, 570, 1032, 574.53, 1033.44);
		context.bezierCurveTo(578.59, 1034.71, 583.03, 1034.35, 587, 1035.93);
		context.bezierCurveTo(596.37, 1040.25, 605.81, 1044.73, 616.03, 1046.67);
		context.bezierCurveTo(627.28, 1048.99, 637.84, 1053.77, 649.17, 1055.84);
		context.bezierCurveTo(661.49, 1059.67, 674.47, 1060.21, 687.19, 1061.91);
		context.bezierCurveTo(692.05, 1062.63, 697.87, 1062.44, 701.09, 1066.89);
		context.bezierCurveTo(691.65, 1066.92, 682.03, 1067.2, 672.88, 1064.47);
		context.bezierCurveTo(667.01, 1062.65, 660.8, 1062.45, 654.89, 1060.79);
		context.bezierCurveTo(643.48, 1057.13, 631.63, 1055.13, 620.25, 1051.32);
		context.bezierCurveTo(611.09, 1049.89, 602.81, 1045.56, 593.89, 1043.28);
		context.bezierCurveTo(586.76, 1040.97, 579.8, 1038.01, 572.36, 1036.73);
		context.bezierCurveTo(563.85, 1033.47, 554.16, 1027.4, 545.09, 1032.27);
		context.bezierCurveTo(537.91, 1029.15, 531.2, 1025.12, 524.12, 1021.8);
		context.bezierCurveTo(518.21, 1018.36, 511.69, 1016.16, 505.72, 1012.84);
		context.bezierCurveTo(496.23, 1007.71, 486.84, 1002.37, 477.47, 997.03);
		context.bezierCurveTo(468.11, 990.43, 458.49, 984.16, 449.43, 977.13);
		context.bezierCurveTo(444.92, 973.73, 442.29, 968.43, 437.53, 965.32);
		context.bezierCurveTo(432.61, 962, 427.81, 958.25, 425.05, 952.87);
		context.lineTo(424.2, 951.56);
		context.closePath();
		context.fillStyle = fillColor203;
		context.fill();
	}


	function drawPath228() {

		//// #fdeeb9ff
		//// Bezier 228 Drawing
		context.beginPath();
		context.moveTo(423.2, 954.83);
		context.bezierCurveTo(423.67, 954.35, 424.59, 953.36, 425.05, 952.87);
		context.bezierCurveTo(427.81, 958.25, 432.61, 962, 437.53, 965.32);
		context.bezierCurveTo(442.29, 968.43, 444.92, 973.73, 449.43, 977.13);
		context.bezierCurveTo(458.49, 984.16, 468.11, 990.43, 477.47, 997.03);
		context.bezierCurveTo(486.84, 1002.37, 496.23, 1007.71, 505.72, 1012.84);
		context.bezierCurveTo(511.69, 1016.16, 518.21, 1018.36, 524.12, 1021.8);
		context.bezierCurveTo(524.76, 1023.47, 524.68, 1025.79, 526.57, 1026.71);
		context.bezierCurveTo(531.01, 1029.79, 535.77, 1032.4, 540.51, 1035.03);
		context.bezierCurveTo(540.25, 1035.68, 539.76, 1037, 539.52, 1037.65);
		context.bezierCurveTo(535.17, 1035.15, 530.68, 1032.96, 526.15, 1030.87);
		context.bezierCurveTo(522.19, 1029.15, 521.57, 1024.04, 518.09, 1021.77);
		context.bezierCurveTo(512.8, 1018.72, 506.21, 1018.55, 501.31, 1014.75);
		context.bezierCurveTo(494.71, 1009.48, 487.07, 1005.75, 479.65, 1001.77);
		context.bezierCurveTo(479.48, 1001.39, 479.13, 1000.61, 478.97, 1000.24);
		context.bezierCurveTo(477.37, 1000.63, 475.77, 1001.01, 474.17, 1001.39);
		context.bezierCurveTo(468.33, 999.73, 464.21, 994.77, 459.11, 991.71);
		context.bezierCurveTo(446.05, 980.95, 433.07, 969.93, 421.83, 957.23);
		context.bezierCurveTo(422.61, 957.2, 424.17, 957.15, 424.95, 957.13);
		context.bezierCurveTo(424.36, 956.35, 423.77, 955.59, 423.2, 954.83);
		context.closePath();
		context.fillStyle = fillColor204;
		context.fill();
	}



	function drawPath229() {
		//// #03050dff
		//// Bezier 229 Drawing
		context.beginPath();
		context.moveTo(239.32, 960.17);
		context.bezierCurveTo(239.84, 960.33, 240.89, 960.65, 241.41, 960.81);
		context.bezierCurveTo(244.16, 967.28, 242.67, 974.37, 242.28, 981.13);
		context.bezierCurveTo(241.93, 980.87, 241.24, 980.35, 240.89, 980.08);
		context.bezierCurveTo(241.63, 981.71, 241.91, 983.43, 241.72, 985.21);
		context.bezierCurveTo(236.28, 1047.45, 235.04, 1110.04, 237.39, 1172.48);
		context.bezierCurveTo(239.24, 1222.57, 244.08, 1272.51, 249.89, 1322.28);
		context.bezierCurveTo(251.68, 1322.17, 253.47, 1322.08, 255.25, 1322.01);
		context.bezierCurveTo(255.68, 1325.79, 256.2, 1329.55, 256.67, 1333.33);
		context.lineTo(245.89, 1333.33);
		context.bezierCurveTo(242.79, 1332.43, 241.17, 1329.79, 240.31, 1326.85);
		context.bezierCurveTo(241.16, 1327.11, 242.84, 1327.61, 243.69, 1327.88);
		context.bezierCurveTo(240.71, 1326.05, 242.11, 1324.08, 244.29, 1322.35);
		context.bezierCurveTo(242.01, 1304.12, 239.48, 1285.92, 237.8, 1267.63);
		context.bezierCurveTo(231.01, 1204.29, 228.43, 1140.56, 229.08, 1076.88);
		context.bezierCurveTo(229.93, 1063.57, 229.57, 1050.23, 230.39, 1036.91);
		context.bezierCurveTo(231.31, 1020.64, 231.6, 1004.31, 232.88, 988.05);
		context.bezierCurveTo(233.15, 980.03, 235.03, 971.99, 233.89, 963.97);
		context.bezierCurveTo(236.52, 972.96, 234.19, 982.51, 235.11, 991.73);
		context.bezierCurveTo(236.17, 991.23, 237.24, 990.72, 238.31, 990.24);
		context.bezierCurveTo(236.89, 981.55, 239.17, 972.88, 238.56, 964.21);
		context.bezierCurveTo(238.76, 963.79, 239.19, 962.95, 239.4, 962.52);
		context.bezierCurveTo(239.37, 961.93, 239.35, 960.76, 239.32, 960.17);
		context.closePath();
		context.fillStyle = fillColor205;
		context.fill();
	}

	
	function drawPath230() {
		//// #f9f3bbff
		//// Bezier 230 Drawing
		context.beginPath();
		context.moveTo(1275.19, 960.12);
		context.bezierCurveTo(1275.53, 960.69, 1276.23, 961.84, 1276.56, 962.41);
		context.bezierCurveTo(1263.2, 975.69, 1248.32, 987.37, 1232.47, 997.55);
		context.bezierCurveTo(1231.37, 996.61, 1230.31, 995.69, 1229.25, 994.79);
		context.bezierCurveTo(1235.05, 989.27, 1242.39, 985.64, 1247.75, 979.63);
		context.bezierCurveTo(1250.48, 976.6, 1253.93, 974.39, 1257.41, 972.31);
		context.bezierCurveTo(1258.71, 968.43, 1261.95, 965.99, 1265.99, 965.81);
		context.bezierCurveTo(1269.88, 965.63, 1272.55, 962.61, 1275.19, 960.12);
		context.closePath();
		context.fillStyle = fillColor206;
		context.fill();
	}



	function drawPath231() {
		//// #000b26ff
		//// Bezier 231 Drawing
		context.beginPath();
		context.moveTo(477.48, 964.48);
		context.bezierCurveTo(480.04, 964.83, 482.56, 965.65, 484.55, 967.39);
		context.bezierCurveTo(490.88, 972.43, 497.61, 976.95, 504.28, 981.55);
		context.bezierCurveTo(511.19, 986.56, 518.56, 990.89, 526, 995.07);
		context.bezierCurveTo(540.4, 1003.24, 555.39, 1010.36, 570.76, 1016.51);
		context.bezierCurveTo(569.41, 1017.77, 568.09, 1019.07, 566.77, 1020.36);
		context.bezierCurveTo(565.09, 1019.61, 563.4, 1018.88, 561.73, 1018.17);
		context.bezierCurveTo(558.21, 1016.55, 554.67, 1015.03, 551.17, 1013.39);
		context.bezierCurveTo(527.24, 1002.15, 504.43, 988.39, 483.95, 971.63);
		context.bezierCurveTo(481.36, 969.65, 479.16, 967.25, 477.48, 964.48);
		context.closePath();
		context.fillStyle = fillColor207;
		context.fill();
	}



	function drawPath232() {
		//// #93bfd9ff
		//// Bezier 232 Drawing
		context.beginPath();
		context.moveTo(176.53, 969.68);
		context.bezierCurveTo(178.35, 971, 180.17, 972.32, 181.99, 973.67);
		context.bezierCurveTo(182.76, 978.27, 183.43, 982.91, 184.55, 987.45);
		context.bezierCurveTo(185.03, 992.21, 185.47, 996.99, 185.77, 1001.77);
		context.bezierCurveTo(183.65, 1005.28, 183.85, 1009.4, 183.93, 1013.33);
		context.bezierCurveTo(184.13, 1020.41, 182.88, 1027.41, 182.17, 1034.44);
		context.bezierCurveTo(181.61, 1032.19, 181.03, 1029.95, 180.57, 1027.68);
		context.bezierCurveTo(179.65, 1008.8, 177.17, 990.05, 175.79, 971.21);
		context.bezierCurveTo(175.97, 970.83, 176.35, 970.07, 176.53, 969.68);
		context.closePath();
		context.fillStyle = fillColor208;
		context.fill();
	}



	function drawPath233() {
		//// #b0cbf0ff
		//// Bezier 233 Drawing
		context.beginPath();
		context.moveTo(483.95, 971.63);
		context.bezierCurveTo(504.43, 988.39, 527.24, 1002.15, 551.17, 1013.39);
		context.bezierCurveTo(549.37, 1013.92, 547.57, 1014.45, 545.79, 1015.01);
		context.bezierCurveTo(546.51, 1015.89, 547.24, 1016.77, 547.97, 1017.68);
		context.bezierCurveTo(535.27, 1013.77, 523, 1008.31, 511.73, 1001.24);
		context.bezierCurveTo(504.29, 996.68, 495.85, 993.68, 489.24, 987.87);
		context.bezierCurveTo(486.21, 986.24, 483.32, 984.39, 480.79, 982.07);
		context.bezierCurveTo(483.17, 981.44, 485.55, 980.77, 487.92, 980.09);
		context.bezierCurveTo(486.41, 978.55, 484.92, 977, 483.43, 975.48);
		context.bezierCurveTo(483.59, 974.17, 483.76, 972.89, 483.95, 971.63);
		context.closePath();
		context.fillStyle = fillColor209;
		context.fill();
	}



	function drawPath234() {
		//// #9cb8d8ff
		//// Bezier 234 Drawing
		context.beginPath();
		context.moveTo(532.87, 979.23);
		context.bezierCurveTo(534.6, 978.83, 536.36, 978.48, 538.11, 978.12);
		context.bezierCurveTo(540.64, 980.23, 543.37, 982.08, 546.23, 983.75);
		context.bezierCurveTo(544.55, 983.99, 542.87, 984.23, 541.2, 984.49);
		context.bezierCurveTo(538.33, 982.88, 535.55, 981.12, 532.87, 979.23);
		context.closePath();
		context.fillStyle = fillColor210;
		context.fill();
	}



	function drawPath235() {
		//// #c9cce5ff
		//// Bezier 235 Drawing
		context.beginPath();
		context.moveTo(575.68, 978.32);
		context.bezierCurveTo(606.29, 991.45, 638.04, 1002.01, 670.55, 1009.37);
		context.bezierCurveTo(686.92, 1014.43, 704.11, 1015.59, 720.76, 1019.43);
		context.bezierCurveTo(738.64, 1022.21, 756.6, 1024.44, 774.59, 1026.47);
		context.bezierCurveTo(790.16, 1027.87, 805.65, 1030.17, 821.29, 1030.49);
		context.bezierCurveTo(832.21, 1031.68, 843.31, 1030.77, 854.11, 1033.04);
		context.bezierCurveTo(847.39, 1035.51, 840.29, 1033.64, 833.39, 1033.55);
		context.bezierCurveTo(826.8, 1033.23, 820.2, 1033.83, 813.63, 1033.24);
		context.bezierCurveTo(809.52, 1032.67, 805.41, 1032.04, 801.27, 1031.99);
		context.bezierCurveTo(786.05, 1032.05, 771.19, 1027.88, 755.97, 1028.08);
		context.bezierCurveTo(747.31, 1028.25, 738.95, 1026, 730.59, 1024.12);
		context.bezierCurveTo(719.97, 1023.39, 709.04, 1024.47, 698.73, 1021.24);
		context.bezierCurveTo(694.85, 1020, 691.37, 1017.72, 687.44, 1016.68);
		context.bezierCurveTo(682.89, 1016.32, 678.09, 1017.61, 673.84, 1015.36);
		context.bezierCurveTo(661.88, 1009.93, 648.59, 1009.39, 636, 1006.41);
		context.bezierCurveTo(630.84, 1003.76, 625.37, 1001.85, 619.47, 1002.07);
		context.bezierCurveTo(619.07, 1001.39, 618.28, 1000.03, 617.88, 999.35);
		context.bezierCurveTo(610.84, 997.24, 604.11, 994.15, 596.91, 992.55);
		context.bezierCurveTo(591.53, 991.4, 586.47, 989.25, 581.56, 986.81);
		context.bezierCurveTo(577.52, 985.72, 575.57, 982.4, 575.68, 978.32);
		context.closePath();
		context.fillStyle = fillColor211;
		context.fill();
	}



	function drawPath236() {
		//// #b4c8eeff
		//// Bezier 236 Drawing
		context.beginPath();
		context.moveTo(504.28, 981.55);
		context.bezierCurveTo(507.88, 981.36, 511.52, 981.4, 515.13, 981.72);
		context.bezierCurveTo(517.87, 987.01, 525.15, 988.75, 526, 995.07);
		context.bezierCurveTo(518.56, 990.89, 511.19, 986.56, 504.28, 981.55);
		context.closePath();
		context.fillStyle = fillColor212;
		context.fill();
	}



	function drawPath237() {
		//// #eaf7feff
		//// Bezier 237 Drawing
		context.beginPath();
		context.moveTo(225.88, 982.93);
		context.bezierCurveTo(226.69, 984.85, 227.51, 986.8, 228.32, 988.76);
		context.bezierCurveTo(229.84, 988.51, 231.36, 988.27, 232.88, 988.05);
		context.bezierCurveTo(231.6, 1004.31, 231.31, 1020.64, 230.39, 1036.91);
		context.bezierCurveTo(229.41, 1033.97, 228.32, 1031.08, 227.24, 1028.19);
		context.bezierCurveTo(226.81, 1029.07, 226.39, 1029.95, 225.97, 1030.85);
		context.bezierCurveTo(226.43, 1032.73, 226.85, 1034.63, 227.25, 1036.55);
		context.bezierCurveTo(225.17, 1034.13, 223.97, 1031.16, 223.09, 1028.15);
		context.bezierCurveTo(220.05, 1029.15, 217, 1030.07, 213.92, 1030.91);
		context.bezierCurveTo(213.57, 1028.64, 213.23, 1026.4, 212.89, 1024.16);
		context.bezierCurveTo(205.64, 1023.87, 198.37, 1023.96, 191.11, 1023.89);
		context.bezierCurveTo(190.76, 1020.35, 190.37, 1016.81, 190.05, 1013.28);
		context.bezierCurveTo(189.77, 1017.21, 189.04, 1021.11, 187.6, 1024.81);
		context.bezierCurveTo(187.04, 1017.12, 186.25, 1009.45, 185.77, 1001.77);
		context.bezierCurveTo(185.47, 996.99, 185.03, 992.21, 184.55, 987.45);
		context.bezierCurveTo(186.07, 990.63, 187.43, 993.91, 188.47, 997.29);
		context.bezierCurveTo(189.04, 995.55, 189.63, 993.81, 190.21, 992.09);
		context.bezierCurveTo(190.41, 994.07, 190.63, 996.05, 190.83, 998.07);
		context.bezierCurveTo(194.93, 995.44, 199.35, 993.41, 203.89, 991.69);
		context.bezierCurveTo(207.24, 990.52, 209.01, 987.08, 212.09, 985.52);
		context.bezierCurveTo(216.33, 984.84, 220.64, 985.55, 224.88, 985.89);
		context.bezierCurveTo(225.13, 985.15, 225.64, 983.67, 225.88, 982.93);
		context.closePath();
		context.fillStyle = fillColor213;
		context.fill();
	}



	function drawPath238() {
		//// #adcef7ff
		//// Bezier 238 Drawing
		context.beginPath();
		context.moveTo(553.68, 986.48);
		context.bezierCurveTo(558.71, 987.63, 562.79, 991.39, 568.01, 991.8);
		context.bezierCurveTo(570.25, 992.07, 572.52, 992.27, 574.79, 992.48);
		context.bezierCurveTo(578.43, 992.95, 582.11, 992.88, 585.77, 992.61);
		context.bezierCurveTo(585.92, 993, 586.21, 993.76, 586.36, 994.13);
		context.bezierCurveTo(602, 1003.61, 620.32, 1006.72, 637.96, 1010.37);
		context.bezierCurveTo(642.45, 1011.47, 646.69, 1013.39, 650.92, 1015.27);
		context.bezierCurveTo(652.07, 1014.71, 653.21, 1014.16, 654.37, 1013.64);
		context.bezierCurveTo(655.75, 1015.49, 657.47, 1017.17, 659.83, 1017.67);
		context.bezierCurveTo(666.77, 1019.68, 673.89, 1021.07, 680.88, 1022.97);
		context.bezierCurveTo(680.41, 1023.41, 679.47, 1024.29, 679, 1024.73);
		context.bezierCurveTo(679.83, 1025.37, 680.67, 1026.03, 681.52, 1026.68);
		context.bezierCurveTo(677.6, 1026.31, 673.67, 1026.04, 669.76, 1025.6);
		context.bezierCurveTo(650.65, 1023.36, 631.49, 1020.8, 612.95, 1015.53);
		context.bezierCurveTo(605.96, 1013.43, 599.23, 1010.57, 592.24, 1008.48);
		context.bezierCurveTo(578.49, 1002.71, 564.49, 997.41, 551.37, 990.29);
		context.bezierCurveTo(551.95, 989.33, 553.11, 987.43, 553.68, 986.48);
		context.closePath();
		context.fillStyle = fillColor214;
		context.fill();
	}



	function drawPath239() {
		//// #c2cef6ff
		//// Bezier 239 Drawing
		context.beginPath();
		context.moveTo(581.56, 986.81);
		context.bezierCurveTo(586.47, 989.25, 591.53, 991.4, 596.91, 992.55);
		context.bezierCurveTo(604.11, 994.15, 610.84, 997.24, 617.88, 999.35);
		context.bezierCurveTo(618.28, 1000.03, 619.07, 1001.39, 619.47, 1002.07);
		context.bezierCurveTo(625.37, 1001.85, 630.84, 1003.76, 636, 1006.41);
		context.bezierCurveTo(648.59, 1009.39, 661.88, 1009.93, 673.84, 1015.36);
		context.bezierCurveTo(678.09, 1017.61, 682.89, 1016.32, 687.44, 1016.68);
		context.bezierCurveTo(691.37, 1017.72, 694.85, 1020, 698.73, 1021.24);
		context.bezierCurveTo(709.04, 1024.47, 719.97, 1023.39, 730.59, 1024.12);
		context.bezierCurveTo(738.95, 1026, 747.31, 1028.25, 755.97, 1028.08);
		context.bezierCurveTo(771.19, 1027.88, 786.05, 1032.05, 801.27, 1031.99);
		context.bezierCurveTo(805.41, 1032.04, 809.52, 1032.67, 813.63, 1033.24);
		context.bezierCurveTo(813.04, 1033.71, 811.88, 1034.65, 811.29, 1035.13);
		context.bezierCurveTo(811.79, 1035.52, 812.76, 1036.29, 813.25, 1036.68);
		context.bezierCurveTo(809.39, 1039.99, 804.23, 1040.51, 799.36, 1040.96);
		context.bezierCurveTo(759.8, 1039.04, 720.37, 1034.48, 681.52, 1026.68);
		context.bezierCurveTo(680.67, 1026.03, 679.83, 1025.37, 679, 1024.73);
		context.bezierCurveTo(679.47, 1024.29, 680.41, 1023.41, 680.88, 1022.97);
		context.bezierCurveTo(673.89, 1021.07, 666.77, 1019.68, 659.83, 1017.67);
		context.bezierCurveTo(657.47, 1017.17, 655.75, 1015.49, 654.37, 1013.64);
		context.bezierCurveTo(653.21, 1014.16, 652.07, 1014.71, 650.92, 1015.27);
		context.bezierCurveTo(646.69, 1013.39, 642.45, 1011.47, 637.96, 1010.37);
		context.bezierCurveTo(620.32, 1006.72, 602, 1003.61, 586.36, 994.13);
		context.bezierCurveTo(586.21, 993.76, 585.92, 993, 585.77, 992.61);
		context.bezierCurveTo(582.11, 992.88, 578.43, 992.95, 574.79, 992.48);
		context.bezierCurveTo(576.96, 990.49, 579.23, 988.61, 581.56, 986.81);
		context.closePath();
		context.fillStyle = fillColor215;
		context.fill();
	}



	function drawPath240() {
		//// #d6d9acff
		//// Bezier 240 Drawing
		context.beginPath();
		context.moveTo(1223.29, 997.63);
		context.bezierCurveTo(1226.13, 997.07, 1229, 997.33, 1231.85, 997.92);
		context.bezierCurveTo(1225.75, 1002.19, 1219.35, 1005.99, 1212.73, 1009.39);
		context.bezierCurveTo(1214.2, 1007.76, 1215.6, 1006.09, 1217.03, 1004.43);
		context.bezierCurveTo(1216.55, 1004.12, 1215.59, 1003.51, 1215.11, 1003.2);
		context.bezierCurveTo(1217.88, 1002.55, 1220.67, 1001.88, 1223.47, 1001.24);
		context.bezierCurveTo(1223.39, 1000.03, 1223.33, 998.81, 1223.29, 997.63);
		context.closePath();
		context.fillStyle = fillColor216;
		context.fill();
	}



	function drawPath241() {
		//// #000617ff
		//// Bezier 241 Drawing
		context.beginPath();
		context.moveTo(1105.97, 1008.63);
		context.bezierCurveTo(1119.71, 1005.81, 1133.21, 1001.88, 1146.31, 996.87);
		context.bezierCurveTo(1147.37, 998.27, 1148.47, 999.67, 1149.56, 1001.08);
		context.bezierCurveTo(1146.55, 1001.88, 1143.51, 1002.59, 1140.44, 1003.03);
		context.bezierCurveTo(1134.24, 1003.09, 1128.85, 1006.27, 1123.51, 1008.99);
		context.bezierCurveTo(1117.47, 1012.15, 1110.64, 1013.09, 1104.19, 1015.03);
		context.bezierCurveTo(1097.41, 1016.99, 1090.53, 1018.56, 1083.76, 1020.55);
		context.bezierCurveTo(1073.99, 1022.52, 1064.32, 1025.04, 1054.53, 1026.89);
		context.bezierCurveTo(1019.87, 1034.96, 984.51, 1039.33, 949.2, 1043.41);
		context.bezierCurveTo(920.8, 1046.21, 892.28, 1047.61, 863.76, 1048.45);
		context.bezierCurveTo(837.68, 1049.05, 811.6, 1048.31, 785.55, 1047.12);
		context.bezierCurveTo(745.03, 1044.37, 704.48, 1039.77, 665, 1030.04);
		context.bezierCurveTo(666.59, 1028.55, 668.16, 1027.07, 669.76, 1025.6);
		context.bezierCurveTo(673.67, 1026.04, 677.6, 1026.31, 681.52, 1026.68);
		context.bezierCurveTo(720.37, 1034.48, 759.8, 1039.04, 799.36, 1040.96);
		context.bezierCurveTo(826.65, 1042.68, 854.04, 1042.08, 881.36, 1041.76);
		context.bezierCurveTo(898.03, 1040.77, 914.76, 1040.44, 931.33, 1038.23);
		context.bezierCurveTo(948.13, 1037.47, 964.76, 1034.55, 981.51, 1033.04);
		context.bezierCurveTo(1003.69, 1029.09, 1026.09, 1026.4, 1048.15, 1021.64);
		context.bezierCurveTo(1058.79, 1019.49, 1069.59, 1018.04, 1080.04, 1015.03);
		context.bezierCurveTo(1088.35, 1011.72, 1097.43, 1011.2, 1105.97, 1008.63);
		context.closePath();
		context.moveTo(721.72, 1036.21);
		context.bezierCurveTo(720.97, 1038.39, 721.69, 1039.16, 723.85, 1038.51);
		context.bezierCurveTo(724.57, 1036.31, 723.85, 1035.53, 721.72, 1036.21);
		context.closePath();
		context.fillStyle = fillColor217;
		context.fill();
	}



	function drawPath242() {
		//// #f9f691ff
		//// Bezier 242 Drawing
		context.beginPath();
		context.moveTo(474.17, 1001.39);
		context.bezierCurveTo(475.77, 1001.01, 477.37, 1000.63, 478.97, 1000.24);
		context.bezierCurveTo(479.13, 1000.61, 479.48, 1001.39, 479.65, 1001.77);
		context.bezierCurveTo(487.07, 1005.75, 494.71, 1009.48, 501.31, 1014.75);
		context.bezierCurveTo(506.21, 1018.55, 512.8, 1018.72, 518.09, 1021.77);
		context.bezierCurveTo(521.57, 1024.04, 522.19, 1029.15, 526.15, 1030.87);
		context.bezierCurveTo(530.68, 1032.96, 535.17, 1035.15, 539.52, 1037.65);
		context.bezierCurveTo(537.88, 1038.24, 536.23, 1038.75, 534.59, 1039.29);
		context.bezierCurveTo(533.92, 1038.4, 533.27, 1037.52, 532.61, 1036.64);
		context.bezierCurveTo(526.11, 1034.83, 519.95, 1032, 513.53, 1029.93);
		context.bezierCurveTo(509.01, 1028.44, 504.41, 1026.76, 500.88, 1023.47);
		context.bezierCurveTo(495.69, 1017.09, 486.73, 1016.52, 480.92, 1010.95);
		context.bezierCurveTo(476.41, 1006.61, 469.81, 1005.91, 465.07, 1001.95);
		context.bezierCurveTo(466, 1001.55, 467.88, 1000.76, 468.81, 1000.36);
		context.bezierCurveTo(469.88, 1000.84, 470.96, 1001.33, 472.03, 1001.85);
		context.bezierCurveTo(472.56, 1001.73, 473.64, 1001.49, 474.17, 1001.39);
		context.closePath();
		context.fillStyle = fillColor218;
		context.fill();
	}



	function drawPath243() {
		//// #9ebbd3ff
		//// Bezier 243 Drawing
		context.beginPath();
		context.moveTo(183.93, 1013.33);
		context.bezierCurveTo(183.85, 1009.4, 183.65, 1005.28, 185.77, 1001.77);
		context.bezierCurveTo(186.25, 1009.45, 187.04, 1017.12, 187.6, 1024.81);
		context.bezierCurveTo(187.15, 1041.84, 187.48, 1058.91, 187.44, 1075.96);
		context.bezierCurveTo(185.33, 1088.61, 186.43, 1101.51, 184.64, 1114.19);
		context.bezierCurveTo(176.63, 1103.44, 185.88, 1089.73, 180.43, 1078.21);
		context.bezierCurveTo(180.45, 1061.37, 180.57, 1044.52, 180.57, 1027.68);
		context.bezierCurveTo(181.03, 1029.95, 181.61, 1032.19, 182.17, 1034.44);
		context.bezierCurveTo(182.88, 1027.41, 184.13, 1020.41, 183.93, 1013.33);
		context.closePath();
		context.fillStyle = fillColor219;
		context.fill();
	}



	function drawPath244() {
		//// #bbdaf1ff
		//// Bezier 244 Drawing
		context.beginPath();
		context.moveTo(1123.51, 1008.99);
		context.bezierCurveTo(1128.85, 1006.27, 1134.24, 1003.09, 1140.44, 1003.03);
		context.bezierCurveTo(1138.15, 1005.61, 1135.57, 1008.08, 1132.33, 1009.44);
		context.bezierCurveTo(1125.73, 1012.29, 1119.19, 1015.47, 1112.11, 1016.97);
		context.bezierCurveTo(1107.36, 1018, 1103.21, 1020.85, 1098.45, 1021.72);
		context.bezierCurveTo(1093.55, 1022.12, 1088.37, 1022.56, 1083.76, 1020.55);
		context.bezierCurveTo(1090.53, 1018.56, 1097.41, 1016.99, 1104.19, 1015.03);
		context.bezierCurveTo(1110.64, 1013.09, 1117.47, 1012.15, 1123.51, 1008.99);
		context.closePath();
		context.fillStyle = fillColor220;
		context.fill();
	}



	function drawPath245() {
		//// #cafaeaff
		//// Bezier 245 Drawing
		context.beginPath();
		context.moveTo(1230.97, 1010.41);
		context.bezierCurveTo(1237.92, 1010.96, 1242.56, 1005.16, 1248.52, 1002.75);
		context.bezierCurveTo(1246.11, 1009.48, 1238.33, 1010.8, 1232.84, 1014.11);
		context.bezierCurveTo(1223.88, 1017.49, 1216.09, 1024.51, 1206.03, 1024.11);
		context.lineTo(1204.87, 1021.8);
		context.bezierCurveTo(1205.2, 1021.65, 1205.88, 1021.35, 1206.21, 1021.19);
		context.bezierCurveTo(1207.91, 1021.05, 1209.61, 1020.93, 1211.35, 1020.85);
		context.bezierCurveTo(1216.45, 1015.13, 1224.89, 1016.55, 1231.2, 1012.89);
		context.bezierCurveTo(1231.11, 1012.05, 1231.03, 1011.23, 1230.97, 1010.41);
		context.closePath();
		context.fillStyle = fillColor221;
		context.fill();
	}



	function drawPath246() {
		//// #011030ff
		//// Bezier 246 Drawing
		context.beginPath();
		context.moveTo(592.24, 1008.48);
		context.bezierCurveTo(599.23, 1010.57, 605.96, 1013.43, 612.95, 1015.53);
		context.bezierCurveTo(631.49, 1020.8, 650.65, 1023.36, 669.76, 1025.6);
		context.bezierCurveTo(668.16, 1027.07, 666.59, 1028.55, 665, 1030.04);
		context.bezierCurveTo(651.72, 1026.77, 638.2, 1024.33, 625.19, 1020.05);
		context.bezierCurveTo(614.73, 1016.53, 604.13, 1013.4, 593.83, 1009.48);
		context.lineTo(592.24, 1008.48);
		context.closePath();
		context.fillStyle = fillColor222;
		context.fill();
	}



	function drawPath247() {
		//// #edf9bfff
		//// Bezier 247 Drawing
		context.beginPath();
		context.moveTo(1199.96, 1015.01);
		context.bezierCurveTo(1203.53, 1013.65, 1206.12, 1010.85, 1208.16, 1007.71);
		context.bezierCurveTo(1209.55, 1008.33, 1210.93, 1008.97, 1212.35, 1009.63);
		context.bezierCurveTo(1203.83, 1014.52, 1195.05, 1018.97, 1186.17, 1023.16);
		context.bezierCurveTo(1182.72, 1020.71, 1178.59, 1019.61, 1174.41, 1019.44);
		context.bezierCurveTo(1184.79, 1018.59, 1193.19, 1011.03, 1203.65, 1010.51);
		context.bezierCurveTo(1202.4, 1011.99, 1201.16, 1013.49, 1199.96, 1015.01);
		context.closePath();
		context.fillStyle = fillColor223;
		context.fill();
	}



	function drawPath248() {
		//// #abeed5ff
		//// Bezier 248 Drawing
		context.beginPath();
		context.moveTo(475.23, 1013.44);
		context.bezierCurveTo(480.32, 1016.48, 486.47, 1018.28, 490.37, 1022.96);
		context.bezierCurveTo(483.51, 1021.83, 477.15, 1019.01, 471.17, 1015.55);
		context.bezierCurveTo(472.53, 1014.85, 473.88, 1014.15, 475.23, 1013.44);
		context.closePath();
		context.fillStyle = fillColor224;
		context.fill();
	}



	function drawPath249() {
		//// #bfbed7ff
		//// Bezier 249 Drawing
		context.beginPath();
		context.moveTo(551.17, 1013.39);
		context.bezierCurveTo(554.67, 1015.03, 558.21, 1016.55, 561.73, 1018.17);
		context.bezierCurveTo(557.28, 1020.17, 552.45, 1018.77, 547.97, 1017.68);
		context.bezierCurveTo(547.24, 1016.77, 546.51, 1015.89, 545.79, 1015.01);
		context.bezierCurveTo(547.57, 1014.45, 549.37, 1013.92, 551.17, 1013.39);
		context.closePath();
		context.fillStyle = fillColor225;
		context.fill();
	}



	function drawPath250() {
		//// #c2c3f3ff
		//// Bezier 250 Drawing
		context.beginPath();
		context.moveTo(1123.07, 1021.77);
		context.bezierCurveTo(1132, 1016.48, 1142.48, 1015.15, 1152.37, 1012.6);
		context.bezierCurveTo(1152.09, 1013.45, 1151.55, 1015.16, 1151.27, 1016.01);
		context.bezierCurveTo(1147.21, 1017.45, 1142.96, 1018.12, 1138.84, 1019.29);
		context.bezierCurveTo(1128.44, 1022.91, 1118.72, 1028.48, 1107.89, 1030.87);
		context.bezierCurveTo(1101.72, 1032.48, 1095.57, 1034.33, 1089.77, 1037.04);
		context.bezierCurveTo(1083.65, 1039.81, 1076.69, 1039.84, 1070.63, 1042.76);
		context.bezierCurveTo(1066.71, 1044.64, 1062.45, 1045.87, 1058.07, 1045.51);
		context.bezierCurveTo(1064.88, 1036.64, 1077.21, 1038.29, 1086.71, 1034.68);
		context.bezierCurveTo(1094.15, 1031.53, 1101.87, 1029.07, 1109.73, 1027.17);
		context.bezierCurveTo(1114.44, 1026.12, 1118.93, 1024.27, 1123.07, 1021.77);
		context.closePath();
		context.fillStyle = fillColor226;
		context.fill();
	}



	function drawPath251() {
		//// #b0e8f0ff
		//// Bezier 251 Drawing
		context.beginPath();
		context.moveTo(469.01, 1016.45);
		context.bezierCurveTo(469.55, 1016.23, 470.63, 1015.77, 471.17, 1015.55);
		context.bezierCurveTo(477.15, 1019.01, 483.51, 1021.83, 490.37, 1022.96);
		context.lineTo(490.89, 1023.84);
		context.bezierCurveTo(491.17, 1024.32, 491.73, 1025.29, 492.01, 1025.79);
		context.bezierCurveTo(499.65, 1030.32, 508.93, 1030.75, 516.52, 1035.43);
		context.bezierCurveTo(522.51, 1039.01, 529.19, 1041.32, 536.23, 1041.41);
		context.bezierCurveTo(543.21, 1045.71, 551.63, 1045.83, 559.48, 1044.49);
		context.bezierCurveTo(569.16, 1048.81, 578.96, 1052.84, 588.93, 1056.43);
		context.bezierCurveTo(582.93, 1057.57, 576.55, 1058.24, 570.8, 1055.67);
		context.bezierCurveTo(565.44, 1053.2, 559.53, 1053.07, 553.76, 1053.21);
		context.bezierCurveTo(549.59, 1051.61, 545.21, 1050.51, 540.75, 1050.32);
		context.bezierCurveTo(538.55, 1050.19, 536.36, 1050.13, 534.17, 1050.08);
		context.bezierCurveTo(533.72, 1048.76, 533.27, 1047.44, 532.83, 1046.13);
		context.bezierCurveTo(529.63, 1045.59, 526.2, 1045.31, 523.57, 1043.19);
		context.bezierCurveTo(517.99, 1038.57, 510.11, 1039.64, 504.03, 1036.05);
		context.bezierCurveTo(498.72, 1032.85, 492.99, 1030.32, 488.08, 1026.49);
		context.bezierCurveTo(485, 1023.52, 480.45, 1024.49, 476.61, 1024.33);
		context.bezierCurveTo(473.87, 1022.47, 471.07, 1020.68, 468.32, 1018.84);
		context.bezierCurveTo(468.49, 1018.25, 468.84, 1017.05, 469.01, 1016.45);
		context.closePath();
		context.fillStyle = fillColor227;
		context.fill();
	}



	function drawPath252() {
		//// #f3c8bcff
		//// Bezier 252 Drawing
		context.beginPath();
		context.moveTo(1158.65, 1021.36);
		context.bezierCurveTo(1162.64, 1016.73, 1169.24, 1015.6, 1174.96, 1017.13);
		context.bezierCurveTo(1174.36, 1017.76, 1173.17, 1018.99, 1172.57, 1019.61);
		context.bezierCurveTo(1162.28, 1022.97, 1152.16, 1026.91, 1142.43, 1031.64);
		context.bezierCurveTo(1134.55, 1034.61, 1126.43, 1036.92, 1118.59, 1040.01);
		context.bezierCurveTo(1107.23, 1044.48, 1095.04, 1046.48, 1083.99, 1051.75);
		context.bezierCurveTo(1078.33, 1054.47, 1072.16, 1055.71, 1066, 1056.64);
		context.bezierCurveTo(1059.36, 1057.53, 1053.37, 1060.77, 1046.8, 1061.96);
		context.bezierCurveTo(1040.84, 1063.13, 1035.25, 1065.69, 1029.27, 1066.79);
		context.bezierCurveTo(1020.81, 1068.28, 1012.93, 1072.44, 1004.23, 1072.55);
		context.bezierCurveTo(1000.25, 1072.44, 996.43, 1073.55, 992.96, 1075.44);
		context.bezierCurveTo(986.21, 1079.32, 978.25, 1077.64, 970.88, 1078.19);
		context.bezierCurveTo(966.59, 1078.39, 962.37, 1079.25, 958.15, 1079.95);
		context.bezierCurveTo(948.13, 1081.49, 938.07, 1079.48, 928.11, 1078.43);
		context.bezierCurveTo(912.56, 1076.32, 896.89, 1078.52, 881.29, 1077.65);
		context.bezierCurveTo(861.25, 1076, 841.04, 1074.88, 821, 1077.16);
		context.bezierCurveTo(797.13, 1080.15, 773.24, 1075.72, 749.37, 1075.2);
		context.bezierCurveTo(739.19, 1073.67, 728.75, 1073.45, 718.81, 1070.48);
		context.bezierCurveTo(713.61, 1069.13, 708.25, 1068.49, 703.08, 1067.01);
		context.bezierCurveTo(706.92, 1066.79, 710.81, 1065.97, 714.67, 1066.61);
		context.bezierCurveTo(729.87, 1070.77, 745.88, 1069.28, 761.39, 1071.56);
		context.bezierCurveTo(768.43, 1072.75, 775.56, 1073.04, 782.68, 1072.93);
		context.bezierCurveTo(795.07, 1073.81, 807.48, 1073.25, 819.87, 1074.28);
		context.bezierCurveTo(818.49, 1073.49, 817.11, 1072.71, 815.73, 1072);
		context.bezierCurveTo(832.91, 1072.88, 850.09, 1073.19, 867.28, 1073.03);
		context.bezierCurveTo(873.76, 1075.75, 880.8, 1074.52, 887.6, 1075.16);
		context.bezierCurveTo(893.52, 1075.56, 899.41, 1074.49, 905.33, 1074.43);
		context.bezierCurveTo(922.64, 1073.6, 939.6, 1079.6, 956.93, 1077.92);
		context.bezierCurveTo(965.15, 1076.31, 972.83, 1072.47, 981.31, 1071.96);
		context.bezierCurveTo(993.64, 1069.69, 1006.65, 1069.36, 1018.13, 1063.83);
		context.bezierCurveTo(1029.15, 1059.81, 1041.85, 1061.21, 1052.01, 1054.8);
		context.bezierCurveTo(1055.25, 1053.12, 1059.07, 1053.71, 1062.59, 1053.27);
		context.bezierCurveTo(1068.32, 1053.12, 1073.15, 1049.6, 1078.64, 1048.44);
		context.bezierCurveTo(1082.51, 1047.53, 1086.84, 1047.13, 1089.36, 1043.63);
		context.bezierCurveTo(1095.96, 1041.83, 1102.65, 1040.41, 1109.29, 1038.73);
		context.bezierCurveTo(1114.71, 1037.4, 1119.45, 1034.16, 1124.95, 1033.03);
		context.bezierCurveTo(1131.8, 1031.24, 1139.81, 1031.89, 1145.27, 1026.6);
		context.bezierCurveTo(1148.92, 1022.89, 1155.23, 1025.32, 1158.65, 1021.36);
		context.closePath();
		context.fillStyle = fillColor228;
		context.fill();
	}



	function drawPath253() {
		//// #0b031bff
		//// Bezier 253 Drawing
		context.beginPath();
		context.moveTo(566.77, 1020.36);
		context.bezierCurveTo(568.09, 1019.07, 569.41, 1017.77, 570.76, 1016.51);
		context.bezierCurveTo(627.99, 1039.84, 688.83, 1053.16, 749.96, 1061.08);
		context.bezierCurveTo(764.21, 1063.16, 778.6, 1064.17, 792.92, 1065.72);
		context.bezierCurveTo(783.99, 1068.4, 774.67, 1065.6, 765.65, 1067.67);
		context.bezierCurveTo(757.13, 1066.96, 748.6, 1066.12, 740.16, 1064.77);
		context.bezierCurveTo(714.21, 1060.87, 688.32, 1056.49, 662.72, 1050.72);
		context.bezierCurveTo(630.09, 1042.8, 597.75, 1033.41, 566.77, 1020.36);
		context.closePath();
		context.fillStyle = fillColor229;
		context.fill();
	}



	function drawPath254() {
		//// #fcf2a8ff
		//// Bezier 254 Drawing
		context.beginPath();
		context.moveTo(1142.43, 1031.64);
		context.bezierCurveTo(1152.16, 1026.91, 1162.28, 1022.97, 1172.57, 1019.61);
		context.lineTo(1174.41, 1019.44);
		context.bezierCurveTo(1178.59, 1019.61, 1182.72, 1020.71, 1186.17, 1023.16);
		context.bezierCurveTo(1164.27, 1033.09, 1141.63, 1041.33, 1118.59, 1048.28);
		context.bezierCurveTo(1104.01, 1052.57, 1089.31, 1056.45, 1074.83, 1061.05);
		context.bezierCurveTo(1075.59, 1062.25, 1076.35, 1063.44, 1077.17, 1064.65);
		context.bezierCurveTo(1075.03, 1065.28, 1072.93, 1065.97, 1070.79, 1066.55);
		context.bezierCurveTo(1071.68, 1063.79, 1072.56, 1061.04, 1073.44, 1058.31);
		context.bezierCurveTo(1070.97, 1057.72, 1068.48, 1057.12, 1066, 1056.64);
		context.bezierCurveTo(1072.16, 1055.71, 1078.33, 1054.47, 1083.99, 1051.75);
		context.bezierCurveTo(1095.04, 1046.48, 1107.23, 1044.48, 1118.59, 1040.01);
		context.bezierCurveTo(1126.43, 1036.92, 1134.55, 1034.61, 1142.43, 1031.64);
		context.closePath();
		context.fillStyle = fillColor230;
		context.fill();
	}



	function drawPath255() {
		//// #cdd0e4ff
		//// Bezier 255 Drawing
		context.beginPath();
		context.moveTo(1032.05, 1022.83);
		context.bezierCurveTo(1037.31, 1021.43, 1042.76, 1021.63, 1048.15, 1021.64);
		context.bezierCurveTo(1026.09, 1026.4, 1003.69, 1029.09, 981.51, 1033.04);
		context.bezierCurveTo(964.76, 1034.55, 948.13, 1037.47, 931.33, 1038.23);
		context.bezierCurveTo(926.77, 1036.65, 922.17, 1034.95, 917.32, 1034.77);
		context.bezierCurveTo(912.17, 1034.53, 906.97, 1034.68, 902, 1033.16);
		context.bezierCurveTo(908.45, 1032.69, 914.91, 1032.65, 921.37, 1032.67);
		context.bezierCurveTo(929.4, 1032.68, 937.33, 1031.07, 945.36, 1031.13);
		context.bezierCurveTo(955.15, 1031.32, 964.83, 1029.65, 974.6, 1029.27);
		context.bezierCurveTo(985.77, 1028.84, 996.83, 1027, 1007.96, 1025.89);
		context.bezierCurveTo(1015.96, 1024.64, 1024.15, 1024.77, 1032.05, 1022.83);
		context.closePath();
		context.fillStyle = fillColor231;
		context.fill();
	}


	function drawPath256() {
		//// #030a04ff
		//// Bezier 256 Drawing
		context.beginPath();
		context.moveTo(524.12, 1021.8);
		context.bezierCurveTo(531.2, 1025.12, 537.91, 1029.15, 545.09, 1032.27);
		context.bezierCurveTo(553.97, 1036.55, 563, 1040.51, 572.23, 1044.03);
		context.bezierCurveTo(625.16, 1065.81, 681.92, 1076.75, 738.69, 1082.29);
		context.bezierCurveTo(792.99, 1087.41, 847.63, 1089.03, 902.12, 1086.69);
		context.bezierCurveTo(921.47, 1086.45, 940.72, 1084.55, 960.04, 1083.44);
		context.bezierCurveTo(963.85, 1083.15, 967.68, 1082.8, 971.52, 1082.45);
		context.bezierCurveTo(982.32, 1081.32, 993.16, 1080.37, 1003.92, 1078.79);
		context.bezierCurveTo(1007.63, 1078.35, 1011.37, 1078.05, 1015.12, 1078.31);
		context.lineTo(1016.2, 1078.45);
		context.bezierCurveTo(1009.68, 1078.92, 1003.79, 1082.03, 998.32, 1085.36);
		context.bezierCurveTo(991.27, 1086.17, 984.21, 1086.88, 977.2, 1087.99);
		context.bezierCurveTo(963.95, 1089.35, 950.65, 1090.2, 937.39, 1091.36);
		context.bezierCurveTo(925.43, 1092.55, 913.41, 1092.35, 901.45, 1093.12);
		context.bezierCurveTo(875.27, 1094.88, 848.99, 1094.49, 822.76, 1094.04);
		context.bezierCurveTo(796.16, 1093.83, 769.59, 1091.95, 743.13, 1089.24);
		context.bezierCurveTo(705.65, 1085.81, 668.49, 1079.08, 632.04, 1069.79);
		context.bezierCurveTo(626.07, 1067.95, 619.79, 1066.95, 614.2, 1064.07);
		context.bezierCurveTo(614.21, 1064.32, 614.25, 1064.83, 614.27, 1065.07);
		context.bezierCurveTo(605.96, 1061.77, 597.31, 1059.53, 588.93, 1056.43);
		context.bezierCurveTo(578.96, 1052.84, 569.16, 1048.81, 559.48, 1044.49);
		context.bezierCurveTo(553.12, 1041.4, 546.69, 1038.44, 540.51, 1035.03);
		context.bezierCurveTo(535.77, 1032.4, 531.01, 1029.79, 526.57, 1026.71);
		context.bezierCurveTo(524.68, 1025.79, 524.76, 1023.47, 524.12, 1021.8);
		context.closePath();
		context.fillStyle = fillColor232;
		context.fill();
	}



	function drawPath257() {
		//// #c6cde8ff
		//// Bezier 257 Drawing
		context.beginPath();
		context.moveTo(476.61, 1024.33);
		context.bezierCurveTo(480.45, 1024.49, 485, 1023.52, 488.08, 1026.49);
		context.bezierCurveTo(492.99, 1030.32, 498.72, 1032.85, 504.03, 1036.05);
		context.bezierCurveTo(510.11, 1039.64, 517.99, 1038.57, 523.57, 1043.19);
		context.bezierCurveTo(526.2, 1045.31, 529.63, 1045.59, 532.83, 1046.13);
		context.bezierCurveTo(533.27, 1047.44, 533.72, 1048.76, 534.17, 1050.08);
		context.bezierCurveTo(536.36, 1050.13, 538.55, 1050.19, 540.75, 1050.32);
		context.bezierCurveTo(541.61, 1053.05, 541.61, 1056.59, 544.27, 1058.37);
		context.bezierCurveTo(548.12, 1060.91, 553.04, 1061.92, 555.87, 1065.88);
		context.bezierCurveTo(564.27, 1065.79, 570.81, 1071.47, 578.67, 1073.41);
		context.bezierCurveTo(585.16, 1075.4, 590.67, 1079.88, 597.49, 1080.91);
		context.bezierCurveTo(603, 1081.75, 608.47, 1083.52, 612.32, 1087.76);
		context.bezierCurveTo(614.53, 1087.96, 616.75, 1088.16, 618.96, 1088.36);
		context.bezierCurveTo(619.13, 1088.81, 619.48, 1089.71, 619.64, 1090.15);
		context.bezierCurveTo(626.31, 1090.56, 632.31, 1093.56, 638.49, 1095.75);
		context.bezierCurveTo(639.52, 1094.99, 640.55, 1094.23, 641.57, 1093.48);
		context.bezierCurveTo(646.27, 1094.96, 650.21, 1097.99, 654.71, 1099.91);
		context.bezierCurveTo(663.93, 1102.61, 673.73, 1102.31, 683.03, 1104.71);
		context.bezierCurveTo(682.85, 1106.07, 682.52, 1108.81, 682.35, 1110.19);
		context.bezierCurveTo(655.05, 1104.23, 628.27, 1096.25, 601.75, 1087.52);
		context.bezierCurveTo(591.45, 1084.97, 581.8, 1080.63, 572.28, 1076.09);
		context.bezierCurveTo(555.81, 1069.81, 540.16, 1061.69, 524.28, 1054.13);
		context.bezierCurveTo(518.79, 1051.4, 513.03, 1048.84, 508.71, 1044.33);
		context.bezierCurveTo(509.48, 1044.53, 511.03, 1044.93, 511.8, 1045.12);
		context.bezierCurveTo(499.63, 1038.97, 488.21, 1031.45, 476.61, 1024.33);
		context.closePath();
		context.fillStyle = fillColor233;
		context.fill();
	}



	function drawPath258() {
		//// #bdf5ceff
		//// Bezier 258 Drawing
		context.beginPath();
		context.moveTo(490.89, 1023.84);
		context.bezierCurveTo(494.21, 1023.73, 497.55, 1023.61, 500.88, 1023.47);
		context.bezierCurveTo(504.41, 1026.76, 509.01, 1028.44, 513.53, 1029.93);
		context.bezierCurveTo(519.95, 1032, 526.11, 1034.83, 532.61, 1036.64);
		context.bezierCurveTo(533.27, 1037.52, 533.92, 1038.4, 534.59, 1039.29);
		context.bezierCurveTo(535, 1039.83, 535.81, 1040.89, 536.23, 1041.41);
		context.bezierCurveTo(529.19, 1041.32, 522.51, 1039.01, 516.52, 1035.43);
		context.bezierCurveTo(508.93, 1030.75, 499.65, 1030.32, 492.01, 1025.79);
		context.bezierCurveTo(491.73, 1025.29, 491.17, 1024.32, 490.89, 1023.84);
		context.closePath();
		context.fillStyle = fillColor234;
		context.fill();
	}


	function drawPath259() {
		//// #ffe6bbff
		//// Bezier 259 Drawing
		context.beginPath();
		context.moveTo(545.09, 1032.27);
		context.bezierCurveTo(554.16, 1027.4, 563.85, 1033.47, 572.36, 1036.73);
		context.bezierCurveTo(571.4, 1036.89, 569.48, 1037.19, 568.52, 1037.33);
		context.bezierCurveTo(570.07, 1039.37, 571.25, 1041.63, 572.23, 1044.03);
		context.bezierCurveTo(563, 1040.51, 553.97, 1036.55, 545.09, 1032.27);
		context.closePath();
		context.fillStyle = fillColor235;
		context.fill();
	}


	function drawPath260() {
		//// #e8f7fbff
		//// Bezier 260 Drawing
		context.beginPath();
		context.moveTo(1329.87, 1047.97);
		context.bezierCurveTo(1330.92, 1042.05, 1330.8, 1035.83, 1333.33, 1030.28);
		context.lineTo(1333.33, 1113.59);
		context.bezierCurveTo(1331.28, 1119.88, 1330.89, 1126.57, 1328.92, 1132.89);
		context.bezierCurveTo(1324.52, 1147.71, 1322.89, 1163.17, 1318.59, 1178.01);
		context.bezierCurveTo(1313, 1204.59, 1306.23, 1230.89, 1299.57, 1257.23);
		context.bezierCurveTo(1297.83, 1264.64, 1296.47, 1272.17, 1293.41, 1279.21);
		context.bezierCurveTo(1293.63, 1275.96, 1293.81, 1272.73, 1294.08, 1269.51);
		context.bezierCurveTo(1292.92, 1268.01, 1291.76, 1266.52, 1290.63, 1265.05);
		context.bezierCurveTo(1291.56, 1261.27, 1292.77, 1257.56, 1293.64, 1253.77);
		context.bezierCurveTo(1294.53, 1252.03, 1292.76, 1250.72, 1292.04, 1249.41);
		context.bezierCurveTo(1297.29, 1229.49, 1300.87, 1209.17, 1305.77, 1189.19);
		context.bezierCurveTo(1307.07, 1180.65, 1309.33, 1172.33, 1311.13, 1163.91);
		context.bezierCurveTo(1311.2, 1161.76, 1312.75, 1158.65, 1309.8, 1157.63);
		context.bezierCurveTo(1310.36, 1157.81, 1311.51, 1158.19, 1312.07, 1158.37);
		context.bezierCurveTo(1315.71, 1136.91, 1319.97, 1115.55, 1323.29, 1094.03);
		context.bezierCurveTo(1322.07, 1093.67, 1320.8, 1094.04, 1319.59, 1093.73);
		context.bezierCurveTo(1320.85, 1092.51, 1322.16, 1091.31, 1323.48, 1090.12);
		context.bezierCurveTo(1326.83, 1076.28, 1327.59, 1061.99, 1329.87, 1047.97);
		context.closePath();
		context.fillStyle = fillColor236;
		context.fill();
	}


	function drawPath261() {
		//// #b9cff0ff
		//// Bezier 261 Drawing
		context.beginPath();
		context.moveTo(813.63, 1033.24);
		context.bezierCurveTo(820.2, 1033.83, 826.8, 1033.23, 833.39, 1033.55);
		context.bezierCurveTo(840.29, 1033.64, 847.39, 1035.51, 854.11, 1033.04);
		context.bezierCurveTo(861.85, 1032.23, 869.64, 1032.81, 877.41, 1032.84);
		context.bezierCurveTo(885.61, 1032.93, 893.83, 1032.36, 902, 1033.16);
		context.bezierCurveTo(906.97, 1034.68, 912.17, 1034.53, 917.32, 1034.77);
		context.bezierCurveTo(922.17, 1034.95, 926.77, 1036.65, 931.33, 1038.23);
		context.bezierCurveTo(914.76, 1040.44, 898.03, 1040.77, 881.36, 1041.76);
		context.bezierCurveTo(854.04, 1042.08, 826.65, 1042.68, 799.36, 1040.96);
		context.bezierCurveTo(804.23, 1040.51, 809.39, 1039.99, 813.25, 1036.68);
		context.bezierCurveTo(812.76, 1036.29, 811.79, 1035.52, 811.29, 1035.13);
		context.bezierCurveTo(811.88, 1034.65, 813.04, 1033.71, 813.63, 1033.24);
		context.closePath();
		context.fillStyle = fillColor237;
		context.fill();
	}


	function drawPath262() {
		//// #ccf3daff
		//// Bezier 262 Drawing
		context.beginPath();
		context.moveTo(540.51, 1035.03);
		context.bezierCurveTo(546.69, 1038.44, 553.12, 1041.4, 559.48, 1044.49);
		context.bezierCurveTo(551.63, 1045.83, 543.21, 1045.71, 536.23, 1041.41);
		context.bezierCurveTo(535.81, 1040.89, 535, 1039.83, 534.59, 1039.29);
		context.bezierCurveTo(536.23, 1038.75, 537.88, 1038.24, 539.52, 1037.65);
		context.bezierCurveTo(539.76, 1037, 540.25, 1035.68, 540.51, 1035.03);
		context.closePath();
		context.fillStyle = fillColor238;
		context.fill();
	}


	function drawPath263() {
		//// #c4e0e0ff
		//// Bezier 263 Drawing
		context.beginPath();
		context.moveTo(1145.27, 1046.69);
		context.bezierCurveTo(1156.72, 1043.41, 1167.41, 1038.05, 1178.76, 1034.45);
		context.bezierCurveTo(1176.61, 1036.45, 1174.83, 1039.15, 1171.88, 1040);
		context.bezierCurveTo(1167.52, 1041.43, 1162.75, 1041.84, 1158.85, 1044.48);
		context.bezierCurveTo(1154.24, 1047.6, 1148.37, 1047.32, 1143.63, 1050.13);
		context.bezierCurveTo(1133.35, 1054.48, 1122.43, 1057.13, 1112.17, 1061.57);
		context.bezierCurveTo(1112.52, 1059.91, 1112.88, 1058.25, 1113.25, 1056.6);
		context.bezierCurveTo(1124.03, 1053.67, 1134.8, 1050.6, 1145.27, 1046.69);
		context.closePath();
		context.fillStyle = fillColor239;
		context.fill();
	}



	function drawPath264() {
		//// #2b2e41ff
		//// Bezier 264 Drawing
		context.beginPath();
		context.moveTo(721.72, 1036.21);
		context.bezierCurveTo(723.85, 1035.53, 724.57, 1036.31, 723.85, 1038.51);
		context.bezierCurveTo(721.69, 1039.16, 720.97, 1038.39, 721.72, 1036.21);
		context.closePath();
		context.fillStyle = fillColor240;
		context.fill();
	}




		//// #393947ff

	function drawPath265() {
		//// #fbf4a4ff
		//// Bezier 265 Drawing
		context.beginPath();
		context.moveTo(568.52, 1037.33);
		context.bezierCurveTo(569.48, 1037.19, 571.4, 1036.89, 572.36, 1036.73);
		context.bezierCurveTo(579.8, 1038.01, 586.76, 1040.97, 593.89, 1043.28);
		context.bezierCurveTo(602.81, 1045.56, 611.09, 1049.89, 620.25, 1051.32);
		context.bezierCurveTo(631.63, 1055.13, 643.48, 1057.13, 654.89, 1060.79);
		context.bezierCurveTo(660.8, 1062.45, 667.01, 1062.65, 672.88, 1064.47);
		context.bezierCurveTo(682.03, 1067.2, 691.65, 1066.92, 701.09, 1066.89);
		context.bezierCurveTo(701.59, 1066.92, 702.59, 1066.99, 703.08, 1067.01);
		context.bezierCurveTo(708.25, 1068.49, 713.61, 1069.13, 718.81, 1070.48);
		context.bezierCurveTo(728.75, 1073.45, 739.19, 1073.67, 749.37, 1075.2);
		context.bezierCurveTo(773.24, 1075.72, 797.13, 1080.15, 821, 1077.16);
		context.bezierCurveTo(834.44, 1077.93, 847.93, 1076.83, 861.36, 1077.95);
		context.bezierCurveTo(885.27, 1080.92, 909.77, 1076.11, 933.4, 1081.8);
		context.bezierCurveTo(928.63, 1083.08, 923.73, 1084.37, 918.76, 1083.75);
		context.bezierCurveTo(913.12, 1083.43, 906.43, 1082, 902.12, 1086.69);
		context.bezierCurveTo(847.63, 1089.03, 792.99, 1087.41, 738.69, 1082.29);
		context.bezierCurveTo(681.92, 1076.75, 625.16, 1065.81, 572.23, 1044.03);
		context.bezierCurveTo(571.25, 1041.63, 570.07, 1039.37, 568.52, 1037.33);
		context.closePath();
		context.fillStyle = fillColor241;
		context.fill();
	}



	function drawPath266() {
		//// #c4c2f0ff
		//// Bezier 266 Drawing
		context.beginPath();
		context.moveTo(1035.95, 1049.19);
		context.bezierCurveTo(1043.09, 1047.21, 1050.43, 1045.33, 1057.92, 1045.51);
		context.bezierCurveTo(1054.79, 1048.92, 1050.29, 1049.89, 1045.87, 1050.19);
		context.bezierCurveTo(1038.79, 1050.71, 1032.4, 1054.04, 1025.51, 1055.36);
		context.bezierCurveTo(1014.33, 1057.43, 1003.67, 1061.96, 992.21, 1062.39);
		context.bezierCurveTo(990.37, 1062.36, 988.55, 1062.32, 986.72, 1062.27);
		context.bezierCurveTo(992.41, 1058.09, 999.88, 1059.08, 1006.29, 1056.76);
		context.bezierCurveTo(1015.97, 1053.4, 1026.33, 1052.76, 1035.95, 1049.19);
		context.closePath();
		context.fillStyle = fillColor242;
		context.fill();
	}



	function drawPath267() {
		//// #040405ff
		//// Bezier 267 Drawing
		context.beginPath();
		context.moveTo(1088.6, 1077.44);
		context.bezierCurveTo(1116.63, 1069, 1143.8, 1058.04, 1170.53, 1046.23);
		context.bezierCurveTo(1170.45, 1047.19, 1170.31, 1049.12, 1170.23, 1050.09);
		context.bezierCurveTo(1154.43, 1059.6, 1137.87, 1068.09, 1120.17, 1073.48);
		context.bezierCurveTo(1105.81, 1078.68, 1091.16, 1083.01, 1076.48, 1087.2);
		context.bezierCurveTo(1064.37, 1090.24, 1052.29, 1093.36, 1040.17, 1096.31);
		context.bezierCurveTo(1039.63, 1094.65, 1039.11, 1093.01, 1038.59, 1091.37);
		context.bezierCurveTo(1039.31, 1091.19, 1040.76, 1090.8, 1041.48, 1090.6);
		context.bezierCurveTo(1057.39, 1086.96, 1073.09, 1082.52, 1088.6, 1077.44);
		context.closePath();
		context.fillStyle = fillColor243;
		context.fill();
	}



	function drawPath268() {
		//// #bcdaf3ff
		//// Bezier 268 Drawing
		context.beginPath();
		context.moveTo(780.81, 1048.65);
		context.bezierCurveTo(782, 1048.27, 784.36, 1047.51, 785.55, 1047.12);
		context.bezierCurveTo(811.6, 1048.31, 837.68, 1049.05, 863.76, 1048.45);
		context.bezierCurveTo(868.53, 1048.52, 873.29, 1048.92, 878.01, 1049.69);
		context.bezierCurveTo(868.69, 1052.4, 858.89, 1050.76, 849.35, 1051.2);
		context.bezierCurveTo(839.85, 1051.73, 830.36, 1050.55, 820.88, 1051.2);
		context.bezierCurveTo(807.49, 1051.61, 794.08, 1050.36, 780.81, 1048.65);
		context.closePath();
		context.fillStyle = fillColor244;
		context.fill();
	}

	function drawPath269() {
		//// Bezier 269 Drawing
		context.beginPath();
		context.moveTo(553.76, 1053.21);
		context.bezierCurveTo(559.53, 1053.07, 565.44, 1053.2, 570.8, 1055.67);
		context.bezierCurveTo(576.55, 1058.24, 582.93, 1057.57, 588.93, 1056.43);
		context.bezierCurveTo(597.31, 1059.53, 605.96, 1061.77, 614.27, 1065.07);
		context.bezierCurveTo(614.25, 1064.83, 614.21, 1064.32, 614.2, 1064.07);
		context.bezierCurveTo(619.79, 1066.95, 626.07, 1067.95, 632.04, 1069.79);
		context.bezierCurveTo(668.49, 1079.08, 705.65, 1085.81, 743.13, 1089.24);
		context.bezierCurveTo(742.27, 1089.39, 740.56, 1089.67, 739.69, 1089.8);
		context.bezierCurveTo(739.53, 1090.32, 739.21, 1091.35, 739.05, 1091.87);
		context.bezierCurveTo(729.07, 1089.8, 718.93, 1091.39, 708.88, 1091.59);
		context.bezierCurveTo(706.09, 1092, 704.24, 1089.79, 702.35, 1088.19);
		context.bezierCurveTo(694.2, 1087.71, 685.96, 1088.93, 677.89, 1087.36);
		context.bezierCurveTo(674.17, 1086.61, 670.45, 1085.81, 666.69, 1085.39);
		context.bezierCurveTo(657.92, 1084.52, 649.45, 1081.95, 640.73, 1080.79);
		context.bezierCurveTo(640.37, 1080.03, 639.65, 1078.51, 639.29, 1077.75);
		context.bezierCurveTo(626.84, 1077.64, 613.63, 1076.16, 603.24, 1068.68);
		context.bezierCurveTo(600.43, 1066.43, 596.61, 1066.99, 593.28, 1066.41);
		context.bezierCurveTo(587.28, 1066.2, 583.35, 1060.37, 577.33, 1060.23);
		context.bezierCurveTo(569.91, 1059.72, 563.21, 1056.13, 555.85, 1055.24);
		context.bezierCurveTo(555.33, 1054.73, 554.28, 1053.72, 553.76, 1053.21);
		context.closePath();
		context.fillStyle = fillColor244;
		context.fill();
	}



	function drawPath270() {
		//// #c7cdf7ff
		//// Bezier 270 Drawing
		context.beginPath();
		context.moveTo(540.75, 1050.32);
		context.bezierCurveTo(545.21, 1050.51, 549.59, 1051.61, 553.76, 1053.21);
		context.bezierCurveTo(554.28, 1053.72, 555.33, 1054.73, 555.85, 1055.24);
		context.bezierCurveTo(563.21, 1056.13, 569.91, 1059.72, 577.33, 1060.23);
		context.bezierCurveTo(583.35, 1060.37, 587.28, 1066.2, 593.28, 1066.41);
		context.bezierCurveTo(596.61, 1066.99, 600.43, 1066.43, 603.24, 1068.68);
		context.bezierCurveTo(613.63, 1076.16, 626.84, 1077.64, 639.29, 1077.75);
		context.bezierCurveTo(639.65, 1078.51, 640.37, 1080.03, 640.73, 1080.79);
		context.bezierCurveTo(649.45, 1081.95, 657.92, 1084.52, 666.69, 1085.39);
		context.bezierCurveTo(670.45, 1085.81, 674.17, 1086.61, 677.89, 1087.36);
		context.bezierCurveTo(685.96, 1088.93, 694.2, 1087.71, 702.35, 1088.19);
		context.bezierCurveTo(704.24, 1089.79, 706.09, 1092, 708.88, 1091.59);
		context.bezierCurveTo(718.93, 1091.39, 729.07, 1089.8, 739.05, 1091.87);
		context.bezierCurveTo(739.21, 1091.35, 739.53, 1090.32, 739.69, 1089.8);
		context.bezierCurveTo(740.56, 1089.67, 742.27, 1089.39, 743.13, 1089.24);
		context.bezierCurveTo(769.59, 1091.95, 796.16, 1093.83, 822.76, 1094.04);
		context.bezierCurveTo(848.99, 1094.49, 875.27, 1094.88, 901.45, 1093.12);
		context.bezierCurveTo(901.64, 1093.75, 902, 1095.01, 902.19, 1095.65);
		context.bezierCurveTo(900.15, 1095.83, 898.11, 1096.03, 896.08, 1096.24);
		context.bezierCurveTo(896.49, 1096.75, 897.31, 1097.77, 897.71, 1098.28);
		context.bezierCurveTo(903.79, 1098.61, 909.88, 1098.52, 915.96, 1098.23);
		context.bezierCurveTo(923.19, 1097.6, 929.84, 1102.11, 937.12, 1100.76);
		context.bezierCurveTo(947.37, 1099.05, 957.64, 1103.51, 967.83, 1101.04);
		context.bezierCurveTo(972.57, 1100.19, 977.31, 1097.75, 982.19, 1099.16);
		context.bezierCurveTo(984.47, 1099.73, 986.79, 1100.08, 989.13, 1100.35);
		context.bezierCurveTo(988.39, 1101.15, 987.65, 1101.96, 986.93, 1102.8);
		context.bezierCurveTo(978.33, 1104.95, 969.44, 1105.73, 960.97, 1108.43);
		context.bezierCurveTo(974.29, 1107.51, 987.64, 1106.65, 1000.77, 1104.19);
		context.bezierCurveTo(1001.72, 1104.79, 1002.69, 1105.41, 1003.68, 1106.05);
		context.bezierCurveTo(1012.56, 1105.72, 1021.41, 1107, 1030.32, 1107.12);
		context.bezierCurveTo(1030.95, 1107.31, 1032.2, 1107.68, 1032.84, 1107.88);
		context.bezierCurveTo(1036.59, 1109.28, 1040.56, 1109.87, 1044.56, 1110.12);
		context.bezierCurveTo(1044.85, 1111.01, 1045.47, 1112.79, 1045.76, 1113.68);
		context.bezierCurveTo(1022.77, 1119.6, 999.43, 1124.17, 975.83, 1126.83);
		context.bezierCurveTo(953.81, 1129.96, 931.64, 1132.01, 909.4, 1132.71);
		context.bezierCurveTo(888.95, 1133.75, 868.41, 1134.01, 847.97, 1132.65);
		context.bezierCurveTo(833.75, 1132.04, 819.45, 1131.77, 805.35, 1129.68);
		context.bezierCurveTo(795.95, 1128.39, 786.36, 1128.39, 777.11, 1126.09);
		context.bezierCurveTo(768.31, 1123.84, 759.08, 1125.17, 750.27, 1122.99);
		context.bezierCurveTo(737.92, 1120.87, 725.51, 1119.01, 713.25, 1116.4);
		context.bezierCurveTo(703.21, 1113.08, 692.51, 1112.99, 682.35, 1110.19);
		context.bezierCurveTo(682.52, 1108.81, 682.85, 1106.07, 683.03, 1104.71);
		context.bezierCurveTo(673.73, 1102.31, 663.93, 1102.61, 654.71, 1099.91);
		context.bezierCurveTo(650.21, 1097.99, 646.27, 1094.96, 641.57, 1093.48);
		context.bezierCurveTo(640.55, 1094.23, 639.52, 1094.99, 638.49, 1095.75);
		context.bezierCurveTo(632.31, 1093.56, 626.31, 1090.56, 619.64, 1090.15);
		context.bezierCurveTo(619.48, 1089.71, 619.13, 1088.81, 618.96, 1088.36);
		context.bezierCurveTo(616.75, 1088.16, 614.53, 1087.96, 612.32, 1087.76);
		context.bezierCurveTo(608.47, 1083.52, 603, 1081.75, 597.49, 1080.91);
		context.bezierCurveTo(590.67, 1079.88, 585.16, 1075.4, 578.67, 1073.41);
		context.bezierCurveTo(570.81, 1071.47, 564.27, 1065.79, 555.87, 1065.88);
		context.bezierCurveTo(553.04, 1061.92, 548.12, 1060.91, 544.27, 1058.37);
		context.bezierCurveTo(541.61, 1056.59, 541.61, 1053.05, 540.75, 1050.32);
		context.closePath();
		context.fillStyle = fillColor245;
		context.fill();
	}



	function drawPath271() {
		//// #fbf598ff
		//// Bezier 271 Drawing
		context.beginPath();
		context.moveTo(1046.8, 1061.96);
		context.bezierCurveTo(1053.37, 1060.77, 1059.36, 1057.53, 1066, 1056.64);
		context.bezierCurveTo(1068.48, 1057.12, 1070.97, 1057.72, 1073.44, 1058.31);
		context.bezierCurveTo(1072.56, 1061.04, 1071.68, 1063.79, 1070.79, 1066.55);
		context.bezierCurveTo(1069.89, 1066.59, 1068.08, 1066.67, 1067.19, 1066.72);
		context.bezierCurveTo(1061.27, 1066.37, 1055.55, 1067.8, 1050.13, 1070.04);
		context.bezierCurveTo(1038.47, 1072.81, 1027.09, 1076.91, 1015.12, 1078.31);
		context.bezierCurveTo(1011.37, 1078.05, 1007.63, 1078.35, 1003.92, 1078.79);
		context.bezierCurveTo(1000.31, 1077.51, 996.68, 1076.29, 992.96, 1075.44);
		context.bezierCurveTo(996.43, 1073.55, 1000.25, 1072.44, 1004.23, 1072.55);
		context.bezierCurveTo(1012.93, 1072.44, 1020.81, 1068.28, 1029.27, 1066.79);
		context.bezierCurveTo(1035.25, 1065.69, 1040.84, 1063.13, 1046.8, 1061.96);
		context.closePath();
		context.fillStyle = fillColor246;
		context.fill();
	}



	function drawPath272() {
		//// #baf0ddff
		//// Bezier 272 Drawing
		context.beginPath();
		context.moveTo(1077.17, 1064.65);
		context.bezierCurveTo(1089.24, 1062.17, 1101.43, 1060.15, 1113.25, 1056.6);
		context.bezierCurveTo(1112.88, 1058.25, 1112.52, 1059.91, 1112.17, 1061.57);
		context.bezierCurveTo(1101.51, 1064.84, 1090.96, 1068.61, 1080.07, 1071.09);
		context.bezierCurveTo(1071.51, 1073.07, 1063.36, 1076.59, 1054.65, 1077.92);
		context.bezierCurveTo(1049.53, 1078.53, 1045.27, 1082.05, 1040.04, 1082.17);
		context.bezierCurveTo(1029.33, 1083, 1019.33, 1087.2, 1008.83, 1089);
		context.bezierCurveTo(1004.16, 1088.41, 999.51, 1087.84, 994.83, 1087.49);
		context.bezierCurveTo(995.97, 1086.76, 997.13, 1086.05, 998.32, 1085.36);
		context.bezierCurveTo(1003.79, 1082.03, 1009.68, 1078.92, 1016.2, 1078.45);
		context.bezierCurveTo(1020.95, 1079.24, 1025.88, 1079.99, 1030.63, 1078.67);
		context.bezierCurveTo(1042.51, 1075.67, 1054.12, 1071.45, 1066.35, 1069.88);
		context.bezierCurveTo(1066.55, 1069.09, 1066.97, 1067.51, 1067.19, 1066.72);
		context.bezierCurveTo(1068.08, 1066.67, 1069.89, 1066.59, 1070.79, 1066.55);
		context.bezierCurveTo(1072.93, 1065.97, 1075.03, 1065.28, 1077.17, 1064.65);
		context.closePath();
		context.fillStyle = fillColor247;
		context.fill();
	}



	function drawPath273() {
		//// #c2caf0ff
		//// Bezier 273 Drawing
		context.beginPath();
		context.moveTo(749.96, 1061.08);
		context.bezierCurveTo(766.19, 1058.43, 782.45, 1062.4, 798.72, 1061.76);
		context.bezierCurveTo(804.57, 1061.63, 810.28, 1063.8, 816.16, 1063.16);
		context.bezierCurveTo(829.4, 1061.63, 842.76, 1062.37, 856.07, 1062.16);
		context.bezierCurveTo(861.73, 1061.93, 866.35, 1066.21, 872, 1066.16);
		context.bezierCurveTo(881.77, 1066.36, 891.55, 1066, 901.32, 1066.11);
		context.bezierCurveTo(903.76, 1066.04, 906.12, 1066.72, 908.16, 1068.13);
		context.bezierCurveTo(898.97, 1068.55, 889.77, 1068.39, 880.6, 1068.83);
		context.bezierCurveTo(851.33, 1068.95, 822.09, 1067.88, 792.92, 1065.72);
		context.bezierCurveTo(778.6, 1064.17, 764.21, 1063.16, 749.96, 1061.08);
		context.closePath();
		context.fillStyle = fillColor248;
		context.fill();
	}



	function drawPath274() {
		//// #1c092cff
		//// Bezier 274 Drawing
		context.beginPath();
		context.moveTo(908.16, 1068.13);
		context.bezierCurveTo(934.41, 1067.2, 960.63, 1065.23, 986.72, 1062.27);
		context.bezierCurveTo(988.55, 1062.32, 990.37, 1062.36, 992.21, 1062.39);
		context.bezierCurveTo(960.79, 1067.75, 929.03, 1071.45, 897.13, 1072.52);
		context.bezierCurveTo(898.47, 1071.53, 899.81, 1070.59, 901.16, 1069.63);
		context.bezierCurveTo(894.29, 1069.8, 887.39, 1070.01, 880.6, 1068.83);
		context.bezierCurveTo(889.77, 1068.39, 898.97, 1068.55, 908.16, 1068.13);
		context.closePath();
		context.fillStyle = fillColor249;
		context.fill();
	}


	function drawPath275() {

		//// #140111ff
		//// Bezier 275 Drawing
		context.beginPath();
		context.moveTo(765.65, 1067.67);
		context.bezierCurveTo(774.67, 1065.6, 783.99, 1068.4, 792.92, 1065.72);
		context.bezierCurveTo(822.09, 1067.88, 851.33, 1068.95, 880.6, 1068.83);
		context.bezierCurveTo(887.39, 1070.01, 894.29, 1069.8, 901.16, 1069.63);
		context.bezierCurveTo(899.81, 1070.59, 898.47, 1071.53, 897.13, 1072.52);
		context.bezierCurveTo(887.17, 1072.55, 877.24, 1073.09, 867.28, 1073.03);
		context.bezierCurveTo(850.09, 1073.19, 832.91, 1072.88, 815.73, 1072);
		context.bezierCurveTo(799, 1070.99, 782.25, 1069.96, 765.65, 1067.67);
		context.closePath();
		context.fillStyle = fillColor250;
		context.fill();
	}



	function drawPath276() {
		//// #e2f9b8ff
		//// Bezier 276 Drawing
		context.beginPath();
		context.moveTo(1050.13, 1070.04);
		context.bezierCurveTo(1055.55, 1067.8, 1061.27, 1066.37, 1067.19, 1066.72);
		context.bezierCurveTo(1066.97, 1067.51, 1066.55, 1069.09, 1066.35, 1069.88);
		context.bezierCurveTo(1054.12, 1071.45, 1042.51, 1075.67, 1030.63, 1078.67);
		context.bezierCurveTo(1025.88, 1079.99, 1020.95, 1079.24, 1016.2, 1078.45);
		context.lineTo(1015.12, 1078.31);
		context.bezierCurveTo(1027.09, 1076.91, 1038.47, 1072.81, 1050.13, 1070.04);
		context.closePath();
		context.fillStyle = fillColor251;
		context.fill();
	}



	function drawPath277() {
		//// #f9ecb9ff
		//// Bezier 277 Drawing
		context.beginPath();
		context.moveTo(821, 1077.16);
		context.bezierCurveTo(841.04, 1074.88, 861.25, 1076, 881.29, 1077.65);
		context.bezierCurveTo(896.89, 1078.52, 912.56, 1076.32, 928.11, 1078.43);
		context.bezierCurveTo(938.07, 1079.48, 948.13, 1081.49, 958.15, 1079.95);
		context.bezierCurveTo(958.63, 1080.83, 959.56, 1082.57, 960.04, 1083.44);
		context.bezierCurveTo(940.72, 1084.55, 921.47, 1086.45, 902.12, 1086.69);
		context.bezierCurveTo(906.43, 1082, 913.12, 1083.43, 918.76, 1083.75);
		context.bezierCurveTo(923.73, 1084.37, 928.63, 1083.08, 933.4, 1081.8);
		context.bezierCurveTo(909.77, 1076.11, 885.27, 1080.92, 861.36, 1077.95);
		context.bezierCurveTo(847.93, 1076.83, 834.44, 1077.93, 821, 1077.16);
		context.closePath();
		context.fillStyle = fillColor252;
		context.fill();
	}


	function drawPath278() {

		//// #eee6b8ff
		//// Bezier 278 Drawing
		context.beginPath();
		context.moveTo(970.88, 1078.19);
		context.bezierCurveTo(978.25, 1077.64, 986.21, 1079.32, 992.96, 1075.44);
		context.bezierCurveTo(996.68, 1076.29, 1000.31, 1077.51, 1003.92, 1078.79);
		context.bezierCurveTo(993.16, 1080.37, 982.32, 1081.32, 971.52, 1082.45);
		context.bezierCurveTo(971.36, 1081.39, 971.04, 1079.25, 970.88, 1078.19);
		context.closePath();
		context.fillStyle = fillColor253;
		context.fill();
	}



	function drawPath279() {
		//// #fee6cfff
		//// Bezier 279 Drawing
		context.beginPath();
		context.moveTo(958.15, 1079.95);
		context.bezierCurveTo(962.37, 1079.25, 966.59, 1078.39, 970.88, 1078.19);
		context.bezierCurveTo(971.04, 1079.25, 971.36, 1081.39, 971.52, 1082.45);
		context.bezierCurveTo(967.68, 1082.8, 963.85, 1083.15, 960.04, 1083.44);
		context.bezierCurveTo(959.56, 1082.57, 958.63, 1080.83, 958.15, 1079.95);
		context.closePath();
		context.fillStyle = fillColor254;
		context.fill();
	}



	function drawPath280() {
		//// #95bedbff
		//// Bezier 280 Drawing
		context.beginPath();
		context.moveTo(180.43, 1078.21);
		context.bezierCurveTo(185.88, 1089.73, 176.63, 1103.44, 184.64, 1114.19);
		context.bezierCurveTo(184.55, 1124.15, 184.56, 1134.11, 183.49, 1144.03);
		context.bezierCurveTo(183.03, 1160.92, 182.09, 1177.79, 181.15, 1194.65);
		context.bezierCurveTo(180.61, 1218.84, 180.36, 1243.03, 180.47, 1267.21);
		context.bezierCurveTo(178.21, 1268.03, 175.93, 1268.69, 173.61, 1269.27);
		context.bezierCurveTo(173.89, 1246.6, 173.15, 1223.88, 174.97, 1201.27);
		context.bezierCurveTo(175.05, 1189.28, 174.99, 1177.28, 176.53, 1165.37);
		context.bezierCurveTo(176.21, 1150.75, 177.65, 1136.19, 178.17, 1121.57);
		context.bezierCurveTo(180.24, 1107.21, 179.25, 1092.64, 180.43, 1078.21);
		context.closePath();
		context.fillStyle = fillColor255;
		context.fill();
	}


	function drawPath281() {

		//// #b4dff1ff
		//// Bezier 281 Drawing
		context.beginPath();
		context.moveTo(977.2, 1087.99);
		context.bezierCurveTo(984.21, 1086.88, 991.27, 1086.17, 998.32, 1085.36);
		context.bezierCurveTo(997.13, 1086.05, 995.97, 1086.76, 994.83, 1087.49);
		context.bezierCurveTo(999.51, 1087.84, 1004.16, 1088.41, 1008.83, 1089);
		context.bezierCurveTo(1006.8, 1089.29, 1004.79, 1089.61, 1002.79, 1089.95);
		context.bezierCurveTo(1009.36, 1090.13, 1015.89, 1091.07, 1022.36, 1092.27);
		context.bezierCurveTo(1028.77, 1093.64, 1035.11, 1091.11, 1041.48, 1090.6);
		context.bezierCurveTo(1040.76, 1090.8, 1039.31, 1091.19, 1038.59, 1091.37);
		context.bezierCurveTo(1021.56, 1096, 1004.15, 1098.99, 986.93, 1102.8);
		context.bezierCurveTo(987.65, 1101.96, 988.39, 1101.15, 989.13, 1100.35);
		context.bezierCurveTo(986.79, 1100.08, 984.47, 1099.73, 982.19, 1099.16);
		context.bezierCurveTo(977.31, 1097.75, 972.57, 1100.19, 967.83, 1101.04);
		context.bezierCurveTo(957.64, 1103.51, 947.37, 1099.05, 937.12, 1100.76);
		context.bezierCurveTo(929.84, 1102.11, 923.19, 1097.6, 915.96, 1098.23);
		context.bezierCurveTo(909.88, 1098.52, 903.79, 1098.61, 897.71, 1098.28);
		context.bezierCurveTo(897.31, 1097.77, 896.49, 1096.75, 896.08, 1096.24);
		context.bezierCurveTo(898.11, 1096.03, 900.15, 1095.83, 902.19, 1095.65);
		context.bezierCurveTo(902, 1095.01, 901.64, 1093.75, 901.45, 1093.12);
		context.bezierCurveTo(913.41, 1092.35, 925.43, 1092.55, 937.39, 1091.36);
		context.bezierCurveTo(951.53, 1096.63, 966.36, 1090.91, 980.85, 1091.37);
		context.bezierCurveTo(981.03, 1090.56, 981.39, 1088.93, 981.57, 1088.12);
		context.bezierCurveTo(980.48, 1088.08, 978.29, 1088.01, 977.2, 1087.99);
		context.closePath();
		context.fillStyle = fillColor256;
		context.fill();
	}




		//// #414244ff

	function drawPath282() {
		//// #d8f8e1ff
		//// Bezier 282 Drawing
		context.beginPath();
		context.moveTo(937.39, 1091.36);
		context.bezierCurveTo(950.65, 1090.2, 963.95, 1089.35, 977.2, 1087.99);
		context.bezierCurveTo(978.29, 1088.01, 980.48, 1088.08, 981.57, 1088.12);
		context.bezierCurveTo(981.39, 1088.93, 981.03, 1090.56, 980.85, 1091.37);
		context.bezierCurveTo(966.36, 1090.91, 951.53, 1096.63, 937.39, 1091.36);
		context.closePath();
		context.fillStyle = fillColor257;
		context.fill();
	}



	function drawPath283() {
		//// #cacde9ff
		//// Bezier 283 Drawing
		context.beginPath();
		context.moveTo(1040.17, 1096.31);
		context.bezierCurveTo(1052.29, 1093.36, 1064.37, 1090.24, 1076.48, 1087.2);
		context.bezierCurveTo(1074.77, 1089.04, 1073.01, 1090.92, 1070.75, 1092.07);
		context.bezierCurveTo(1058.09, 1099, 1044.27, 1103.63, 1030.32, 1107.12);
		context.bezierCurveTo(1021.41, 1107, 1012.56, 1105.72, 1003.68, 1106.05);
		context.bezierCurveTo(1002.69, 1105.41, 1001.72, 1104.79, 1000.77, 1104.19);
		context.bezierCurveTo(1014.01, 1102.09, 1027.08, 1099.12, 1040.17, 1096.31);
		context.closePath();
		context.fillStyle = fillColor258;
		context.fill();
	}



	function drawPath284() {
		//// #000219ff
		//// Bezier 284 Drawing
		context.beginPath();
		context.moveTo(986.93, 1102.8);
		context.bezierCurveTo(1004.15, 1098.99, 1021.56, 1096, 1038.59, 1091.37);
		context.bezierCurveTo(1039.11, 1093.01, 1039.63, 1094.65, 1040.17, 1096.31);
		context.bezierCurveTo(1027.08, 1099.12, 1014.01, 1102.09, 1000.77, 1104.19);
		context.bezierCurveTo(987.64, 1106.65, 974.29, 1107.51, 960.97, 1108.43);
		context.bezierCurveTo(969.44, 1105.73, 978.33, 1104.95, 986.93, 1102.8);
		context.closePath();
		context.fillStyle = fillColor259;
		context.fill();
	}



	function drawPath285() {
		//// #c9cdd8ff
		//// Bezier 285 Drawing
		context.beginPath();
		context.moveTo(1032.84, 1107.88);
		context.bezierCurveTo(1046.12, 1107.52, 1059.37, 1105.79, 1072.68, 1106.09);
		context.bezierCurveTo(1070.71, 1107.36, 1068.63, 1108.52, 1066.31, 1108.97);
		context.bezierCurveTo(1059.45, 1110.51, 1052.64, 1112.23, 1045.76, 1113.68);
		context.bezierCurveTo(1045.47, 1112.79, 1044.85, 1111.01, 1044.56, 1110.12);
		context.bezierCurveTo(1040.56, 1109.87, 1036.59, 1109.28, 1032.84, 1107.88);
		context.closePath();
		context.fillStyle = fillColor260;
		context.fill();
	}



	function drawPath286() {
		//// #96bdd3ff
		//// Bezier 286 Drawing
		context.beginPath();
		context.moveTo(1328.92, 1132.89);
		context.bezierCurveTo(1330.89, 1126.57, 1331.28, 1119.88, 1333.33, 1113.59);
		context.lineTo(1333.33, 1132.75);
		context.bezierCurveTo(1331.27, 1140.23, 1331.03, 1148.07, 1328.99, 1155.55);
		context.bezierCurveTo(1327.13, 1162.55, 1326.08, 1169.72, 1324.88, 1176.85);
		context.bezierCurveTo(1318, 1206.93, 1312.19, 1237.27, 1303.97, 1267.03);
		context.bezierCurveTo(1303.43, 1267.11, 1302.33, 1267.27, 1301.79, 1267.35);
		context.bezierCurveTo(1301.25, 1263.92, 1300.51, 1260.55, 1299.57, 1257.23);
		context.bezierCurveTo(1306.23, 1230.89, 1313, 1204.59, 1318.59, 1178.01);
		context.bezierCurveTo(1322.89, 1163.17, 1324.52, 1147.71, 1328.92, 1132.89);
		context.closePath();
		context.fillStyle = fillColor261;
		context.fill();
	}



	function drawPath287() {
		//// #ddeaf9ff
		//// Bezier 287 Drawing
		context.beginPath();
		context.moveTo(314.65, 1157.89);
		context.bezierCurveTo(317.76, 1162.05, 318.13, 1167.43, 320.4, 1172.01);
		context.bezierCurveTo(322.85, 1169.71, 325.17, 1167.27, 327.65, 1165);
		context.bezierCurveTo(331.04, 1161.17, 336.63, 1162.96, 341.08, 1162.81);
		context.bezierCurveTo(341.28, 1166.25, 341.48, 1169.71, 341.68, 1173.16);
		context.bezierCurveTo(348.63, 1173.24, 355.59, 1173.2, 362.53, 1173.48);
		context.bezierCurveTo(362.83, 1180.44, 362.84, 1187.43, 362.89, 1194.4);
		context.bezierCurveTo(384.07, 1194.81, 405.24, 1194.25, 426.41, 1194.81);
		context.bezierCurveTo(426.64, 1200.47, 426.83, 1206.12, 426.97, 1211.8);
		context.bezierCurveTo(433.48, 1212.08, 440.04, 1211.31, 446.52, 1212.16);
		context.bezierCurveTo(447.51, 1213.24, 448.44, 1214.39, 449.32, 1215.6);
		context.bezierCurveTo(462.97, 1216.33, 476.65, 1215.48, 490.32, 1216.12);
		context.bezierCurveTo(490.59, 1218.21, 490.85, 1220.32, 491.13, 1222.45);
		context.bezierCurveTo(498.03, 1222.59, 504.92, 1222.55, 511.81, 1222.73);
		context.bezierCurveTo(512.03, 1227.49, 512.21, 1232.27, 512.37, 1237.05);
		context.bezierCurveTo(526.37, 1237.57, 540.4, 1236.89, 554.41, 1237.49);
		context.bezierCurveTo(554.61, 1240.91, 554.81, 1244.33, 555.01, 1247.76);
		context.bezierCurveTo(561.95, 1247.87, 568.88, 1247.87, 575.8, 1248.15);
		context.bezierCurveTo(575.99, 1251.57, 576.16, 1255, 576.35, 1258.45);
		context.bezierCurveTo(593.85, 1258.81, 611.37, 1258.2, 628.88, 1258.85);
		context.bezierCurveTo(629.17, 1260.91, 629.49, 1262.97, 629.81, 1265.05);
		context.bezierCurveTo(633.16, 1265.23, 636.51, 1265.4, 639.87, 1265.6);
		context.bezierCurveTo(640.03, 1270.29, 640.19, 1275, 640.32, 1279.72);
		context.bezierCurveTo(661.48, 1280.23, 682.65, 1279.49, 703.81, 1280.17);
		context.bezierCurveTo(704.12, 1287.16, 704.11, 1294.15, 704.21, 1301.15);
		context.bezierCurveTo(725.43, 1301.39, 746.65, 1300.95, 767.88, 1301.47);
		context.bezierCurveTo(768.11, 1308.43, 768.12, 1315.41, 768.29, 1322.39);
		context.bezierCurveTo(789.51, 1322.63, 810.71, 1322.55, 831.92, 1322.64);
		context.bezierCurveTo(839.65, 1322.72, 847.49, 1321.97, 855.12, 1323.68);
		context.bezierCurveTo(854.12, 1326.8, 853.55, 1330.04, 853.49, 1333.33);
		context.lineTo(395.8, 1333.33);
		context.bezierCurveTo(393.79, 1324.89, 387.01, 1319.08, 383.09, 1311.63);
		context.bezierCurveTo(378.21, 1304.57, 373.67, 1297.31, 369.21, 1290);
		context.bezierCurveTo(367.28, 1283.76, 362.6, 1278.96, 360.53, 1272.8);
		context.bezierCurveTo(358.21, 1266.55, 353.61, 1261.49, 351.21, 1255.28);
		context.bezierCurveTo(348.19, 1247.49, 343.91, 1240.27, 340.95, 1232.47);
		context.bezierCurveTo(333.23, 1213.08, 325.04, 1193.85, 318.84, 1173.92);
		context.bezierCurveTo(316.53, 1168.84, 314.72, 1163.53, 314.65, 1157.89);
		context.closePath();
		context.fillStyle = fillColor262;
		context.fill();
	}



	function drawPath288() {
		//// #f9fdfbff
		//// Bezier 288 Drawing
		context.beginPath();
		context.moveTo(1269.23, 1326.49);
		context.bezierCurveTo(1278.25, 1301.24, 1285.48, 1275.41, 1292.04, 1249.41);
		context.bezierCurveTo(1292.76, 1250.72, 1294.53, 1252.03, 1293.64, 1253.77);
		context.bezierCurveTo(1292.77, 1257.56, 1291.56, 1261.27, 1290.63, 1265.05);
		context.bezierCurveTo(1291.76, 1266.52, 1292.92, 1268.01, 1294.08, 1269.51);
		context.bezierCurveTo(1293.81, 1272.73, 1293.63, 1275.96, 1293.41, 1279.21);
		context.bezierCurveTo(1290.2, 1291.37, 1286.13, 1303.29, 1282.33, 1315.28);
		context.bezierCurveTo(1280.68, 1321.44, 1278.91, 1327.63, 1276, 1333.33);
		context.lineTo(1271.32, 1333.33);
		context.bezierCurveTo(1270.87, 1330.96, 1270.21, 1328.67, 1269.23, 1326.49);
		context.closePath();
		context.fillStyle = fillColor263;
		context.fill();
	}



	function drawPath289() {
		//// #9ebdccff
		//// Bezier 289 Drawing
		context.beginPath();
		context.moveTo(1293.41, 1279.21);
		context.bezierCurveTo(1296.47, 1272.17, 1297.83, 1264.64, 1299.57, 1257.23);
		context.bezierCurveTo(1300.51, 1260.55, 1301.25, 1263.92, 1301.79, 1267.35);
		context.bezierCurveTo(1302.33, 1267.27, 1303.43, 1267.11, 1303.97, 1267.03);
		context.lineTo(1303.67, 1268.15);
		context.bezierCurveTo(1301.13, 1278.63, 1297.56, 1288.83, 1294.72, 1299.24);
		context.bezierCurveTo(1290.99, 1310.73, 1286.27, 1321.87, 1282.44, 1333.33);
		context.lineTo(1276, 1333.33);
		context.bezierCurveTo(1278.91, 1327.63, 1280.68, 1321.44, 1282.33, 1315.28);
		context.bezierCurveTo(1286.13, 1303.29, 1290.2, 1291.37, 1293.41, 1279.21);
		context.closePath();
		context.fillStyle = fillColor264;
		context.fill();
	}



	function drawPath290() {
		//// #9cbbc9ff
		//// Bezier 290 Drawing
		context.beginPath();
		context.moveTo(173.61, 1269.27);
		context.bezierCurveTo(175.93, 1268.69, 178.21, 1268.03, 180.47, 1267.21);
		context.bezierCurveTo(180.19, 1275.67, 180.44, 1284.12, 180.91, 1292.57);
		context.bezierCurveTo(181.08, 1306.16, 181.43, 1319.83, 183.08, 1333.33);
		context.lineTo(177.17, 1333.33);
		context.bezierCurveTo(176.36, 1321.75, 175.52, 1310.16, 174.32, 1298.6);
		context.bezierCurveTo(174.01, 1288.83, 173.76, 1279.04, 173.61, 1269.27);
		context.closePath();
		context.fillStyle = fillColor265;
		context.fill();

		context.restore();
	}

}


function drawCanvas2(canvas, targetFrame, resizing) {
    //// General Declarations
    canvas = initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    var context = canvas.getContext('2d');
    var pixelRatio = canvas.paintCodePixelRatio;
    
    //// Resize to Target Frame
    context.save();
    var resizedFrame = applyResizingBehavior(resizing, makeRect(0, 0, 50, 50), targetFrame);
    context.translate(resizedFrame.x, resizedFrame.y);
    context.scale(resizedFrame.w / 50, resizedFrame.h / 50);
    
    context.restore();

}

//// Infrastructure

function clearCanvas(canvas) {
    canvas = initializeCanvas(typeof canvas === 'string' ? document.getElementById(canvas) : canvas);
    canvas.getContext('2d').clearRect(0, 0, canvas.width, canvas.height);
}

// Possible arguments for 'resizing' parameter are:
//   'aspectfit': The content is proportionally resized to fit into the target rectangle.
//   'aspectfill': The content is proportionally resized to compvarely fill the target rectangle.
//   'stretch': The content is stretched to match the entire target rectangle.
//   'center': The content is centered in the target rectangle, but it is NOT resized.
function applyResizingBehavior(resizing, rect, targetRect) {
    if (targetRect === undefined || equalRects(rect, targetRect) || equalRects(targetRect, makeRect(0, 0, 0, 0))) {
        return rect;
    }

    var scales = makeSize(0, 0);
    scales.w = Math.abs(targetRect.w / rect.w);
    scales.h = Math.abs(targetRect.h / rect.h);

    switch (resizing) {
        case 'aspectfit': {
            scales.w = Math.min(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'aspectfill': {
            scales.w = Math.max(scales.w, scales.h);
            scales.h = scales.w;
            break;
        }
        case 'stretch':
        case undefined:
            break;
        case 'center': {
            scales.w = 1;
            scales.h = 1;
            break;
        }
        default:
            throw 'Unknown resizing behavior "' + resizing + '". Use "aspectfit", "aspectfill", "stretch" or "center" as resizing behavior.';
    }

    var result = makeRect(Math.min(rect.x, rect.x + rect.w), Math.min(rect.y, rect.y + rect.h), Math.abs(rect.w), Math.abs(rect.h));
    result.w *= scales.w;
    result.h *= scales.h;
    result.x = targetRect.x + (targetRect.w - result.w) / 2;
    result.y = targetRect.y + (targetRect.h - result.h) / 2;
    return result;
}

function makeRect(x, y, w, h) {
    return {x: x, y: y, w: w, h: h};
}

function equalRects(r1, r2) {
    return r1.x === r2.x && r1.y === r2.y && r1.w == r2.w && r1.h === r2.h;
}

function makeSize(w, h) {
    return {w: w, h: h};
}

function initializeCanvas(canvas) {
    if ('paintCodePixelRatio' in canvas) return canvas;
    // This function should only be called once on each canvas.
    var context = canvas.getContext('2d');

    var devicePixelRatio = window.devicePixelRatio || 1;
    var backingStorePixelRatio = context.webkitBackingStorePixelRatio
        || context.mozBackingStorePixelRatio
        || context.msBackingStorePixelRatio
        || context.oBackingStorePixelRatio
        || context.backingStorePixelRatio
        || 1;

    var pixelRatio = devicePixelRatio / backingStorePixelRatio;

    canvas.style.width = canvas.width + 'px';
    canvas.style.height = canvas.height + 'px';
    canvas.width *= pixelRatio;
    canvas.height *= pixelRatio;
    canvas.paintCodePixelRatio = pixelRatio;

    context.scale(pixelRatio, pixelRatio);
    return canvas;
}

//// Public Interface

// Drawing Methods
StyleKitName.drawCanvas1 = drawCanvas1;
StyleKitName.drawCanvas2 = drawCanvas2;

// Utilities
StyleKitName.clearCanvas = clearCanvas;
StyleKitName.makeRect = makeRect;
