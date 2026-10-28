import type { SceneConfig } from "@liveroom-tech/react-immersive/utils";

export const sceneConfig: SceneConfig = {
  "model": {
    "rotation": [
      90,
      0,
      0
    ],
    "showAdvancedRotation": false,
    "renderer": "pbr",
    "shading": "lit",
    "autoRotate": false,
    "autoRotateSpeed": 1,
    "activeVariants": []
  },
  "camera": {
    "fieldOfView": 50,
    "showAdvancedSettings": false
  },
  "lighting": {
    "ambient": {
      "intensity": 0.25,
      "color": "#ffffff"
    },
    "lights": [
      {
        "id": "light-hemi",
        "type": "hemisphere",
        "color": "#ffffff",
        "intensity": 0.3,
        "position": [
          0,
          1,
          0
        ],
        "attachedToCamera": false,
        "castShadow": false,
        "shadowBias": -0.0005,
        "visible": true
      },
      {
        "id": "light-key",
        "type": "directional",
        "color": "#ffffff",
        "intensity": 2.5,
        "position": [
          6,
          12,
          6
        ],
        "attachedToCamera": false,
        "castShadow": true,
        "shadowBias": -0.0005,
        "visible": true
      },
      {
        "id": "light-fill",
        "type": "directional",
        "color": "#ffffff",
        "intensity": 0,
        "position": [
          -6,
          8,
          -6
        ],
        "attachedToCamera": false,
        "castShadow": false,
        "shadowBias": -0.0005,
        "visible": true
      }
    ]
  },
  "shadows": {
    "enabled": true,
    "mapSize": 2048,
    "bias": -0.0005,
    "normalBias": 0.02,
    "radius": 3
  },
  "environment": {
    "source": "preset",
    "preset": "apartment",
    "customEnvironmentUrl": "",
    "intensity": 0.25,
    "rotation": 0,
    "shadowLight": {
      "enabled": false,
      "intensity": 2.5,
      "bias": -0.0005
    }
  },
  "wireframe": {
    "enabled": false,
    "color": "#000000",
    "opacity": 1
  },
  "background": {
    "enabled": false,
    "type": "color",
    "color": "#1c1c1d",
    "imageUrl": ""
  },
  "groundShadows": {
    "enabled": false,
    "mode": "shadowCatcher",
    "intensity": 0.7,
    "borderFade": 1,
    "height": 0,
    "size": 10
  },
  "postProcessing": {
    "autofocus": {
      "enabled": false,
      "focusDistance": 5,
      "focusRange": 5,
      "focalLength": 0.02,
      "bokehScale": 6,
      "target": [
        0,
        0,
        0
      ],
      "mouse": true,
      "debug": 0,
      "manual": false,
      "smoothTime": 0.25
    },
    "toneMapping": {
      "enabled": false,
      "mode": "aces",
      "exposure": 1,
      "resolution": 256,
      "whitePoint": 4,
      "middleGrey": 0.6,
      "minLuminance": 0.01,
      "averageLuminance": 1,
      "adaptationRate": 1
    },
    "brightnessContrast": {
      "enabled": false,
      "brightness": 0,
      "contrast": 0
    },
    "hueSaturation": {
      "enabled": false,
      "hue": 0,
      "saturation": 0
    },
    "colorAverage": {
      "enabled": false
    },
    "dotScreen": {
      "enabled": false,
      "angle": 1.5707963267948966,
      "scale": 1
    },
    "glitch": {
      "enabled": false,
      "mode": "sporadic",
      "delay": [
        1.5,
        3.5
      ],
      "duration": [
        0.6,
        1
      ],
      "strength": [
        0.3,
        1
      ],
      "chromaticAberrationOffset": [
        0,
        0
      ],
      "columns": 0.05,
      "ratio": 0.85
    },
    "ssao": {
      "enabled": false,
      "samples": 30,
      "rings": 4,
      "intensity": 8,
      "radius": 0.25,
      "bias": 0.025,
      "luminanceInfluence": 0.6,
      "fade": 0.01,
      "minRadiusScale": 0.33,
      "worldDistanceThreshold": 20,
      "worldDistanceFalloff": 5,
      "worldProximityThreshold": 6,
      "worldProximityFalloff": 3
    },
    "bloom": {
      "enabled": false,
      "intensity": 0.3,
      "luminanceThreshold": 0.9,
      "luminanceSmoothing": 0.2,
      "mipmapBlur": true,
      "radius": 0,
      "levels": 8
    },
    "godRays": {
      "enabled": false,
      "sunPosition": [
        5,
        10,
        5
      ],
      "samples": 60,
      "density": 0.96,
      "decay": 0.9,
      "weight": 0.4,
      "exposure": 0.6,
      "clampMax": 1,
      "blur": true,
      "kernelSize": "small"
    },
    "grid": {
      "enabled": false,
      "scale": 1,
      "lineWidth": 0
    },
    "noise": {
      "enabled": false,
      "opacity": 1,
      "premultiply": false
    },
    "depthOfField": {
      "enabled": false,
      "focusDistance": 5,
      "focusRange": 5,
      "focalLength": 0.02,
      "bokehScale": 6
    },
    "chromaticAberration": {
      "enabled": false,
      "offsetX": 0.002,
      "offsetY": 0.002,
      "radialModulation": false,
      "modulationOffset": 0.15
    },
    "lensflare": {
      "enabled": false,
      "lensPosition": [
        -25,
        6,
        -60
      ],
      "smoothTime": 0.07,
      "glareSize": 0.2,
      "flareSize": 0.01,
      "flareSpeed": 0.01,
      "flareShape": 0.01,
      "animated": true,
      "anamorphic": false,
      "colorGain": "#141414",
      "haloScale": 0.5,
      "secondaryGhosts": true,
      "aditionalStreaks": true,
      "ghostScale": 0,
      "opacity": 1,
      "starBurst": false
    },
    "vignette": {
      "enabled": false,
      "offset": 0.3,
      "darkness": 0.3,
      "eskil": false
    },
    "smaa": {
      "enabled": false
    },
    "sepia": {
      "enabled": false,
      "intensity": 0
    },
    "scanline": {
      "enabled": false,
      "density": 1.25
    },
    "pixelation": {
      "enabled": false,
      "granularity": 5
    },
    "outline": {
      "enabled": false,
      "selectionLayer": 10,
      "edgeStrength": 2.5,
      "pulseSpeed": 0,
      "visibleEdgeColor": "#ffffff",
      "hiddenEdgeColor": "#22090a",
      "kernelSize": "large",
      "blur": false,
      "xRay": true
    },
    "selectiveBloom": {
      "enabled": false,
      "selectionLayer": 10,
      "intensity": 1,
      "luminanceThreshold": 0.9,
      "luminanceSmoothing": 0.025,
      "kernelSize": "large",
      "mipmapBlur": true,
      "inverted": false,
      "ignoreBackground": false
    },
    "ramp": {
      "enabled": false,
      "rampType": "linear",
      "rampStart": [
        0.5,
        0.5
      ],
      "rampEnd": [
        1,
        1
      ],
      "startColor": "#000000",
      "endColor": "#ffffff",
      "opacity": 0.5,
      "rampBias": 0.5,
      "rampGain": 0.5,
      "rampMask": false,
      "rampInvert": false
    }
  },
  "animations": {
    "clips": [],
    "autoplayClip": null
  },
  "annotations": [
    {
      "id": 1,
      "worldPosition": [
        -127.41860913289996,
        4.943964630667717,
        24.862999431455236
      ],
      "localPosition": [
        -127.41860913289996,
        4.943964630667717,
        24.862999431455236
      ],
      "worldNormal": [
        -0.02931677310383265,
        0.9976238356266415,
        -0.06234748915847637
      ],
      "anchorNodeName": "lotus-tower---nelum-kuluna_Object_6",
      "anchorLocalPosition": [
        -1.2454454003876663,
        -89.95611492682961,
        6.164607423740122
      ],
      "title": "Lotus Tower - Colombo",
      "description": "South Asia’s tallest tower, a lotus bud rising 350 m over the capital.",
      "cameraView": {
        "position": [
          -127.419,
          -38.163,
          106.594
        ],
        "target": [
          -127.419,
          -24.863,
          12.544
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/lotus-tower.png",
          "alt": "QR code: scan to open Lotus Tower - Colombo on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Lotus_Tower",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 2,
      "worldPosition": [
        -74.30735221964059,
        13.994951553393626,
        24.938921721037985
      ],
      "localPosition": [
        -74.30735221964059,
        13.994951553393626,
        24.938921721037985
      ],
      "worldNormal": [
        0.7230898893301262,
        0.6869270210944858,
        0.0726104650777137
      ],
      "anchorNodeName": "low+polly+elephant_tripo_node_e3e17227-e8d1-44df-a148-ee4a4e4abbc2",
      "anchorLocalPosition": [
        0.13655513848743464,
        0.46090982651342416,
        0.1474228022356501
      ],
      "title": "Yala National Park",
      "description": "Scrub jungle and rock outcrops, home to one of the world’s densest leopard populations.",
      "cameraView": {
        "position": [
          -74.307,
          -38.239,
          115.645
        ],
        "target": [
          -74.307,
          -24.939,
          21.595
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/yala.png",
          "alt": "QR code: scan to open Yala National Park on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Yala_National_Park",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 3,
      "worldPosition": [
        -132.56490269213302,
        2.5413067387699595,
        78.71319691232279
      ],
      "localPosition": [
        -132.56490269213302,
        2.5413067387699595,
        78.71319691232279
      ],
      "worldNormal": [
        0.09136726931713567,
        0.9956221355676275,
        0.0197125661771122
      ],
      "anchorNodeName": "model-(16)_Object_2",
      "anchorLocalPosition": [
        39.74288553261198,
        -30.751485453847653,
        177.62960525994686
      ],
      "title": "Southern Province",
      "description": "Golden beaches, the Galle Fort ramparts and whale-watching off Mirissa.",
      "cameraView": {
        "position": [
          -132.565,
          -96.913,
          141.641
        ],
        "target": [
          -132.565,
          -78.713,
          12.941
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/southern-province.png",
          "alt": "QR code: scan to open Southern Province on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Southern_Province,_Sri_Lanka",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 4,
      "worldPosition": [
        -89.15090635142354,
        15.897552713126025,
        -49.06047133159835
      ],
      "localPosition": [
        -89.15090635142354,
        15.897552713126025,
        -49.06047133159835
      ],
      "worldNormal": [
        -0.4440388701207901,
        0.895708753810248,
        -0.02313677094032218
      ],
      "anchorNodeName": "chaithyatemple_Object_3",
      "anchorLocalPosition": [
        2.4742839344641334,
        0.10775357519013617,
        0.8884498356237458
      ],
      "title": "Anuradhapura",
      "description": "The first great capital, its giant dagobas rising over the dry-zone plains.",
      "cameraView": {
        "position": [
          -89.151,
          36.46,
          112.198
        ],
        "target": [
          -89.151,
          49.06,
          23.098
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/anuradhapura.png",
          "alt": "QR code: scan to open Anuradhapura on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Anuradhapura",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 5,
      "worldPosition": [
        -95.178733760422,
        7.088751326356226,
        -29.07192929748669
      ],
      "localPosition": [
        -95.178733760422,
        7.088751326356226,
        -29.07192929748669
      ],
      "worldNormal": [
        -0.052908982853300604,
        0.9138680927066389,
        -0.4025490636756712
      ],
      "anchorNodeName": "tempel-tor_Object_2",
      "anchorLocalPosition": [
        1.0368540649635103,
        1.392296004338473,
        1.1014606147872927
      ],
      "title": "Polonnaruwa",
      "description": "A medieval royal city of palaces, reservoirs and the carved Buddhas of Gal Vihara.",
      "cameraView": {
        "position": [
          -95.179,
          17.172,
          98.039
        ],
        "target": [
          -95.179,
          29.072,
          13.889
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/polonnaruwa.png",
          "alt": "QR code: scan to open Polonnaruwa on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Polonnaruwa",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 6,
      "worldPosition": [
        -114.21364626355425,
        9.510626875445467,
        -124.54131225965207
      ],
      "localPosition": [
        -114.21364626355425,
        9.510626875445467,
        -124.54131225965207
      ],
      "worldNormal": [
        -0.2210871388029122,
        0.9447624560308758,
        0.2419594567906976
      ],
      "anchorNodeName": "lighthouse_Lighthouse_1",
      "anchorLocalPosition": [
        7.077384607579891,
        6.114980165311646,
        3.9763563064663865
      ],
      "title": "Point Pedro",
      "description": "The northernmost tip of the island, marked by its lighthouse.",
      "cameraView": {
        "position": [
          -114.214,
          113.341,
          95.111
        ],
        "target": [
          -114.214,
          124.541,
          15.911
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/point-pedro.png",
          "alt": "QR code: scan to open Point Pedro on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Point_Pedro",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 7,
      "worldPosition": [
        -27.156778461659087,
        6.8782496396602255,
        44.17855187034322
      ],
      "localPosition": [
        -27.156778461659087,
        6.8782496396602255,
        44.17855187034322
      ],
      "worldNormal": [
        -0.18581095370249262,
        0.9820800414236001,
        0.03151319916463613
      ],
      "anchorNodeName": "model-(15)_Mosque_9",
      "anchorLocalPosition": [
        -7.112743140566381,
        0.5723330628247396,
        12.299798282756557
      ],
      "title": "Batticaloa",
      "description": "A lagoon town on the east coast, famous for its “singing fish”.",
      "cameraView": {
        "position": [
          -27.157,
          -56.779,
          103.178
        ],
        "target": [
          -27.157,
          -44.179,
          14.078
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/batticaloa.png",
          "alt": "QR code: scan to open Batticaloa on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Batticaloa",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 8,
      "worldPosition": [
        -113.68055507286269,
        2.2824538207745846,
        -95.49491258484454
      ],
      "localPosition": [
        -113.68055507286269,
        2.2824538207745846,
        -95.49491258484454
      ],
      "worldNormal": [
        -0.08521795884909147,
        0.9889099334510648,
        -0.1216348758021528
      ],
      "anchorNodeName": "uthirakosamangai-temple-india_Object_4",
      "anchorLocalPosition": [
        0.8117560406621573,
        16.098007836926786,
        -2.3576475468546154
      ],
      "title": "Northern Province",
      "description": "Palmyra palms, Hindu kovils and the lagoons of the Jaffna peninsula.",
      "cameraView": {
        "position": [
          -113.681,
          77.295,
          141.382
        ],
        "target": [
          -113.681,
          95.495,
          12.682
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/northern-province.png",
          "alt": "QR code: scan to open Northern Province on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Northern_Province,_Sri_Lanka",
          "label": "Open website"
        }
      ]
    },
    {
      "id": 9,
      "worldPosition": [
        -124.97957279791419,
        9.387876306006774,
        -30.658473793162425
      ],
      "localPosition": [
        -124.97957279791419,
        9.387876306006774,
        -30.658473793162425
      ],
      "worldNormal": [
        -0.1369075408360238,
        0.8737900666079367,
        -0.46663395157181825
      ],
      "anchorNodeName": "killer-whale-2_Object_7",
      "anchorLocalPosition": [
        59.557747217664655,
        56.8641039903805,
        -482.2494743298598
      ],
      "title": "Wilpattu National Park",
      "description": "The island’s largest national park, dotted with natural lakes called “villus”.",
      "cameraView": {
        "position": [
          -124.98,
          17.358,
          111.038
        ],
        "target": [
          -124.98,
          30.658,
          16.988
        ],
        "fov": 50,
        "zoom": 1
      },
      "images": [
        {
          "src": "/qr/wilpattu.png",
          "alt": "QR code: scan to open Wilpattu National Park on Wikipedia"
        }
      ],
      "links": [
        {
          "href": "https://en.wikipedia.org/wiki/Wilpattu_National_Park",
          "label": "Open website"
        }
      ]
    }
  ],
  "cinematic": {
    "enabled": true,
    "waypoints": [
      {
        "position": [
          -78.95326496946296,
          11.27372228957575,
          308.5386477705918
        ],
        "target": [
          -78.95326496946296,
          11.27372228957573,
          0.7053119471032503
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -56.90803768994534,
          -89.30046325246215,
          105.40553503908501
        ],
        "target": [
          -63.84165792158815,
          -72.97702655033677,
          1.9521661698818376
        ],
        "azimuthAngle": 0.0669216137732728,
        "polarAngle": 1.726956283878449,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -65.0351581886339,
          -81.74767118292851,
          107.14194915831172
        ],
        "target": [
          -71.9687784202767,
          -65.42423448080314,
          3.688580289108543
        ],
        "azimuthAngle": 0.0669216137732728,
        "polarAngle": 1.7269469480327289,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -127.01169574817646,
          -25.959445064030003,
          52.0056677155773
        ],
        "target": [
          -127.01169574817646,
          -25.959445064030007,
          3.6301909813610678
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -48.200299767780116,
          -7.455077439670362,
          72.59755371645021
        ],
        "target": [
          -48.200299767780116,
          -7.455077439670365,
          15.701883245021609
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -68.74847011583064,
          -27.683115654828185,
          83.05648018503771
        ],
        "target": [
          -74.13065296279927,
          -27.68311565482819,
          6.08767955793974
        ],
        "azimuthAngle": 0.06980390839734484,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -117.27616034963596,
          -27.683115654828185,
          70.0535247763419
        ],
        "target": [
          -74.13065296279927,
          -27.68311565482819,
          6.08767955793974
        ],
        "azimuthAngle": -0.5934032130113598,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -125.77007098924929,
          31.041375432671597,
          43.162738413123506
        ],
        "target": [
          -125.77007098924929,
          31.041375432671593,
          6.709221474445607
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -86.1356786456349,
          61.30027634908373,
          57.91096472379333
        ],
        "target": [
          -86.1356786456349,
          61.30027634908373,
          7.358634357662556
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -21.40619477426155,
          -32.99563109354405,
          28.71611501380554
        ],
        "target": [
          -21.40619477426155,
          -32.99563109354405,
          7.290464839880357
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -111.07780099564086,
          86.41319892857572,
          68.51726719713336
        ],
        "target": [
          -111.07780099564086,
          86.41319892857572,
          -1.6033029734802842
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -112.28516967925248,
          120.25590410733703,
          22.091380581630357
        ],
        "target": [
          -112.28516967925248,
          120.25590410733703,
          6.522339107115128
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -119.72982063371254,
          -78.27318084161504,
          40.960365988328434
        ],
        "target": [
          -119.72982063371254,
          -78.27318084161504,
          3.7929029018961953
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -68.73525702676967,
          -62.650988233710336,
          36.65880638269557
        ],
        "target": [
          -68.73525702676967,
          -62.650988233710336,
          9.218439840196126
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.5707963267948966,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -109.7774393536574,
          -73.77376555942863,
          96.32588283320347
        ],
        "target": [
          -63.84165792158815,
          -72.97702655033677,
          1.9521661698818376
        ],
        "azimuthAngle": -0.4529861775999015,
        "polarAngle": 1.5783871002544367,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -79.32147738278015,
          -69.09184027632793,
          105.69420067247636
        ],
        "target": [
          -63.84165792158815,
          -72.97702655033677,
          1.9521661698818376
        ],
        "azimuthAngle": -0.14812996984843813,
        "polarAngle": 1.5337728801724506,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -25.737991678614833,
          -65.97425772793635,
          99.50318386491394
        ],
        "target": [
          -63.84165792158815,
          -72.97702655033677,
          1.9521661698818376
        ],
        "azimuthAngle": 0.37237887946889703,
        "polarAngle": 1.5040298776842642,
        "segmentDuration": 3.5
      },
      {
        "position": [
          -78.95326496946296,
          22.016950778067475,
          308.35112401978654
        ],
        "target": [
          -78.95326496946296,
          11.27372228957573,
          0.7053119471032503
        ],
        "azimuthAngle": 0,
        "polarAngle": 1.53588974175501,
        "segmentDuration": 3.5
      }
    ],
    "loop": true,
    "autoPlay": false,
    "duration": 63
  }
};
