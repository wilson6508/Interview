<template>
  <div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'全局異常處理'">
          <template v-slot:sourceCode>
            <pre>
@RestControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public Result&lt;String&gt; handleException(Exception e) {
        e.printStackTrace();
        String msg = StringUtils.hasLength(e.getMessage()) ? e.getMessage() : "操作失敗";
        return Result.error(msg);
    }

}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Controller'">
          <template v-slot:sourceCode>
            <pre>
@Validated
@RestController
@RequestMapping("/user")
public class UserController {

    @Autowired
    private UserService userService;

    @PostMapping("/register")
    public Result&lt;String&gt; register(@Pattern(regexp = "^\\S{5,16}$") String username, @Pattern(regexp = "^\\S{5,16}$") String password) {
        User u = userService.findByUserName(username);
        if (null == u) {
            userService.register(username, password);
            return Result.success();
        }
        return Result.error("用戶名已有人使用");
    }

}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Service'">
          <template v-slot:sourceCode>
            <pre>
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserMapper userMapper;

    @Override
    public User findByUserName(String username) {
        return userMapper.findByUserName(username);
    }

    @Override
    public void register(String username, String password) {
        String md5String = MD5Util.getMD5String(password);
        userMapper.add(username, md5String);
    }

}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <div class="row m-4">
      <div class="col-md-8 col-12">
        <CodeContainer :title="'Mapper'">
          <template v-slot:sourceCode>
            <pre>
@Mapper
public interface UserMapper {

    @Select("select * from user where username = #{username};")
    User findByUserName(String username);

    @Insert("insert into user(username, password, create_time, update_time)" +
            " values(#{username}, #{password}, now(), now());")
    void add(String username, String password);

}
              </pre>
          </template>
        </CodeContainer>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import CodeContainer from "@/components/shared/CodeContainer.vue";
import Footer from "@/components/shared/Footer.vue";

export default {
  name: "Api",
  components: {
    CodeContainer,
    Footer
  },
};
</script>