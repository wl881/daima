const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 涓棿浠?app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// 璺敱
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// API: 鎼滅储瑙嗛
app.get('/api/search', async (req, res) => {
  try {
    const { q, page = 1 } = req.query;
    
    if (!q) {
      return res.status(400).json({ error: '缂哄皯鎼滅储鍏抽敭璇? });
    }
    
    // TODO: 鎺ュ叆鐪熷疄鐨勮棰戞悳绱?API
    // 绀轰緥锛氳繑鍥炴ā鎷熸暟鎹?    const results = [
      {
        id: 1,
        title: `鎼滅储缁撴灉锛?{q} - 瑙嗛1`,
        thumbnail: 'https://via.placeholder.com/320x180',
        duration: '10:30',
        channel: '绀轰緥棰戦亾',
        views: '1.2涓?
      },
      {
        id: 2,
        title: `鎼滅储缁撴灉锛?{q} - 瑙嗛2`,
        thumbnail: 'https://via.placeholder.com/320x180',
        duration: '15:45',
        channel: '绀轰緥棰戦亾2',
        views: '3.4涓?
      }
    ];
    
    res.json({
      success: true,
      query: q,
      page: parseInt(page),
      results: results
    });
    
  } catch (error) {
    console.error('鎼滅储閿欒:', error);
    res.status(500).json({ error: '鏈嶅姟鍣ㄩ敊璇? });
  }
});

// 鍚姩鏈嶅姟鍣?app.listen(PORT, () => {
  console.log(`馃帴 瑙嗛鎼滅储鏈嶅姟鍣ㄨ繍琛屽湪 http://localhost:${PORT}`);
});
