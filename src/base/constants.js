/*
    Copyright 2008-2013
        Matthias Ehmann,
        Michael Gerhaeuser,
        Carsten Miller,
        Bianca Valentin,
        Alfred Wassermann,
        Peter Wilfahrt

    This file is part of JSXGraph.

    JSXGraph is free software dual licensed under the GNU LGPL or MIT License.

    You can redistribute it and/or modify it under the terms of the

      * GNU Lesser General Public License as published by
        the Free Software Foundation, either version 3 of the License, or
        (at your option) any later version
      OR
      * MIT License: https://github.com/jsxgraph/jsxgraph/blob/master/LICENSE.MIT

    JSXGraph is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU Lesser General Public License for more details.

    You should have received a copy of the GNU Lesser General Public License and
    the MIT License along with JSXGraph. If not, see <http://www.gnu.org/licenses/>
    and <http://opensource.org/licenses/MIT/>.
 */


/*global JXG: true, define: true*/
/*jslint nomen: true, plusplus: true*/

/* depends:
 jxg
 */

define(['jxg'], function (JXG) {

    "use strict";

    var constants;

    constants = /** @lends JXG */ {
        // copyright, version, ...

        /**
         * Represents the currently used JSXGraph version.
         * @type {String}
         */
        version: '0.97.1',

        /**
         * The small gray version indicator in the top left corner of every JSXGraph board (if
         * showCopyright is not set to false on board creation).
         * @type String
         */
        licenseText: 'JSXGraph v0.97.1 Copyright (C) see http://jsxgraph.org',

        // coords
        COORDS_BY_USER: 0x0001,
        COORDS_BY_SCREEN: 0x0002,

        // object types
        OBJECT_TYPE_ARC: 1,
        OBJECT_TYPE_ARROW: 2,
        OBJECT_TYPE_AXIS: 3,
        OBJECT_TYPE_AXISPOINT: 4,
        OBJECT_TYPE_TICKS: 5,
        OBJECT_TYPE_CIRCLE: 6,
        OBJECT_TYPE_CONIC: 7,
        OBJECT_TYPE_CURVE: 8,
        OBJECT_TYPE_GLIDER: 9,
        OBJECT_TYPE_IMAGE: 10,
        OBJECT_TYPE_LINE: 11,
        OBJECT_TYPE_POINT: 12,
        OBJECT_TYPE_SLIDER: 13,
        OBJECT_TYPE_CAS: 14,
        OBJECT_TYPE_GXTCAS: 15,
        OBJECT_TYPE_POLYGON: 16,
        OBJECT_TYPE_SECTOR: 17,
        OBJECT_TYPE_TEXT: 18,
        OBJECT_TYPE_ANGLE: 19,
        OBJECT_TYPE_INTERSECTION: 20,
        OBJECT_TYPE_TURTLE: 21,
        OBJECT_TYPE_VECTOR: 22,
        OBJECT_TYPE_OPROJECT: 23,
        OBJECT_TYPE_GRID: 24,

        // object classes
        OBJECT_CLASS_POINT: 1,
        OBJECT_CLASS_LINE: 2,
        OBJECT_CLASS_CIRCLE: 3,
        OBJECT_CLASS_CURVE: 4,
        OBJECT_CLASS_AREA: 5,
        OBJECT_CLASS_OTHER: 6,

        // SketchReader constants
        GENTYPE_ABC: 1, // unused
        GENTYPE_AXIS: 2,
        GENTYPE_MID: 3,
        GENTYPE_REFLECTION: 4,
        GENTYPE_MIRRORPOINT: 5,
        GENTYPE_TANGENT: 6,
        GENTYPE_PARALLEL: 7,
        GENTYPE_BISECTORLINES: 8,
        GENTYPE_PERPENDICULAR_BISECTOR: 9,
        GENTYPE_BISECTOR: 10,
        GENTYPE_NORMAL: 11,
        GENTYPE_POINT: 12,
        GENTYPE_GLIDER: 13,
        GENTYPE_INTERSECTION: 14,
        GENTYPE_CIRCLE: 15,
        GENTYPE_CIRCLE2POINTS: 16,
        GENTYPE_LINE: 17,
        GENTYPE_TRIANGLE: 18,
        GENTYPE_QUADRILATERAL: 19,
        GENTYPE_TEXT: 20,
        GENTYPE_POLYGON: 21,
        GENTYPE_REGULARPOLYGON: 22,
        GENTYPE_SECTOR: 23,
        GENTYPE_ANGLE: 24,
        GENTYPE_PLOT: 25,
        GENTYPE_SLIDER: 26,
        GENTYPE_XYZ: 27, // unused ...
        GENTYPE_JCODE: 28,
        GENTYPE_MOVEMENT: 29,
        GENTYPE_COMBINED: 30,
        GENTYPE_RULER: 31,
        // 32 // unused ...
        GENTYPE_GRID: 33, // obsolete
        // 34 ... 39 // unused ...
        GENTYPE_DELETE: 41,
        GENTYPE_COPY: 42,
        GENTYPE_MIRROR: 43,
        GENTYPE_ROTATE: 44,
        GENTYPE_ABLATION: 45,
        GENTYPE_MIGRATE: 46,
        GENTYPE_TRANSFORM: 47,
        // 48 ... 50 // unused ...

        // Important:
        // To be able to differentiate between the (GUI-specific) CTX and
        // (CORE-specific) non-CTX steps, the non-CTX steps must not be changed
        // to values > 50.
        GENTYPE_CTX_TYPE_G: 51,
        GENTYPE_CTX_TYPE_P: 52,
        GENTYPE_CTX_TRACE: 53,
        GENTYPE_CTX_VISIBILITY: 54,
        GENTYPE_CTX_CCVISIBILITY: 55,
        GENTYPE_CTX_MPVISIBILITY: 56,
        GENTYPE_CTX_WITHLABEL: 57,
        GENTYPE_CTX_SETLABEL: 58,
        GENTYPE_CTX_SETFIXED: 59,
        GENTYPE_CTX_STROKEWIDTH: 60,
        GENTYPE_CTX_LABELSIZE: 61,
        GENTYPE_CTX_SIZE: 62,
        GENTYPE_CTX_FACE: 63,
        GENTYPE_CTX_STRAIGHT: 64,
        GENTYPE_CTX_ARROW: 65,
        GENTYPE_CTX_COLOR: 66,
        GENTYPE_CTX_RADIUS: 67,
        GENTYPE_CTX_COORDS: 68,
        GENTYPE_CTX_TEXT: 69,
        GENTYPE_CTX_ANGLERADIUS: 70,
        GENTYPE_CTX_DOTVISIBILITY: 71,
        GENTYPE_CTX_FILLOPACITY: 72
    };

    JXG.extend(JXG, constants);

    return constants;
});