var APP_DATA = {
  "scenes": [
    {
      "id": "0-kv-phng-bp",
      "name": "KV PHÒNG BẾP",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -2.5059267714367586,
          "pitch": 0.4341204885605432,
          "rotation": 0,
          "target": "2-kv-phng-n"
        },
        {
          "yaw": -2.470110109103647,
          "pitch": 0.09712633707527019,
          "rotation": 0,
          "target": "1-kv-phng-khch"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-kv-phng-khch",
      "name": "KV PHÒNG KHÁCH",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0499541262756118,
          "pitch": 0.2397777323590784,
          "rotation": 0,
          "target": "2-kv-phng-n"
        },
        {
          "yaw": -1.4094916003912914,
          "pitch": 0.06132074598442294,
          "rotation": 0,
          "target": "0-kv-phng-bp"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-kv-phng-n",
      "name": "KV PHÒNG ĂN",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.9658622378229094,
          "pitch": 0.08713585996474293,
          "rotation": 0,
          "target": "0-kv-phng-bp"
        },
        {
          "yaw": 2.708564404221695,
          "pitch": 0.30802736209806625,
          "rotation": 0,
          "target": "1-kv-phng-khch"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
