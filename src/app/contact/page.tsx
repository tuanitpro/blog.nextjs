import Image from "next/image";
import { Metadata } from "next";
import IonIcon from "@reacticons/ionicons";

export const metadata: Metadata = {
  title: "Liên hệ",
  description: "Tuấn - Hãy theo đuổi đam mê, nợ nần sẽ theo đuổi bạn",
};

export default function Contact() {
  return (
    <article className="has-post-thumbnail hentry">
      <div className="post-thumbnail">
        <div style={{ width: "100%", height: "510px", position: "relative" }}>
          <Image fill src="/contact.jpg" alt="Blog of Tuan" />
        </div>
      </div>

      <header className="entry-header">
        <h1 className="entry-title">Liên hệ</h1>
      </header>
      <div className="entry-content">
        <span>
          {" "}
          Nếu bạn có bất kỳ thắc mắc nào về blog hoặc các trang web nói chung,
          xin đừng ngần ngại liên hệ với tôi. Nếu bạn có một câu hỏi kỹ thuật,
          hãy chắc chắn để bao gồm càng nhiều chi tiết càng tốt để tôi có thể
          cung cấp sự hỗ trợ tốt nhất cho bạn. Nếu bạn muốn tôi thiết kế website
          hay cài đặt blog của bạn, hãy liên hệ với tôi.
          <br />
          Tôi trả lời cho tất cả các email phản hồi. <IonIcon name="mail" />{" "}
          tuanitpro@gmail.com hoặc: <br />
          <IonIcon name="call" /> 097 6060 432
        </span>
        <hr />
        <div>
          <form method="post" name="contact">
            <p>
              <label>
                {" "}
                Tên bạn
                <br />
                <span className="wpcf7-form-control-wrap" data-name="your-name">
                  <input
                    size={40}
                    maxLength={400}
                    required
                    type="text"
                    name="your-name"
                  />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                {" "}
                Email
                <br />
                <span data-name="your-email">
                  <input
                    size={40}
                    maxLength={400}
                    type="email"
                    name="your-email"
                    required
                  />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                {" "}
                Tiêu đề (Tuỳ chọn)
                <br />
                <span data-name="your-subject">
                  <input
                    size={40}
                    maxLength={400}
                    aria-invalid="false"
                    type="text"
                    name="your-subject"
                  />
                </span>{" "}
              </label>
            </p>
            <p>
              <label>
                Nội dung
                <br />
                <span data-name="your-message">
                  <textarea name="your-message" rows={5} maxLength={2000} />
                </span>
              </label>
            </p>
            <input type="submit" value="Gửi ngay" />
          </form>
        </div>
      </div>
    </article>
  );
}
