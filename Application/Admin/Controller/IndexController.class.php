<?php
namespace Admin\Controller;
use Think\Controller;

class IndexController extends Controller {
    public function index(){
        $this->display();
    }
	
	public function showAdminPage(){
//	    $db = new \Admin\Common\MysqliDb('localhost', 'root', '123456', 'dreamteam');
//        $data = Array (
//            'id' => 1,
//            'name' => 'tommy',
//            'introduce' => 'good'
//        );
//        $id = $db->insert ('members', $data);
//        if ($id)
//            echo 'user was created. Id=' . $id;
//        else
//            echo 'insert failed: ' . $db->getLastError();
        //$this->insert();
        $this->display();
    }

    private function insert(){
        header("Content-Type:text/html; charset=utf-8");
        $Dao = M("Members");	// 实例化模型类

        // 构建写入的数据数组
        $data["id"] = 1;
        $data["name"] = "tommy";
        $data["introduce"] = "handsome";

        // 写入数据
        if($lastInsId = $Dao->add($data)){
            echo "插入数据 id 为：$lastInsId";
        } else {
            $this->error('数据写入错误！');
        }
    }
}