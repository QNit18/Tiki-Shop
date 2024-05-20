import React from 'react'
import "./Footer.css"

const Footer = () => {
  return (
    <div className="container-fluid footerBc mt-3">
      <div className="container mt-4">
        <div className="row">
          <div className="col-lg col-6 support-customers">
            <h5>Hỗ trợ khách hàng</h5>
            <a href="/">Hotline: 1900-6035</a>
            <br />
            <a href="/">1000 đ / 8-21h kể cả T7, CN</a>
            <br />
            <a href="/">Các câu hỏi thường gặa</a>
            <br />
            <a href="/">Gửi yêu cầu hỗ trợ</a>
            <br />
            <a href="/">Hướng dẫn đặt hàng</a>
            <br />
            <a href="/">ahương thức vận chuyển</a>
            <br />
            <a href="/">Chính sách đổi trả</a>
            <br />
            <a href="/">Hướng dẫn trả góa</a>
            <br />
            <a href="/">Chính sách nhậa khẩu</a>
            <br />
            <a href="/">Hỗ trợ khách hàng: hotro@tiki.vn</a>
            <br />
          </div>

          <div className="col-lg col-6 about-tiki">
            <h5>Về Tiki</h5>
            <a href="/">Giới thiệu Tiki</a>
            <br />
            <a href="/">Tiki Blog</a>
            <br />
            <a href="/">Tuyển dụng</a>
            <br />
            <a href="/">Chính sách bảo mật thanh toán</a>
            <br />
            <a href="/">Chính sách bảo mật thông tin cá nhân</a>
            <br />
            <a href="/">Chính sách giải quyết khiếu nại</a>
            <br />
            <a href="/">Giới thiệu Tiki Xu</a>
            <br />
            <a href="/">Tiếp thị liên kết cùng Tiki</a>
            <br />
            <a href="/">Hỗ trợ khách hàng: hotro@tiki.vn</a>
            <br />
          </div>

          <div className="col-lg col-6 cooraoration">
            <h5>Hợa tác và liên kết</h5>
            <a href="/">Quy chế hoạt động Sàn GDTMĐT</a>
            <br />
            <a href="/">Bán hàng cùng Tiki</a>
            <br /> <br />
            <h5>Chứng nhận bởi</h5>
          </div>

          <div className="col-lg col-6 cooraoration">
            <h5>Phương thức thành toán</h5>
            <br />
            <h5>Dịch vụ giao hàng</h5>
          </div>

          <div className="col-lg col-6 cooraoration">
            <h5>Kết nối với chúng tôi</h5>
            <div>
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-youtube"></i>
              <i class="fa-brands fa-twitch"></i>
            </div>
            <br />
            <br />
            <h6>Tải ứng dụng trên điện thoại</h6>
          </div>
        </div>
        <hr />
        <div className="about-company">
          <h5>Công ty TNHH TIKI</h5>
          <p>
            Tòa nhà số 52 đường Út Tịch, Phường 4, Quận Tân Bình, Thành phố Hồ
            Chí Minh
          </p>
          <p>
            Giấy chứng nhận đăng ký doanh nghiệp số 0309532909 do Sở Kế Hoạch và
            Đầu Tư Thành phố Hồ Chí Minh cấp lần đầu vào ngày 06/01/2010.
          </p>
          <p>
            Hotline: <a style={{ color: "blue" }}>1900 6035</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer