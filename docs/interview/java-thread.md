---
sidebar: auto
title:  "Java 线程顺序执行"
date:   2014-02-01 09:00:13
---

```java
public class MultiThreadTest {

    /**
     *
     * @throws Exception
     */
    @Test
    public void test1() throws Exception {
        Thread t1 = new Thread(() -> System.out.println("线程1执行"));
        Thread t2 = new Thread(() -> System.out.println("线程2执行"));
        Thread t3 = new Thread(() -> System.out.println("线程3执行"));

        t1.start();
        t1.join();
        t2.start();
        t2.join();
        t3.start();
        t3.join();
    }

    /**
     * Executors.newSingleThreadExecutor() 会维护一个FIFO队列
     * @throws Exception
     */
    @Test
    public void test2() throws Exception {
        Thread t1 = new Thread(() -> System.out.println("线程1执行"));
        Thread t2 = new Thread(() -> System.out.println("线程2执行"));
        Thread t3 = new Thread(() -> System.out.println("线程3执行"));

        ExecutorService executorService = Executors.newSingleThreadExecutor();
        executorService.submit(t1);
        TimeUnit.SECONDS.sleep(5);
        executorService.submit(t2);
        executorService.submit(t3);
        executorService.shutdown();
    }

}
```