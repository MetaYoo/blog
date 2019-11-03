---
layout: post
title:  "Mybatis源码解析"
date:   2017-02-01 18:00
categories: mybatis源码解析
permalink: /archivers/mybatis-1
---

## 启动demo ##
```java
public class MybatisDemo {
    @Test
    public void startUp() {
            try {
                InputStream is = Resources.getResourceAsStream("mybatis-config.xml");
                SqlSessionFactory sqlSessionFactory = new SqlSessionFactoryBuilder().build(is);
                SqlSession sqlSession = sqlSessionFactory.openSession();
                Blog blog = sqlSession.selectOne("com.kotall.learn.mybatis.BlogMapper.selectBlog", 1);
                Assert.assertNotNull(blog);
                sqlSession.close();
            } catch (IOException e) {
                e.printStackTrace();
            }
        }
}
    
```

### Mybatis缓存 ###
默认缓存 Session级别

